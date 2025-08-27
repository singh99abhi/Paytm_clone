export function Inputbox({ 
  label, 
  placeholder, 
  onChange, 
  type = "text", 
  value = "" 
}) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-sm font-medium text-slate-700 py-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-lg border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
