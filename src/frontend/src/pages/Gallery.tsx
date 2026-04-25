import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Lock, Trash2, Upload, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Layout } from "../components/Layout";

const ADMIN_PASSWORD = "vitap2025";
const STORAGE_KEY = "vitap_gallery_images";

interface GalleryImage {
  id: string;
  dataUrl: string;
  caption: string;
  tag: string;
  uploadedAt: number;
}

const TAGS = [
  "All",
  "Campus",
  "Hostel",
  "Food Area",
  "Academic",
  "Sports",
  "Other",
];

function loadImages(): GalleryImage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as GalleryImage[]) : [];
  } catch {
    return [];
  }
}

function saveImages(images: GalleryImage[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
}

function EmptyState({ isAdmin }: { isAdmin: boolean }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-28 px-6 text-center"
      data-ocid="gallery.empty_state"
    >
      <div className="w-20 h-20 border border-border/40 flex items-center justify-center mb-6">
        <Camera className="w-10 h-10 text-muted-foreground/50" />
      </div>
      <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
        Nothing here yet
      </h3>
      <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
        {isAdmin
          ? "Upload the first photo using the button above — drag and drop or click to select."
          : "I'll be adding photos of campus, key locations, and hostel blocks here soon. Check back."}
      </p>
    </div>
  );
}

function ImageCard({
  image,
  isAdmin,
  onDelete,
  onClick,
  index,
}: {
  image: GalleryImage;
  isAdmin: boolean;
  onDelete: (id: string) => void;
  onClick: () => void;
  index: number;
}) {
  return (
    <button
      type="button"
      className="group relative w-full overflow-hidden border border-border/40 bg-card cursor-pointer transition-all duration-500 hover:border-secondary/50 text-left"
      data-ocid={`gallery.item.${index}`}
      onClick={onClick}
      aria-label={`View photo: ${image.caption || image.tag}`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted/20">
        <img
          src={image.dataUrl}
          alt={image.caption || image.tag}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
      </div>
      <div className="p-4 border-t border-border/30">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            {image.caption && (
              <p className="font-display text-sm font-semibold text-foreground truncate">
                {image.caption}
              </p>
            )}
            <Badge variant="outline" className="text-xs mt-1">
              {image.tag}
            </Badge>
          </div>
          {isAdmin && (
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive hover:border-destructive/40"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(image.id);
              }}
              aria-label="Delete photo"
              data-ocid={`gallery.delete_button.${index}`}
            >
              <Trash2 className="w-3.5 h-3.5" />
            </Button>
          )}
        </div>
      </div>
    </button>
  );
}

