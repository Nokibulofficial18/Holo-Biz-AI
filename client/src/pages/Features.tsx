import { motion } from "framer-motion";
import { FeatureCard } from "@/components/FeatureCard";
import {
  LineChart,
  TrendingUp,
  AlertTriangle,
  Package,
  Shield,
  FileCheck,
  Scale,
  CreditCard,
  FileText,
  Award,
  Globe,
  Map,
  DollarSign,
  Lightbulb,
  Target,
  BarChart3,
  Users,
  MapPin,
  ShoppingCart,
  BookOpen,
  GraduationCap,
  TrendingDown,
  Search,
} from "lucide-react";

export default function Features() {
  const featureSections = [
    {
      title: "Core Financial Assistant",
      description: "Real-time financial insights and forecasting powered by AI",
      features: [
        { icon: LineChart, title: "Profit/Loss Tracking", description: "Daily, weekly, and monthly profit/loss analysis with trend indicators" },
        { icon: TrendingUp, title: "Cashflow Forecasting", description: "Predict future cash positions using Prophet and LSTM models" },
        { icon: AlertTriangle, title: "Expense Insights", description: "Smart categorization and alerts for unusual spending patterns" },
        { icon: Package, title: "Inventory Warnings", description: "Low stock alerts and overstocking predictions to optimize inventory" },
      ],
    },
    {
      title: "Compliance & Licensing Assistant",
      description: "Stay compliant with automated regulatory guidance",
      features: [
        { icon: Shield, title: "VAT Registration Guide", description: "Step-by-step voice guidance for VAT registration and filing" },
        { icon: FileCheck, title: "Trade License Reminders", description: "Automated renewal reminders and document preparation" },
        { icon: Scale, title: "Tax Compliance Steps", description: "Timeline-based tax compliance checklist and guidance" },
        { icon: Award, title: "Certification Support", description: "Export certification and quality standard guidance" },
      ],
    },
    {
      title: "Access to Finance Tools",
      description: "Unlock financing opportunities with AI-powered credit tools",
      features: [
        { icon: CreditCard, title: "Credit Score Insights", description: "Real-time credit readiness score with improvement recommendations" },
        { icon: FileText, title: "Bank Document Prep", description: "Automated document generation for loan applications" },
        { icon: Award, title: "CGS & SME Loans", description: "Guidance on Credit Guarantee Scheme and SME Foundation programs" },
        { icon: TrendingUp, title: "Loan Eligibility", description: "AI assessment of loan eligibility based on financial health" },
      ],
    },
    {
      title: "Export Advisor",
      description: "Expand your business to international markets",
      features: [
        { icon: Globe, title: "Market Recommendations", description: "AI-powered export market analysis and opportunity identification" },
        { icon: Map, title: "Packaging & Certification", description: "Export packaging standards and certification requirements" },
        { icon: DollarSign, title: "Pricing Strategy", description: "Competitive pricing analysis for international markets" },
        { icon: Target, title: "Export Readiness", description: "Comprehensive export readiness assessment and action plan" },
      ],
    },
    {
      title: "Diversification & Growth",
      description: "Discover new opportunities and expand your product line",
      features: [
        { icon: Lightbulb, title: "Trend Analysis", description: "Market trend identification and demand forecasting" },
        { icon: Target, title: "Product Line Suggestions", description: "AI-powered recommendations for new products based on market gaps" },
        { icon: BarChart3, title: "Revenue Optimization", description: "Pricing and bundle optimization for maximum revenue" },
        { icon: Search, title: "Competitor Insights", description: "Local market competitor analysis and positioning" },
      ],
    },
    {
      title: "Community & Cluster Intelligence",
      description: "Leverage collective business intelligence",
      features: [
        { icon: Users, title: "Nearby Market Insights", description: "Aggregated insights from businesses in your cluster" },
        { icon: MapPin, title: "Local Demand Patterns", description: "Understand local consumer behavior and seasonal trends" },
        { icon: ShoppingCart, title: "Joint Procurement", description: "Bulk purchasing opportunities with nearby businesses" },
        { icon: TrendingDown, title: "Price Benchmarking", description: "Compare your prices with cluster averages" },
      ],
    },
    {
      title: "Micro Training Modules",
      description: "On-demand voice training for critical business skills",
      features: [
        { icon: BookOpen, title: "Accounting Basics", description: "Fundamental accounting concepts in simple Bangla/English" },
        { icon: Award, title: "Quality Control", description: "Product quality standards and inspection techniques" },
        { icon: GraduationCap, title: "Digital Marketing", description: "Social media and online marketing fundamentals" },
        { icon: Users, title: "B2B Sales", description: "Business-to-business sales strategies and negotiation" },
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
              Complete Feature Set
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything your SME needs to thrive, accessible through simple voice commands
            </p>
          </motion.div>
        </div>
      </section>

      {featureSections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`py-20 ${sectionIndex % 2 === 0 ? "bg-background" : "bg-slate-50 dark:bg-slate-900"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">
                {section.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {section.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.features.map((feature, featureIndex) => (
                <FeatureCard
                  key={featureIndex}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={featureIndex * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-br from-holobiz-blue to-holobiz-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              All Features. One Voice Command Away.
            </h2>
            <p className="text-xl text-blue-100">
              Access the complete HoloBiz suite with natural language in Bangla or English
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
