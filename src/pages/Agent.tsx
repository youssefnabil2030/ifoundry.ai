import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Download, FileText, TrendingUp, Target, Loader2 } from "lucide-react";
import { toast } from "sonner";

/**
 * Agent Page - AI-Powered Business Analysis Tool
 * 
 * User enters project description and receives:
 * - Market Research Report
 * - SWOT Analysis
 * - Pitch Deck
 * 
 * All results are downloadable as documents
 */

interface AnalysisResult {
  marketResearch: string;
  swotAnalysis: string;
  pitchDeck: string;
}

const Agent = () => {
  const [projectDescription, setProjectDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  
  /**
   * Handle project analysis
   * TODO: Connect to real AI backend API
   */
  const handleAnalyze = async () => {
    if (!projectDescription.trim()) {
      toast.error("Please enter a project description");
      return;
    }
    
    setIsAnalyzing(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate placeholder results
    // In production, this will call your AI backend
    const analysisResults: AnalysisResult = {
      marketResearch: `Market Research Report for: ${projectDescription.substring(0, 50)}...\n\nThis is a placeholder market research report. In production, the AI will generate comprehensive market analysis including target audience, market size, competitors, and growth opportunities.`,
      swotAnalysis: `SWOT Analysis\n\nStrengths:\n- Placeholder strength 1\n- Placeholder strength 2\n\nWeaknesses:\n- Placeholder weakness 1\n- Placeholder weakness 2\n\nOpportunities:\n- Placeholder opportunity 1\n- Placeholder opportunity 2\n\nThreats:\n- Placeholder threat 1\n- Placeholder threat 2`,
      pitchDeck: `Pitch Deck Content\n\nSlide 1: Problem Statement\nSlide 2: Solution\nSlide 3: Market Opportunity\nSlide 4: Business Model\nSlide 5: Competitive Advantage\n\nThis is placeholder content. The AI will generate a complete pitch deck based on your project description.`
    };
    
    setResults(analysisResults);
    setIsAnalyzing(false);
    toast.success("Analysis complete! Your documents are ready to download.");
  };
  
  /**
   * Download generated document as text file
   */
  const handleDownload = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(`${filename} downloaded successfully`);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center animate-fade-in ">
          <div className="flex items-center justify-center gap-3 mb-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              AI Business Analyzer
            </h1>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            Describe your project and let AI generate comprehensive business analysis
          </p>
        </div>
        
        {/* Input Section */}
        <Card className="max-w-4xl mx-auto mb-8 shadow-elegant hover:shadow-glow transition-all duration-300 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Project Description
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Describe your project in detail... What problem does it solve? Who is your target audience? What makes it unique?"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="min-h-[200px] resize-none transition-all focus:shadow-card border-agent-animation"
              disabled={isAnalyzing}
            />
            
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !projectDescription.trim()}
              className="w-full bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 transition-all hover-scale"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing Your Project...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Business Analysis
                </>
              )}
            </Button>
          </CardContent>
        </Card>
        
        {/* Results Section */}
        {results && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
              Your Analysis Results
            </h2>
            
            {/* Market Research Card */}
            <Card className="hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">Market Research Report</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive market analysis and insights
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 mb-4 max-h-[150px] overflow-y-auto">
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {results.marketResearch.substring(0, 200)}...
                  </p>
                </div>
                <Button
                  onClick={() => handleDownload(results.marketResearch, 'market-research.txt')}
                  className="w-full hover-scale transition-transform"
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Market Research
                </Button>
              </CardContent>
            </Card>
            
            {/* SWOT Analysis Card */}
            <Card className="hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Target className="h-8 w-8 text-accent" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">SWOT Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Strengths, Weaknesses, Opportunities, Threats
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 mb-4 max-h-[150px] overflow-y-auto">
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {results.swotAnalysis.substring(0, 200)}...
                  </p>
                </div>
                <Button
                  onClick={() => handleDownload(results.swotAnalysis, 'swot-analysis.txt')}
                  className="w-full hover-scale transition-transform"
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download SWOT Analysis
                </Button>
              </CardContent>
            </Card>
            
            {/* Pitch Deck Card */}
            <Card className="hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">Pitch Deck</h3>
                      <p className="text-sm text-muted-foreground">
                        Investor-ready presentation outline
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 mb-4 max-h-[150px] overflow-y-auto">
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {results.pitchDeck.substring(0, 200)}...
                  </p>
                </div>
                <Button
                  onClick={() => handleDownload(results.pitchDeck, 'pitch-deck.txt')}
                  className="w-full hover-scale transition-transform"
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Pitch Deck
                </Button>
              </CardContent>
            </Card>
            
            {/* Start New Analysis */}
            <div className="text-center pt-6">
              <Button
                onClick={() => {
                  setResults(null);
                  setProjectDescription("");
                }}
                variant="ghost"
                className="hover-scale transition-transform"
              >
                Start New Analysis
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Agent;
