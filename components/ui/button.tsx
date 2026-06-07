export default function Button({ children, variant = 'primary' }: { children: React.ReactNode, variant?: string }) {
  const baseStyle = "px-6 py-3 rounded font-medium transition-all duration-300";
  const styles = variant === 'primary' 
    ? "bg-blue-900 text-white hover:bg-blue-800" 
    : "border border-slate-300 hover:bg-slate-50";
    
  return <button className={`${baseStyle} ${styles}`}>{children}</button>;
}