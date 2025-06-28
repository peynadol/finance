import clsx from "clsx";
import { ChevronRight } from "lucide-react";

const buttonVariants = {
  primary: "bg-grey-900 text-white hover:bg-grey-500",
  secondary:
    "bg-beige-100 text-grey-900 hover:bg-white border border-transparent hover:border-beige-500",
  tertiary: "bg-transparent text-grey-500 font-normal hover:text-grey-900",
  destroy: "bg-red text-white hover:bg-red/80",
} as const;

type Variant = keyof typeof buttonVariants;

type AppButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AppButton({
  children,
  variant = "primary",
  className,
  ...props
}: AppButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-4 rounded-lg text-[14px] font-bold transition cursor-pointer";

  return (
    <button
      className={clsx(base, buttonVariants[variant], className)}
      {...props}
    >
      {children}
      {variant === "tertiary" && (
        <ChevronRight className="w-4 h-4 ml-2" aria-hidden />
      )}
    </button>
  );
}
