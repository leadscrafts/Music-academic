import { PageLayout } from "@/components/PageLayout";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { useContactModal } from "@/hooks/useContactModal";

export default function Home() {
  const { openContact } = useContactModal();

  return (
    <PageLayout>
      <Hero onOpenContact={openContact} />
      <BentoGrid />
    </PageLayout>
  );
}
