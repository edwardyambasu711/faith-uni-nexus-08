import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button"; 
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, HelpCircle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md w-full bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold text-primary mb-2">404</div>
              <h1 className="text-2xl font-bold text-academic mb-2">Page Not Found</h1>
              <p className="text-muted-foreground">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <div className="space-y-4">
              <Link to="/">
                <Button variant="hero" className="w-full flex items-center justify-center">
                  <Home className="w-4 h-4 mr-2" />
                  Return to Home
                </Button>
              </Link>
              
              <Link to="/programs">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Programs
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button variant="ghost" className="w-full flex items-center justify-center text-muted-foreground">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Need Help?
                </Button>
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <button 
                onClick={() => window.history.back()}
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mx-auto"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Go Back
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default NotFound;
