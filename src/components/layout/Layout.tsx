import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />

      {/* Floating email button */}
      <a
        href="mailto:contact@velievco.com?subject=Hi%2C%20I'd%20like%20to%20apply%20for%20a%20complimentary%20audit%20of%20our%20company's%20reputation."
        aria-label="Email us"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </a>
    </div>
  );
};

export default Layout;
