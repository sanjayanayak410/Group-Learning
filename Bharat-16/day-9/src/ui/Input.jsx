export default function Input({ label, id, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-600">
        {label}
      </label>

      <input
        id={id}
        {...props}
        className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
      />
    </div>
  );
}
