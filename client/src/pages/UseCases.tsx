import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Store,
  Pill,
  Shirt,
  Palette,
  Package,
  ShoppingCart,
  TrendingUp,
  Mic,
} from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      icon: Store,
      title: "Retail Shops",
      problems: [
        "Manual inventory tracking",
        "No sales trend analysis",
        "Cash flow uncertainty",
        "Pricing challenges",
      ],
      solutions: [
        "Automated daily sales reports",
        "Best-selling product insights",
        "Cash flow predictions",
        "Competitive pricing recommendations",
      ],
      queries: [
        "আজকের মোট বিক্রয় কত?",
        "কোন পণ্যের স্টক কম?",
        "গত সপ্তাহের তুলনায় লাভ কেমন?",
      ],
    },
    {
      icon: Pill,
      title: "Pharmacies",
      problems: [
        "Complex expiry date management",
        "Regulatory compliance burden",
        "Seasonal demand fluctuations",
        "Supplier management issues",
      ],
      solutions: [
        "Expiry date tracking and alerts",
        "Drug license renewal reminders",
        "Demand forecasting for medicines",
        "Supplier payment scheduling",
      ],
      queries: [
        "কোন ওষুধের মেয়াদ শেষ হতে যাচ্ছে?",
        "আগামী মাসের জন্য কত স্টক দরকার?",
        "ড্রাগ লাইসেন্স কবে রিনিউ করতে হবে?",
      ],
    },
    {
      icon: Shirt,
      title: "Clothing Stores",
      problems: [
        "Seasonal inventory planning",
        "Size and color variant tracking",
        "Fashion trend awareness",
        "Discount optimization",
      ],
      solutions: [
        "Seasonal demand predictions",
        "Variant-wise sales analysis",
        "Trend-based buying suggestions",
        "Optimal discount calculations",
      ],
      queries: [
        "এই মাসে কোন সাইজ বেশি বিক্রি হয়েছে?",
        "নতুন কালেকশনে কি আনব?",
        "ডিসকাউন্ট দিলে লাভ হবে কি?",
      ],
    },
    {
      icon: Palette,
      title: "Handicraft Manufacturers",
      problems: [
        "Export documentation complexity",
        "Quality certification requirements",
        "International pricing strategy",
        "Artisan payment management",
      ],
      solutions: [
        "Export readiness guidance",
        "Certification process walkthrough",
        "Market-based pricing insights",
        "Labor cost optimization",
      ],
      queries: [
        "আমি কি রপ্তানি করতে পারব?",
        "কোন দেশে চাহিদা বেশি?",
        "সার্টিফিকেট কিভাবে পাব?",
      ],
    },
    {
      icon: Package,
      title: "Leather Goods Makers",
      problems: [
        "Raw material cost volatility",
        "Export compliance burden",
        "Quality control challenges",
        "Seasonal production planning",
      ],
      solutions: [
        "Material cost trend analysis",
        "Compliance checklist automation",
        "Quality standard guidance",
        "Production scheduling optimization",
      ],
      queries: [
        "কাঁচামালের দাম কেমন যাচ্ছে?",
        "রপ্তানির জন্য কি কি লাগবে?",
        "পরের মাসে কত উৎপাদন করব?",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Online Sellers",
      problems: [
        "Multi-platform inventory sync",
        "Customer acquisition costs",
        "Return and refund management",
        "Digital marketing ROI",
      ],
      solutions: [
        "Unified inventory tracking",
        "Marketing spend optimization",
        "Return pattern analysis",
        "Channel performance insights",
      ],
      queries: [
        "কোন প্ল্যাটফর্মে বিক্রি ভালো?",
        "মার্কেটিং বাজেট বাড়াব কি?",
        "রিটার্ন কেন বেশি হচ্ছে?",
      ],
    },
    {
      icon: TrendingUp,
      title: "Wholesalers",
      problems: [
        "Large inventory management",
        "Credit term optimization",
        "Bulk pricing strategy",
        "Logistics cost control",
      ],
      solutions: [
        "Warehouse stock optimization",
        "Payment term recommendations",
        "Volume-based pricing models",
        "Delivery cost analysis",
      ],
      queries: [
        "কোন প্রোডাক্টের ডিমান্ড বাড়ছে?",
        "কাস্টমারদের কত দিন ক্রেডিট দেব?",
        "ট্রান্সপোর্ট খরচ কমাতে কি করব?",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-holobiz-blue to-holobiz-purple bg-clip-text text-transparent">
              SME Use Cases
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              HoloBiz adapts to your specific business type with tailored insights and guidance
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 hover-elevate">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-holobiz-blue to-holobiz-purple flex items-center justify-center">
                        <useCase.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">
                        {useCase.title}
                      </h2>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-destructive flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-destructive"></span>
                            Problems Faced
                          </h3>
                          <ul className="space-y-2">
                            {useCase.problems.map((problem, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-destructive mt-1">×</span>
                                <span>{problem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-holobiz-green flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-holobiz-green"></span>
                            HoloBiz Solutions
                          </h3>
                          <ul className="space-y-2">
                            {useCase.solutions.map((solution, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-holobiz-green mt-1">✓</span>
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                          <Mic className="w-4 h-4 text-holobiz-purple" />
                          Sample Voice Commands
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {useCase.queries.map((query, i) => (
                            <Badge key={i} variant="secondary" className="text-sm px-3 py-1">
                              "{query}"
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-holobiz-blue to-holobiz-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Your Business Type. Our Expertise.
            </h2>
            <p className="text-xl text-blue-100">
              No matter your industry, HoloBiz understands your unique challenges
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
