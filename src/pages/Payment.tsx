import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, Lock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

/**
 * Payment Page - Checkout & Payment Processing
 * 
 * Handles payment form for selected subscription plan
 * Features:
 * - Plan details summary
 * - Credit card input form
 * - Billing information
 * - Secure payment processing
 * - Order confirmation
 */

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPlan = location.state?.plan || "Pro";
  const planPrice = location.state?.price || "$79";
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    email: "",
    country: ""
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Process payment (placeholder)
  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Payment successful! Welcome to iFoundry.ai");
      
      // TODO: Integrate with payment gateway (Stripe, PayPal, etc.)
      // TODO: Create user subscription in backend
      // TODO: Send confirmation email
      
      navigate("/agent");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Complete Your
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Purchase
            </span>
          </h1>
          <p className="text-muted-foreground px-4">
            Secure checkout powered by industry-leading encryption
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Payment Form */}
          <Card className="md:col-span-2 shadow-elegant animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePayment} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-all focus:shadow-card"
                  />
                </div>

                <Separator />

                {/* Card Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Lock className="h-4 w-4 text-accent" />
                    Card Details
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      maxLength={19}
                      required
                      className="transition-all focus:shadow-card"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      placeholder="John Doe"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="transition-all focus:shadow-card"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        maxLength={5}
                        required
                        className="transition-all focus:shadow-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        maxLength={4}
                        required
                        className="transition-all focus:shadow-card"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Billing Address */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Billing Address</h3>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      name="country"
                      placeholder="United States"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="transition-all focus:shadow-card"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg hover-scale"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>Processing...</>
                  ) : (
                    <>Pay {planPrice}/month</>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  <Lock className="h-3 w-3 inline mr-1" />
                  Your payment information is encrypted and secure
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card className="shadow-elegant animate-scale-in h-fit" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Selected Plan</p>
                <p className="text-xl font-bold text-primary">{selectedPlan}</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{planPrice}/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-semibold">$0.00</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-lg">
                <span className="font-bold">Total Due Today</span>
                <span className="font-bold text-accent">{planPrice}</span>
              </div>

              <div className="pt-4 space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">14-day free trial included</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Cancel anytime, no questions asked</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Money-back guarantee</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="max-w-5xl mx-auto mt-12 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-sm text-muted-foreground mb-4">Trusted by thousands of businesses worldwide</p>
          <div className="flex justify-center gap-8 items-center opacity-50">
            <Lock className="h-8 w-8" />
            <CreditCard className="h-8 w-8" />
            <CheckCircle className="h-8 w-8" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