function AdminLoginDialog({
  open,
  onClose,
  onSuccess,
}: { open: boolean; onClose: () => void; onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setPassword("");
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-sm"
        data-ocid="gallery.admin_login_dialog"
      >
        <div className="flex flex-col gap-6 pt-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-primary/40 flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-display font-semibold text-foreground">
                Admin Access
              </p>
              <p className="text-xs text-muted-foreground">
                Enter the password to manage photos
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="admin-password"
                className="text-xs text-muted-foreground uppercase tracking-widest"
              >
                Password
              </Label>
              <Input
                id="admin-password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                autoFocus
                data-ocid="gallery.admin_password_input"
              />
              {error && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="gallery.admin_password_error"
                >
                  Wrong password — try again.
                </p>
              )}
            </div>
            <div className="flex gap-2 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                data-ocid="gallery.admin_login_cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                data-ocid="gallery.admin_login_submit_button"
              >
                Unlock
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function UploadDialog({
  open,
  onClose,
  onUpload,
}: {
  open: boolean;
  onClose: () => void;
  onUpload: (image: Omit<GalleryImage, "id" | "uploadedAt">) => void;
}) {
  const [caption, setCaption] = useState("");
  const [tag, setTag] = useState("Campus");
  const [preview, setPreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function reset() {
    setCaption("");
    setTag("Campus");
    setPreview(null);
    setDragging(false);
  }
  function handleClose() {
    reset();
    onClose();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setPreview(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setPreview(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!preview) return;
    onUpload({ dataUrl: preview, caption, tag });
    handleClose();
  }

  const uploadTags = TAGS.filter((t) => t !== "All");

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent className="max-w-md" data-ocid="gallery.upload_dialog">
        <div className="flex flex-col gap-5 pt-2">
          <div>
            <p className="font-display font-semibold text-foreground text-base">
              Add a Photo
            </p>
            <p className="text-xs text-muted-foreground">
              Pick a photo, give it a caption, and tag the category
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <button
              type="button"
              className={[
                "border-2 border-dashed transition-smooth flex flex-col items-center justify-center p-6 cursor-pointer min-h-[140px] w-full",
                dragging
                  ? "border-secondary/60 bg-secondary/5"
                  : "border-border/40 hover:border-secondary/40 hover:bg-muted/20",
              ].join(" ")}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileRef.current?.click()}
              aria-label="Drop zone for photo upload"
              data-ocid="gallery.dropzone"
            >
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleFileChange}
                data-ocid="gallery.upload_button"
              />
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-32 object-contain"
                />
              ) : (
                <>
                  <Upload className="w-8 h-8 text-muted-foreground/50 mb-2" />
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="text-secondary font-medium">
                      Click to select
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    JPG, PNG, WEBP supported
                  </p>
                </>
              )}
            </button>
            {preview && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="self-start text-muted-foreground text-xs"
                onClick={() => {
                  setPreview(null);
                  if (fileRef.current) fileRef.current.value = "";
                }}
              >
                <X className="w-3.5 h-3.5 mr-1" /> Remove image
              </Button>
            )}
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="caption"
                className="text-xs text-muted-foreground uppercase tracking-widest"
              >
                Caption / Location name
              </Label>
              <Input
                id="caption"
                placeholder="e.g. Food Street, Hostel Block A"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                data-ocid="gallery.caption_input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs text-muted-foreground uppercase tracking-widest">
                Category
              </Label>
              <div className="flex flex-wrap gap-2">
                {uploadTags.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTag(t)}
                    className={[
                      "px-3 py-1 text-xs font-medium tracking-wider uppercase border transition-smooth",
                      tag === t
                        ? "bg-primary/20 text-primary border-primary/50"
                        : "bg-transparent text-muted-foreground border-border/40 hover:border-secondary/40 hover:text-secondary",
                    ].join(" ")}
                    data-ocid={`gallery.tag_button.${t.toLowerCase().replace(" ", "_")}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2 justify-end pt-1">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                data-ocid="gallery.upload_cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!preview}
                data-ocid="gallery.upload_submit_button"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function LightboxDialog({
  image,
  onClose,
}: { image: GalleryImage | null; onClose: () => void }) {
  return (
    <Dialog open={!!image} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-4xl p-0 overflow-hidden bg-black border-border/30"
        data-ocid="gallery.lightbox_dialog"
      >
        {image && (
          <div className="flex flex-col">
            <img
              src={image.dataUrl}
              alt={image.caption || image.tag}
              className="w-full object-contain max-h-[75vh]"
            />
            {(image.caption || image.tag) && (
              <div className="px-6 py-4 flex items-center gap-3 border-t border-border/30 bg-card">
                <div className="flex-1 min-w-0">
                  {image.caption && (
                    <p className="font-display font-semibold text-foreground truncate">
                      {image.caption}
                    </p>
                  )}
                  <Badge variant="outline" className="text-xs mt-1">
                    {image.tag}
                  </Badge>
                </div>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>(loadImages);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    saveImages(images);
  }, [images]);

  function handleUpload(data: Omit<GalleryImage, "id" | "uploadedAt">) {
    const newImage: GalleryImage = {
      ...data,
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      uploadedAt: Date.now(),
    };
    setImages((prev) => [newImage, ...prev]);
  }

  function handleDelete(id: string) {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }

  const filtered =
    activeTag === "All"
      ? images
      : images.filter((img) => img.tag === activeTag);

  return (
    <Layout>
      {/* Chapter Hero */}
      <section className="section-bg-light px-6 pt-20 pb-16 border-b border-border/30">
        <div className="max-w-5xl mx-auto">
          <p className="chapter-label mb-4" data-ocid="gallery.page_label">
            Chapter
          </p>
          <h1 className="text-hero text-foreground mb-6 fade-in-up">GALLERY</h1>
          <div className="gold-underline w-16 mb-8" />
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed fade-in-up fade-in-up-delay-1">
            Photos of campus, hostels, food areas, and key spots — so you
            actually know what you're walking into. I'll keep adding more as I
            take them.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <Badge variant="secondary" className="text-xs">
              📸 {images.length} photo{images.length !== 1 ? "s" : ""}
            </Badge>
            {isAdmin ? (
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => setShowUpload(true)}
                  data-ocid="gallery.upload_open_button"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Add Photo
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsAdmin(false)}
                  data-ocid="gallery.admin_logout_button"
                >
                  Exit Admin
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowLogin(true)}
                data-ocid="gallery.admin_login_open_button"
              >
                <Lock className="w-3.5 h-3.5 mr-2" />
                Admin
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      {images.length > 0 && (
        <section className="section-bg-muted px-6 py-4 border-b border-border/30 sticky top-0 z-10 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter by category"
              data-ocid="gallery.filter_tabs"
            >
              {TAGS.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  role="tab"
                  aria-selected={activeTag === tag}
                  onClick={() => setActiveTag(tag)}
                  className={[
                    "px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border transition-smooth",
                    activeTag === tag
                      ? "bg-primary/20 text-primary border-primary/50"
                      : "bg-transparent text-muted-foreground border-border/40 hover:border-secondary/40 hover:text-secondary",
                  ].join(" ")}
                  data-ocid={`gallery.filter.${tag.toLowerCase().replace(" ", "_")}`}
                >
                  {tag}
                  {tag !== "All" && (
                    <span className="ml-1.5 opacity-50">
                      ({images.filter((i) => i.tag === tag).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Grid */}
      <section
        className="section-bg-light px-6 py-12"
        data-ocid="gallery.grid_section"
      >
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <EmptyState isAdmin={isAdmin} />
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              data-ocid="gallery.photo_list"
            >
              {filtered.map((image, i) => (
                <ImageCard
                  key={image.id}
                  image={image}
                  isAdmin={isAdmin}
                  onDelete={handleDelete}
                  onClick={() => setLightboxImage(image)}
                  index={i + 1}
                />
              ))}
            </div>
          )}
          {activeTag !== "All" &&
            filtered.length === 0 &&
            images.length > 0 && (
              <div
                className="text-center py-12"
                data-ocid="gallery.no_filter_results"
              >
                <p className="text-sm text-muted-foreground mb-3">
                  No photos in this category yet.
                </p>
                <button
                  type="button"
                  className="text-sm text-secondary hover:underline"
                  onClick={() => setActiveTag("All")}
                >
                  View all photos
                </button>
              </div>
            )}
        </div>
      </section>

      <AdminLoginDialog
        open={showLogin}
        onClose={() => setShowLogin(false)}
        onSuccess={() => {
          setIsAdmin(true);
          setShowLogin(false);
        }}
      />
      <UploadDialog
        open={showUpload}
        onClose={() => setShowUpload(false)}
        onUpload={handleUpload}
      />
      <LightboxDialog
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </Layout>
  );
}
