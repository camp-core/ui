import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button data-variant={variant} data-size={size} {...props}>
      {children}
    </button>
  );
}
