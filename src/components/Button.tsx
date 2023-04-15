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
      className={`text-white bg-myteal-500 hover:bg-myteal-600 active:ring-2 active:ring-myteal-400 font-medium text-sm rounded-lg px-5 py-2.5 ${className}`}
    >
      {children}
    </button>
  );
}
