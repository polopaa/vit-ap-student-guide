import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold tracking-wider uppercase transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary/80 hover:bg-primary/80 hover:border-primary",
        destructive:
          "bg-destructive/20 text-destructive border border-destructive/50 hover:bg-destructive/30",
        outline:
          "border border-border/60 bg-transparent text-foreground hover:border-secondary/60 hover:text-secondary",
        secondary:
          "bg-secondary/15 text-secondary border border-secondary/40 hover:bg-secondary/25",
        ghost:
          "text-foreground border border-transparent hover:border-border/40 hover:bg-muted/30",
        link: "text-secondary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-5 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-none gap-1.5 px-4 text-xs has-[>svg]:px-3",
        lg: "h-11 px-8 text-base has-[>svg]:px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
