import { createContext, useContext, useState, ReactNode } from "react";
import { ContactModal } from "@/components/ContactModal";

interface ContactModalContextType {
  openContact: () => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
  openContact: () => {},
});

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ openContact: () => setOpen(true) }}>
      {children}
      <ContactModal open={open} onOpenChange={setOpen} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
