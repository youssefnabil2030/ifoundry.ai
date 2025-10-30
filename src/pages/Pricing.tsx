import { Navigation } from "@/components/Navigation";
import { PricingCard } from "@/components/PricingCard";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

/**
 * Pricing Page - Subscription Plans
 * 
 * Displays available subscription tiers for iFoundry.ai
 * Features:
 * - Three-tier pricing: Starter, Pro, Enterprise
 * - Clear feature comparison
 * - Highlighted "Most Popular" plan
 * - Easy plan selection with CTAs
 * 
 * Expandable: Add more plans or custom enterprise pricing
 */

const Pricing = () => {
  const navigate = useNavigate();
  
  // Handle plan selection and redirect to payment page
  const handlePlanSelect = (planName: string, planPrice: string) => {
    console.log(`User selected plan: ${planName}`);
    toast.success(`${planName} plan selected! Redirecting to checkout...`);
    
    // Navigate to payment page with plan details
    navigate('/payment', { state: { plan: planName, price: planPrice } });
  };
  
  // Pricing plan configurations
  const pricingPlans = [
    {
      title: "Starter",
      price: "$29",
      description: "Perfect for individuals and small projects",
      features: [
        "100 AI requests per month",
        "Basic chat support",
        "1 project workspace",
        "5GB file storage",
        "Email support",
        "Core AI features"
      ],
      ctaText: "Start Free Trial"
    },
    {
      title: "Pro",
      price: "$79",
      description: "Ideal for professionals and growing teams",
      features: [
        "Unlimited AI requests",
        "Priority chat support",
        "10 project workspaces",
        "50GB file storage",
        "Advanced AI models",
        "Custom integrations",
        "API access",
        "Team collaboration tools"
      ],
      popular: true,
      ctaText: "Get Started"
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited everything",
        "Dedicated account manager",
        "Unlimited projects",
        "Unlimited storage",
        "Custom AI training",
        "Enterprise security",
        "SLA guarantee",
        "On-premise deployment option",
        "White-label solution"
      ],
      ctaText: "Contact Sales"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Choose Your
            <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Flexible pricing for individuals, teams, and enterprises. 
            All plans include our core AI capabilities.
          </p>
        </section>
        
        {/* Pricing Cards Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={plan.popular ? "md:-mt-8" : ""}>
                <PricingCard
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  popular={plan.popular}
                  ctaText={plan.ctaText}
                  onSelect={() => handlePlanSelect(plan.title, plan.price)}
                />
              </div>
            ))}
          </div>
        </section>
        
        {/* FAQ / Additional Info Section */}
        <section className="max-w-3xl mx-auto mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 text-left">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Can I change my plan later?</h3>
              <p className="text-muted-foreground">
                Yes! You can upgrade or downgrade your plan at any time. 
                Changes will be reflected in your next billing cycle.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground">
                Absolutely! All plans come with a 14-day free trial. 
                No credit card required to start.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-base sm:text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and for Enterprise plans, 
                we can accommodate wire transfers and custom billing arrangements.
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Need a custom solution?</h3>
              <p className="text-muted-foreground">
                Contact our sales team for Enterprise pricing and custom features 
                tailored to your organization's specific needs.
              </p>
            </div>
          </div>
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

export default Pricing;
