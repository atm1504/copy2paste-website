
import { useState } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const DemoSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const screenshots = [
    {
      src: "/lovable-uploads/2426fd48-8e8f-4a85-9703-a0437c6196d5.png",
      alt: "copy2paste interface - drag and drop area"
    },
    {
      src: "/lovable-uploads/c0a40596-4ba9-4098-a62e-c7f9c7cb7861.png",
      alt: "copy2paste interface - empty state"
    },
    {
      src: "/lovable-uploads/8ba2ebd9-deb7-4aa3-ab11-9c38df28f477.png",
      alt: "copy2paste interface - file processing"
    },
    {
      src: "/lovable-uploads/7a719957-e522-4d02-badf-9b871790943e.png",
      alt: "copy2paste interface with files"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">See copy2paste in Action</h2>
          <p className="text-lead">
            Watch how easily you can extract text from various file formats with just a few clicks
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Screenshots Gallery */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {screenshots.map((img, index) => (
                <div 
                  key={index}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Video Area (Placeholder for now) */}
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video flex items-center justify-center shadow-md border border-gray-200">
              <div className="text-center p-6">
                <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-copyblue text-white mb-4">
                  <Play className="h-10 w-10" fill="currentColor" />
                </div>
                <p className="text-lg font-medium">Demo Video Coming Soon</p>
                <p className="text-gray-500 mt-2">
                  A detailed walkthrough of copy2paste will be available here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-1 bg-white rounded-lg">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute right-2 top-2 rounded-full bg-white/80 p-1 z-10"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="copy2paste screenshot enlarged" 
              className="w-full h-auto rounded"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DemoSection;
