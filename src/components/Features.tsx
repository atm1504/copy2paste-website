
import { 
  FileSpreadsheet, 
  FileText, 
  FileCode, 
  DatabaseBackup, 
  Copy, 
  Eye, 
  Globe, 
  ShieldCheck 
} from "lucide-react";

const features = [
  {
    icon: <FileText className="h-10 w-10 text-copyblue p-2 bg-copyblue/10 rounded-lg" />,
    title: "Multi-format Support",
    description: "Extract text from PDF, DOCX, XLSX, PPTX, TXT, CSV, JSON, Apple formats, and code files."
  },
  {
    icon: <Copy className="h-10 w-10 text-copyblue p-2 bg-copyblue/10 rounded-lg" />,
    title: "Bulk Copy",
    description: "Copy text from individual files or use the 'Copy All' feature for improved efficiency."
  },
  {
    icon: <Eye className="h-10 w-10 text-copyblue p-2 bg-copyblue/10 rounded-lg" />,
    title: "Text Preview",
    description: "Preview all extracted text before copying to ensure you get exactly what you need."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-copygreen p-2 bg-copygreen/10 rounded-lg" />,
    title: "Privacy Focused",
    description: "All processing happens locally in your browser. Files are never uploaded or stored externally."
  },
  {
    icon: <Globe className="h-10 w-10 text-copygreen p-2 bg-copygreen/10 rounded-lg" />,
    title: "Multi-language Support",
    description: "The extension is available in multiple languages to serve a global audience."
  },
  {
    icon: <DatabaseBackup className="h-10 w-10 text-copygreen p-2 bg-copygreen/10 rounded-lg" />,
    title: "Session Storage",
    description: "Files are kept temporarily during the session for convenience, then automatically removed."
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">All the Features You Need</h2>
          <p className="text-lead">
            copy2paste simplifies text extraction from multiple file formats with these powerful features
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="heading-sm mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
