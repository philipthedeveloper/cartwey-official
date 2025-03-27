import { cn } from "@/lib/utils";

type FormGroupProps = {
  name: string;
  placeholder: string;
  label: string;
  type?: "text" | "textarea";
  labelClassName?: string;
  inputClassName?: string;
};

export const FormGroup = ({
  label,
  placeholder,
  name,
  type,
  labelClassName,
  inputClassName,
}: FormGroupProps) => {
  switch (type) {
    case "textarea":
      return (
        <div className="flex flex-col gap-2">
          <label
            className={cn("font-inter text-xs text-[#E1E2E9]", labelClassName)}
          >
            {label}
          </label>
          <textarea
            placeholder={placeholder}
            name={name}
            id={name}
            rows={7}
            className={cn(
              "px-4 py-4 font-inter text-gray-800 bg-[#E9ECF8E5] rounded-[8px] border-none outline-none placeholder:text-[#5E6366]",
              inputClassName
            )}
          />
        </div>
      );
    default:
      return (
        <div className="flex flex-col gap-2">
          <label
            className={cn("font-inter text-xs text-[#E1E2E9]", labelClassName)}
          >
            {label}
          </label>
          <input
            placeholder={placeholder}
            name={name}
            id={name}
            className={cn(
              "px-4 py-4 font-inter text-gray-800 bg-[#E9ECF8E5] rounded-[8px] border-none outline-none placeholder:text-[#5E6366]",
              inputClassName
            )}
          />
        </div>
      );
  }
};
