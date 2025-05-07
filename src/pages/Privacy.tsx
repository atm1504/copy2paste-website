import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FileText,
  Shield,
  AlertTriangle,
  Eye,
  Lock,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex justify-center mb-4">
                <Shield className="h-10 w-10 text-copygreen" />
              </div>
              <h1 className="heading-lg">Privacy Policy</h1>
              <p className="text-muted-foreground mt-2">
                Last Updated: May 5, 2025
              </p>
            </div>

            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">
                Single Purpose Description
              </h2>
              <p className="mb-4">
                The single purpose of the Copy2Paste extension is to enable
                users to extract text content from various document files
                selected by the user and copy this extracted text to their
                clipboard.
              </p>
              <p className="mb-4">
                Copy2Paste is designed as a straightforward utility tool with a
                singular focus: to make it easy for users to extract and use
                text from their documents without needing specialized software
                for each file type.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">Data Handling</h2>
              <div className="space-y-4">
                <div className="bg-copyblue/5 p-4 rounded-lg border border-copyblue/10">
                  <h3 className="font-semibold text-copyblue mb-2 flex items-center">
                    <Lock className="h-5 w-5 mr-2" />
                    Local Processing
                  </h3>
                  <p>
                    Copy2Paste processes all files locally within your browser
                    using JavaScript libraries bundled with the extension. No
                    file data, file contents, or extracted text is ever
                    uploaded, transmitted, or stored on any external servers.
                    This ensures maximum privacy and security for your sensitive
                    documents.
                  </p>
                </div>

                <div className="bg-copyblue/5 p-4 rounded-lg border border-copyblue/10">
                  <h3 className="font-semibold text-copyblue mb-2 flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Temporary Session Storage
                  </h3>
                  <p className="mb-2">
                    The extension uses the browser's session storage solely to
                    temporarily keep track of the files you've added and their
                    extracted text during your current browser session. This
                    data is automatically deleted when you close your browser
                    and is not accessible outside the extension.
                  </p>
                  <p>
                    This temporary storage is essential for the core
                    functionality of the extension, allowing you to work with
                    multiple files at once and providing features like "Copy
                    All" without needing to re-process files.
                  </p>
                </div>

                <div className="bg-copyblue/5 p-4 rounded-lg border border-copyblue/10">
                  <h3 className="font-semibold text-copyblue mb-2 flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    No Network Requests
                  </h3>
                  <p>
                    Copy2Paste does not make any network requests to external
                    servers for its core functionality. The extension operates
                    entirely offline after installation, ensuring that your
                    files and their contents remain on your local device.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">
                Permissions Justification
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-2">activeTab</h3>
                  <p className="text-muted-foreground mb-2">
                    The activeTab permission is required to access the content
                    of the current tab when you want to extract text from files.
                    This permission is only used when you explicitly interact
                    with the extension.
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-copyblue">
                      Specific usage:
                    </span>{" "}
                    This permission is only used when you click on the extension
                    icon, and does not enable any automatic or background access
                    to web page content. It is used solely to provide a
                    convenient way to access the extension's functionality
                    within the current browsing context.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">
                Web Accessible Resources
              </h2>
              <p className="mb-4">
                Copy2Paste includes several JavaScript libraries that are
                essential for processing different file formats. These libraries
                are bundled within the extension and are only accessible to the
                extension itself:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Mammoth.js - For processing Microsoft Word documents</li>
                <li>SheetJS - For handling Excel spreadsheets</li>
                <li>JSZip - For handling compressed file formats</li>
                <li>PDF.js - For extracting text from PDF files</li>
                <li>
                  i18n and language files - For internationalization support
                </li>
              </ul>
              <p>These libraries are:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-medium">
                    Bundled within the extension package
                  </span>{" "}
                  - no external downloads
                </li>
                <li>
                  <span className="font-medium">
                    Open-source and widely used
                  </span>{" "}
                  - ensuring security and reliability
                </li>
                <li>
                  <span className="font-medium">Executed entirely locally</span>{" "}
                  - no server-side processing
                </li>
                <li>
                  <span className="font-medium">Regularly updated</span> - to
                  address any security concerns
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">
                Remote Code Use Justification
              </h2>
              <p className="mb-4">
                Copy2Paste utilizes well-established third-party JavaScript
                libraries (PDF.js, Mammoth.js, SheetJS, JSZip) which are
                included within the extension package
                (web_accessible_resources). These libraries are executed locally
                in your browser to process files. No code is fetched or executed
                from remote servers. The extension functions entirely offline
                after installation.
              </p>
              <p className="mb-4">All libraries used by Copy2Paste are:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-medium">
                    Bundled within the extension package
                  </span>{" "}
                  - no external downloads
                </li>
                <li>
                  <span className="font-medium">
                    Open-source and widely used
                  </span>{" "}
                  - ensuring security and reliability
                </li>
                <li>
                  <span className="font-medium">Executed entirely locally</span>{" "}
                  - no server-side processing
                </li>
                <li>
                  <span className="font-medium">Regularly updated</span> - to
                  address any security concerns
                </li>
              </ul>
              <p>
                These libraries are essential for providing the core
                functionality of parsing complex file formats without requiring
                external services or uploading user files to servers.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">
                Data Usage Compliance
              </h2>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <p className="mb-4">
                    Copy2Paste is designed to comply with the Chrome Web Store's
                    User Data Policy, including requirements for minimal
                    permissions and clear disclosure. All data processing is
                    performed locally on the user's device.
                  </p>
                  <p className="mb-4">
                    The extension does not collect, transmit, or store any
                    personal information or user data. It does not:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Track user browsing activity</li>
                    <li>Collect usage statistics or analytics</li>
                    <li>Use cookies for tracking purposes</li>
                    <li>Share any information with third parties</li>
                    <li>Store any data beyond the current browser session</li>
                  </ul>
                  <p>
                    Copy2Paste is fully committed to user privacy and data
                    security, operating with complete transparency about its
                    functioning and data handling practices.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="heading-sm text-copyblue mb-4">User Controls</h2>
              <p className="mb-4">
                Users have full control over their data when using Copy2Paste:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Manual file selection</span> -
                  Files are only processed when explicitly selected by the user
                </li>
                <li>
                  <span className="font-medium">"Clear All" function</span> -
                  Removes all processed files and their extracted text from
                  session storage
                </li>
                <li>
                  <span className="font-medium">Browser controls</span> -
                  Closing the browser automatically clears all temporary data
                </li>
                <li>
                  <span className="font-medium">Extension removal</span> -
                  Uninstalling the extension removes all associated data
                </li>
              </ul>
              <p>
                These controls ensure users maintain complete authority over
                their documents and the extracted text at all times.
              </p>
            </section>

            <section>
              <h2 className="heading-sm text-copyblue mb-4">Contact</h2>
              <p className="mb-4">
                If you have any questions or concerns about our privacy
                practices, please contact us at{" "}
                <a
                  href="mailto:atm1504.in@gmail.com"
                  className="text-copyblue hover:underline"
                >
                  atm1504.in@gmail.com
                </a>
                .
              </p>
              <p>
                For more information about the extension, or to report issues,
                please visit the{" "}
                <a
                  href="https://atm1504.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copyblue hover:underline"
                >
                  developer's website
                </a>
                .
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <Link
                to="/"
                className="inline-flex items-center text-copyblue hover:underline"
              >
                <FileText className="h-4 w-4 mr-2" />
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
