
import { Play } from "lucide-react";

const DemoSection = () => {
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
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="/lovable-uploads/9eb0d9e5-32d0-44cb-a504-383089249e55.png" 
                  alt="copy2paste interface - drag and drop area" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="/lovable-uploads/980e197a-bf1b-450b-9ac1-86d6c506886b.png" 
                  alt="copy2paste interface with files" 
                  className="w-full h-auto"
                />
              </div>
              <div className="col-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow mt-4">
                <img 
                  src="/lovable-uploads/1f56d854-5343-4ad3-a746-2f020b1b8924.png" 
                  alt="copy2paste interface with dark mode" 
                  className="w-full h-auto"
                />
              </div>
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
    </section>
  );
};

export default DemoSection;
