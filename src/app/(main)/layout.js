import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AIAssistant from "@/components/common/AIAssistant";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <AIAssistant />
    </>
  );
}
