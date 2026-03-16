import { PageLayout } from "@/components/PageLayout";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { CoursesSection } from "@/components/CoursesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { EventsPreview } from "@/components/EventsPreview";
import { TestimonialsHome } from "@/components/TestimonialsHome";
import { CTABanner } from "@/components/CTABanner";
import { useContactModal } from "@/hooks/useContactModal";

export default function Home() {
  const { openContact } = useContactModal();

  return (
    <PageLayout>
      <Hero onOpenContact={openContact} />
      <BentoGrid />
      <CoursesSection />
      <WhyUsSection />
      <EventsPreview />
      <TestimonialsHome />
      <CTABanner />
    </PageLayout>
  );
}
