
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowToUse from "@/components/HowToUse";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowToUse />
        
        {/* Trust Section */}
        <section className="section bg-copyblue/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex justify-center mb-6">
                <Shield className="h-12 w-12 text-copygreen" />
              </div>
              
              <h2 className="heading-md mb-4">Trusted, Secure, and Local</h2>
              <p className="text-lead mb-8">
                copy2paste processes all files locally in your browser. 
                Your files never leave your computer, ensuring complete privacy and security.
              </p>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-copyblue hover:bg-copyblue-dark text-white"
              >
                <a 
                  href="https://chrome.google.com/webstore/detail/copy2paste" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Add to Chrome - It's Free
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
