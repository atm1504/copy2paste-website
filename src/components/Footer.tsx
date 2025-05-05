import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/logo.png"
              alt="copy2paste logo"
              className="h-8 w-auto"
            />
            <span className="font-semibold text-xl">copy2paste</span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
            <Link to="/" className="hover:text-copyblue transition-colors">
              Home
            </Link>
            <Link
              to="/privacy"
              className="hover:text-copyblue transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="https://chrome.google.com/webstore/detail/copy2paste"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-copyblue transition-colors"
            >
              Chrome Web Store
            </a>
            <a
              href="mailto:atm1504.in@gmail.com"
              className="hover:text-copyblue transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <div className="mb-3 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>Works Offline</span>
            <span>•</span>
            <span>Privacy Focused</span>
            <span>•</span>
            <span>No Sign-up Required</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3">
            <p>&copy; {currentYear} copy2paste. All rights reserved.</p>
            <div className="hidden sm:block">|</div>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" />{" "}
              by
              <a
                href="https://atm1504.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copyblue hover:underline"
              >
                atm1504
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
