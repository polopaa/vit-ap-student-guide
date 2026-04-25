import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-none border px-2.5 py-1 text-xs font-semibold tracking-widest uppercase w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-all overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-primary/60 bg-primary/20 text-primary [a&]:hover:bg-primary/30",
        secondary:
          "border-secondary/40 bg-secondary/10 text-secondary [a&]:hover:bg-secondary/20",
        destructive:
          "border-destructive/60 bg-destructive/20 text-destructive [a&]:hover:bg-destructive/30",
        outline:
          "border-border/60 text-muted-foreground bg-transparent [a&]:hover:bg-muted/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
