import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

/**
 * PricingCard Component
 * 
 * Displays a single pricing plan with features and CTA
 * Used on the Pricing page for subscription tiers
 * 
 * Props:
 * - title: Plan name (e.g., "Starter", "Pro", "Enterprise")
 * - price: Monthly price
 * - description: Brief plan description
 * - features: Array of feature strings
 * - popular: Boolean to highlight as recommended plan
 * - ctaText: Call-to-action button text
 * - onSelect: Callback when plan is selected
 */

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  onSelect: () => void;
}

export const PricingCard = ({
  title,
  price,
  description,
  features,
  popular = false,
  ctaText = "Get Started",
  onSelect
}: PricingCardProps) => {
  return (
    <Card className={`relative flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-glow ${popular ? "border-accent border-2 shadow-glow" : ""}`}>
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="bg-gradient-to-r from-primary via-accent to-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pb-8 pt-6">
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
        
        {/* Price display */}
        <div className="mt-4">
          <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground ml-2">/month</span>}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        {/* Features list */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <Check className="h-5 w-5 text-accent shrink-0 mt-0.5 transition-transform hover:scale-110" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-6">
        <Button
          onClick={onSelect}
          className={`w-full font-semibold hover-scale transition-all ${
            popular 
              ? "bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90" 
              : ""
          }`}
          variant={popular ? "default" : "outline"}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};
