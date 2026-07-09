import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <main className="min-h-screen py-20">
      <Container>
        <Badge text="Portfolio v2" />

        <div className="mt-8" />

        <SectionTitle title="Design System" />

        <Card>
          <p className="mb-6 text-slate-300">
            If you can see this card, the design system is working.
          </p>

          <Button>Get Started</Button>
        </Card>
      </Container>
    </main>
  );
}