import { Navigation } from "@/components/Navigation";
import { PromptInput } from "@/components/PromptInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Zap, Lock, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

/**
 * Index Page - Landing/Home Page with Prompt
 * 
 * First page users see when visiting iFoundry.ai
 * Features:
 * - Hero section with branding and value proposition
 * - Direct AI prompt input for immediate interaction
 * - Feature highlights showcasing key benefits
 * - Clear CTAs to Agent workspace and Pricing
 */

const Index = () => {
  const navigate = useNavigate();
  
  // Placeholder function for AI request
  // TODO: Replace with actual API call to AI backend
  const handlePromptSubmit = async (prompt: string) => {
    console.log("User prompt:", prompt);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Prompt received! Redirecting to Agent workspace...");
    
    // Navigate to agent workspace after submission
    setTimeout(() => {
      navigate("/agent", { state: { initialPrompt: prompt } });
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-scale-in">
            <Sparkles className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Transform Your Ideas Into
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Reality with AI
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            iFoundry.ai is your intelligent companion for building, creating, and innovating. 
            Start with a simple prompt and watch the magic happen.
          </p>
          
          {/* Main Prompt Input */}
          <Card className="max-w-2xl mx-auto shadow-elegant hover:shadow-glow transition-all duration-500 mb-8 animate-scale-in " style={{ animationDelay: '0.3s' }}>
            <CardContent className="pt-6">
              <PromptInput 
                onSubmit={handlePromptSubmit}
                placeholder="Describe what you want to create or ask for help..."
              />
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              onClick={() => navigate("/agent")}
              className="bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 text-lg hover-scale transition-all"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Go to Agent Workspace
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/pricing")}
              className="text-lg hover-scale transition-all border-animation"
            >
              View Pricing
            </Button>
          </div>
        </section>
        
        {/* Feature Highlights */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mt-20">
          <Card className="text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <CardContent className="pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Zap className="h-8 w-8 text-primary transition-transform hover:scale-110" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Get instant responses and results from our cutting-edge AI engine
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <CardContent className="pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Sparkles className="h-8 w-8 text-accent transition-transform hover:scale-110" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Smart & Adaptive</h3>
              <p className="text-muted-foreground">
                AI that learns and adapts to your unique workflow and preferences
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '0.7s' }}>
            <CardContent className="pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
                <Lock className="h-8 w-8 text-destructive transition-transform hover:scale-110" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security with end-to-end encryption for your data
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 iFoundry.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
