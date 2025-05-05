
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex justify-center mb-4">
                <Shield className="h-10 w-10 text-copygreen" />
              </div>
              <h1 className="heading-lg">Privacy Policy</h1>
              <p className="text-muted-foreground mt-2">Last Updated: May 5, 2025</p>
            </div>
            
            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">Single Purpose Description</h2>
              <p className="mb-4">
                The single purpose of the Copy2Paste extension is to enable users to extract text content from various document files selected by the user and copy this extracted text to their clipboard.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">Data Handling</h2>
              <p className="mb-4">
                Copy2Paste processes all files locally within your browser using JavaScript libraries bundled with the extension. No file data, file contents, or extracted text is ever uploaded, transmitted, or stored on any external servers.
              </p>
              <p>
                The extension uses the browser's session storage solely to temporarily keep track of the files you've added and their extracted text during your current browser session. This data is automatically deleted when you close your browser and is not accessible outside the extension.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">Permissions Justification</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-1">activeTab</h3>
                  <p className="text-muted-foreground">
                    The activeTab permission may be used in future versions to allow interaction with the current webpage only when the user explicitly invokes the extension on that page. Currently, it is included to ensure compatibility but is not actively used for reading page content without user action.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">scripting</h3>
                  <p className="text-muted-foreground">
                    The scripting permission is essential for the core functionality of extracting text from complex file formats like DOCX, XLSX, and PDF. It allows the extension to run specialized, bundled JavaScript libraries (like Mammoth.js, SheetJS, PDF.js) securely within the browser to parse the file structures locally. No external scripts are injected or executed.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">storage</h3>
                  <p className="text-muted-foreground">
                    The storage permission is used only for the browser's sessionStorage. This allows the extension to temporarily remember the list of files and their extracted text while the popup window is open or during a single browser session, enhancing usability when working with multiple files. This data is automatically cleared when the browser is closed and is never stored permanently or sent externally.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">Remote Code Use Justification</h2>
              <p>
                Copy2Paste utilizes well-established third-party JavaScript libraries (PDF.js, Mammoth.js, SheetJS, JSZip) which are included within the extension package (web_accessible_resources). These libraries are executed locally in your browser to process files. No code is fetched or executed from remote servers. The extension functions entirely offline after installation.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">Data Usage Compliance</h2>
              <p>
                Copy2Paste is designed to comply with the Chrome Web Store's User Data Policy, including requirements for minimal permissions and clear disclosure. All data processing is performed locally on the user's device.
              </p>
            </section>
            
            <section>
              <h2 className="heading-sm text-copyblue mb-4">Contact</h2>
              <p>
                If you have any questions or concerns about our privacy practices, please contact us at <a href="mailto:contact@copy2paste.com" className="text-copyblue hover:underline">contact@copy2paste.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
