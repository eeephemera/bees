// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
// Removed Testimonials and Faqs imports

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <MobileConvenience />
      {/* Removed Testimonials and Faqs components */}
      <Footer />
    </>
  );
}
