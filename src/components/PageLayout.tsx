import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useContactModal } from "@/hooks/useContactModal";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const { openContact } = useContactModal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenContact={openContact} />
      <main>
        {children}
      </main>
      <Footer onOpenContact={openContact} />
    </div>
  );
}
