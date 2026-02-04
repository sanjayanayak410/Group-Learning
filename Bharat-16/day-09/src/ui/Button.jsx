export default function Button({ children, type }) {
  return (
    <button
      type={type}
      className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
    >
      {children}
    </button>
  );
}
