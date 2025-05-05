import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="copy2paste logo" 
              className="h-9 w-auto"
            />
            <span className="font-semibold text-xl">copy2paste</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-medium hover:text-copyblue transition-colors">
              Home
            </Link>
            <Link to="/privacy" className="font-medium hover:text-copyblue transition-colors">
              Privacy Policy
            </Link>
            <Button 
              asChild 
              className="bg-copyblue hover:bg-copyblue-dark text-white"
            >
              <a 
                href="https://chrome.google.com/webstore/detail/copy2paste" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Add to Chrome
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-6 flex flex-col gap-4 animate-fadeIn">
            <Link 
              to="/" 
              className="font-medium px-2 py-2 hover:bg-gray-50 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/privacy" 
              className="font-medium px-2 py-2 hover:bg-gray-50 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Button 
              asChild 
              className="bg-copyblue hover:bg-copyblue-dark text-white mt-2"
            >
              <a 
                href="https://chrome.google.com/webstore/detail/copy2paste" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Add to Chrome
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
