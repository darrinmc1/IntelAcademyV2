import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TopicsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}