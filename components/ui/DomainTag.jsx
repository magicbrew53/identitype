export default function DomainTag({ name, color }) {
  return (
    <span
      className="inline-block px-3 py-1 text-xs uppercase tracking-widest font-bold text-white rounded-sm"
      style={{ backgroundColor: color }}
    >
      {name}
    </span>
  );
}
