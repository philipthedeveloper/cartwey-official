type FormGroupProps = {
  name: string;
  placeholder: string;
  label: string;
};

export const FormGroup = ({ label, placeholder, name }: FormGroupProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-inter text-xs text-[#E1E2E9]">{label}</label>
      <input
        placeholder={placeholder}
        name={name}
        id={name}
        className="px-4 py-4 font-inter text-gray-800 bg-[#E9ECF8E5] rounded-[8px] border-none outline-none placeholder:text-[#5E6366]"
      />
    </div>
  );
};
