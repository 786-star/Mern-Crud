const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  id,
  className = "",
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id || name}
          className="text-lg font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <input
        id={id || name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border-2 border-gray-200 text-gray-800 rounded-sm outline-none h-8 px-2 focus:border-indigo-500 transition ${className}`}
      />
    </div>
  );
};

export default Input;
