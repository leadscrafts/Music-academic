import { PageLayout } from "@/components/PageLayout";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";

export default function AboutPage() {
  return (
    <PageLayout>
      <About />
      <Reviews />
    </PageLayout>
  );
}
