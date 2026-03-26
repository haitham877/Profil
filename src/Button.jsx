export function Button({ children, variant = "default", size = "md", className = "", ...props }) {
  let base = "px-5 py-2 rounded-full font-semibold inline-flex items-center justify-center transition-all duration-300 ";
  let variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105",
  };
  let sizes = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
