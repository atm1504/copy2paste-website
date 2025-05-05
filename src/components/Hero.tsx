
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-copyblue/10 text-copyblue px-4 py-2 rounded-full font-medium text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copyblue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-copyblue"></span>
              </span>
              New Chrome Extension
            </div>
            
            <h1 className="heading-xl !leading-tight">
              Unlock Text from <span className="text-copyblue">Any File</span>, Instantly
            </h1>
            
            <p className="text-lead max-w-2xl">
              Extract text from PDFs, Word documents, Excel spreadsheets, and more with a simple drag and drop. 
              No sign-up, no uploads, and no data leaving your browser.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-copyblue hover:bg-copyblue-dark text-white text-base"
              >
                <a 
                  href="https://chrome.google.com/webstore/detail/copy2paste" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Add to Chrome</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              
              <div className="flex gap-2 items-center">
                <FileText className="h-5 w-5 text-copyblue" />
                <span className="font-medium">Works Offline</span>
                <span className="mx-2 h-1 w-1 rounded-full bg-gray-300"></span>
                <span className="font-medium">Privacy Focused</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-copyblue to-copygreen rounded-lg blur-sm opacity-20"></div>
              <div className="bg-white shadow-xl rounded-lg p-3 border border-gray-100 relative">
                <img 
                  src="/lovable-uploads/04e28f48-3d03-45c0-9e44-980b00a97e3e.png" 
                  alt="copy2paste interface" 
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20">
                <img 
                  src="/lovable-uploads/a36bc944-4b40-4201-a5a7-a877af810883.png" 
                  alt="copy2paste logo" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
