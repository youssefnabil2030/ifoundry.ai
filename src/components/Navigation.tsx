import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";


/**
 * Navigation Component
 * 
 * Top navigation bar that appears across all pages
 * Connects: Home (Prompt), Agent Workspace, Pricing, Login, Signup
 * Highlights active page and provides consistent branding
 */
export const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Helper to check if current route is active
  const isActive = (path: string) => location.pathname === path;
  
  // Close mobile menu when navigating
  const handleNavClick = () => setIsOpen(false);
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-2 group hover-scale transition-transform">
            
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              iFoundry.ai
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "secondary" : "ghost"}
                className="font-medium hover-scale transition-all"
              >
                Home
              </Button>
            </Link>
            <Link to="/agent">
              <Button 
                variant={isActive("/agent") ? "secondary" : "ghost"}
                className="font-medium hover-scale transition-all"
              >
                Agent
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                variant={isActive("/pricing") ? "secondary" : "ghost"}
                className="font-medium  transition-all border-animation"
              >
                Pricing
              </Button>
            </Link>
          </div>
          
          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" className="font-medium hover-scale transition-all">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="font-medium bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 hover-scale transition-all">
                Sign Up
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover-scale">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" onClick={handleNavClick}>
                  <Button 
                    variant={isActive("/") ? "secondary" : "ghost"}
                    className="w-full justify-start font-medium"
                  >
                    Home
                  </Button>
                </Link>
                <Link to="/agent" onClick={handleNavClick}>
                  <Button 
                    variant={isActive("/agent") ? "secondary" : "ghost"}
                    className="w-full justify-start font-medium"
                  >
                    Agent
                  </Button>
                </Link>
                <Link to="/pricing" onClick={handleNavClick}>
                  <Button 
                    variant={isActive("/pricing") ? "secondary" : "ghost"}
                    className="w-full justify-start font-medium"
                  >
                    Pricing
                  </Button>
                </Link>
                
                <div className="border-t border-border my-4" />
                
                <Link to="/login" onClick={handleNavClick}>
                  <Button variant="outline" className="w-full justify-start font-medium">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={handleNavClick}>
                  <Button className="w-full justify-start font-medium bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90">
                    Sign Up
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
