export default function Button({
  onClick,
  className,
  children,
}: {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg bg-myteal-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-myteal-600 active:ring-2 active:ring-myteal-400 ${className}`}
    >
      {children}
    </button>
  );
}
