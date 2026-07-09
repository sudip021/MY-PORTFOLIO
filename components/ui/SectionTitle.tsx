type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <h2 className="mb-10 text-5xl font-bold tracking-tight">
      {title}
    </h2>
  );
}