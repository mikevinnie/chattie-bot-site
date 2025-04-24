export function Input({ placeholder, value, onChange, className }) {
  return <input placeholder={placeholder} value={value} onChange={onChange} className={`p-2 rounded bg-gray-800 text-white ${className}`} />;
}
