type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
      {children}
    </button>
  );
}