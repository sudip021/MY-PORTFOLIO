type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="rounded-full border border-cyan-500/40 px-3 py-1 text-sm text-cyan-300">
      {text}
    </span>
  );
}