
import { Button } from "@/components/ui/button";
import { FileText, Download, Upload, Eye, Copy } from "lucide-react";

const steps = [
  {
    icon: <Download className="h-8 w-8" />,
    title: "1. Install Extension",
    description: "Add copy2paste to Chrome from the Web Store with a simple click."
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "2. Click the Icon",
    description: "Open the extension by clicking on the copy2paste icon in your browser toolbar."
  },
  {
    icon: <Upload className="h-8 w-8" />,
    title: "3. Add Your Files",
    description: "Drag and drop files into the extension window or use the file selector."
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "4. Preview Text",
    description: "Review the extracted text from all your files before copying."
  },
  {
    icon: <Copy className="h-8 w-8" />,
    title: "5. Copy Text",
    description: "Copy text from individual files or use 'Copy All' for everything at once."
  }
];

const HowToUse = () => {
  return (
    <section id="how-to-use" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">How To Use copy2paste</h2>
          <p className="text-lead">
            Get started in seconds with these simple steps
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row md:items-center gap-8 md:gap-16 ${
                    index % 2 === 0 ? 'md:text-left' : 'md:flex-row-reverse md:text-right'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <h3 className="heading-sm mb-2 flex items-center gap-3 md:justify-normal">
                      {index % 2 === 0 ? (
                        <>
                          <span className="text-copyblue">{step.title}</span>
                          <div className="md:hidden bg-copyblue/10 p-2 rounded-full">{step.icon}</div>
                        </>
                      ) : (
                        <>
                          <div className="md:hidden bg-copyblue/10 p-2 rounded-full">{step.icon}</div>
                          <span className="text-copyblue">{step.title}</span>
                        </>
                      )}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  
                  <div className="relative hidden md:block">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-white border-4 border-copyblue rounded-full p-4">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
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
                Install Free from Chrome Web Store
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
