import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Download } from "lucide-react";
import * as QRCode from "qrcode.react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

interface PaymentModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal = ({ product, isOpen, onClose }: PaymentModalProps) => {
  if (!isOpen || !product) return null;

  const upiString = `upi://pay?pa=YOUR_UPI_ID@upi&pn=LegalPath&am=${product.price}&tr=LP${Date.now()}&tn=Payment%20for%20${encodeURIComponent(product.name)}`;
  const qrRef = React.useRef<HTMLDivElement>(null);

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `payment-${product.id}.png`;
      link.click();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Complete Payment</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded transition"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Product Info */}
        <div className="mb-6 p-4 bg-secondary rounded-lg">
          <p className="text-sm text-foreground/60 mb-1">Product</p>
          <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">₹{product.price}</span>
            <span className="text-sm text-foreground/60">One-time payment</span>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mb-6">
          <p className="text-sm font-medium text-foreground mb-4 text-center">
            Scan QR code with any UPI app
          </p>
          <div
            ref={qrRef}
            className="flex justify-center p-4 bg-white rounded-lg border-2 border-border"
          >
            <QRCode
              value={upiString}
              size={200}
              level="H"
              includeMargin={true}
              fgColor="#222222"
              bgColor="#ffffff"
            />
          </div>
        </div>

        {/* Payment Methods Info */}
        <div className="mb-6 p-4 bg-secondary/50 rounded-lg">
          <p className="text-xs text-foreground/60 mb-2 font-medium">ACCEPTED PAYMENT METHODS</p>
          <p className="text-sm text-foreground">
            Google Pay • PhonePe • Paytm • WhatsApp Pay • BHIM • Any UPI App
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            onClick={downloadQR}
            variant="outline"
            className="flex-1 border-border text-foreground hover:bg-secondary"
          >
            <Download className="w-4 h-4 mr-2" />
            Download QR
          </Button>
          <Button
            onClick={onClose}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Done
          </Button>
        </div>

        {/* Instructions */}
        <p className="text-xs text-foreground/50 text-center mt-4">
          After payment, you'll receive instant access to the digital content via email.
        </p>
      </div>
    </div>
  );
};

export default function DigitalStore() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products: Product[] = [
    {
      id: "legal-methods",
      name: "Legal Methods Semester Notes",
      description: "Comprehensive semester notes covering legal research, writing, and methodology. Perfect for law students preparing for exams.",
      price: 49,
      icon: "📚",
    },
    {
      id: "case-summaries",
      name: "Case Law Summaries",
      description: "Concise summaries of landmark cases with key holdings and legal principles. Essential reference for case law studies.",
      price: 49,
      icon: "⚖️",
    },
  ];

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">📖 Digital Store</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Premium Study Materials</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Access expertly curated legal study resources at affordable prices. Instant digital delivery.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-all hover:border-primary/50"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{product.icon}</div>

                {/* Product Info */}
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{product.description}</p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">Price</p>
                    <p className="text-3xl font-bold text-primary">₹{product.price}</p>
                  </div>
                  <Button
                    onClick={() => handleBuyNow(product)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                </div>

                {/* Badge */}
                <div className="mt-4 inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  ✓ Instant Access
                </div>
              </div>
            ))}
          </div>

          {/* Trust Section */}
          <div className="bg-secondary/50 rounded-xl p-8 text-center border border-border">
            <h3 className="font-semibold text-foreground mb-4">Why Choose Our Digital Store?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-2xl mb-2">⚡</p>
                <p className="text-sm text-foreground/70">Instant delivery after payment</p>
              </div>
              <div>
                <p className="text-2xl mb-2">🔒</p>
                <p className="text-sm text-foreground/70">Secure UPI payment gateway</p>
              </div>
              <div>
                <p className="text-2xl mb-2">📧</p>
                <p className="text-sm text-foreground/70">Email access & lifetime updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
