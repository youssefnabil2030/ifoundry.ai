import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

/**
 * PromptInput Component
 * 
 * Reusable AI prompt input with submission handling
 * Used on landing page and agent workspace
 * 
 * Props:
 * - onSubmit: Callback function when user submits a prompt
 * - placeholder: Custom placeholder text
 * - className: Additional styling classes
 */

interface PromptInputProps {
  onSubmit: (prompt: string) => Promise<void>;
  placeholder?: string;
  className?: string;
}

export const PromptInput = ({ 
  onSubmit, 
  placeholder = "Ask me anything...",
  className = ""
}: PromptInputProps) => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }
    
    setIsLoading(true);
    
    try {
      await onSubmit(prompt);
      setPrompt(""); // Clear input after successful submission
    } catch (error) {
      toast.error("Failed to process your request");
      console.error("Prompt submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={placeholder}
          className="min-h-[120px] pr-14 resize-none text-base border-agent-animation"
          disabled={isLoading}
        />
        
        {/* Submit Button positioned inside textarea */}
        <Button
          type="submit"
          size="icon"
          disabled={isLoading || !prompt.trim()}
          className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      {/* Character count indicator */}
      <div className="mt-2 text-xs text-muted-foreground text-right">
        {prompt.length} characters
      </div>
    </form>
  );
};
