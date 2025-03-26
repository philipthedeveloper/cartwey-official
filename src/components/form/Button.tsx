import { cn } from "@/lib/utils";

export const Button = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className={cn(
        "bg-[#FFC91F] rounded-[8px] py-4 px-7.5 w-full flex items-center justify-center",
        className
      )}
      {...props}
    />
  );
};
