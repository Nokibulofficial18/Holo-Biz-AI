import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { VoiceWave } from "@/components/VoiceWave";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsCard } from "@/components/StatsCard";
import {
  TrendingUp,
  Shield,
  Globe,
  Lightbulb,
  Users,
  BookOpen,
  Award,
  LineChart,
  AlertTriangle,
  Package,
  CreditCard,
  Target,
  DollarSign,
  BarChart3,
  PieChart,
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const problems = [
    { icon: AlertTriangle, stat: "90%", text: "Industrial units are CMSMEs" },
    { icon: PieChart, stat: "25%", text: "SMEs contribute to GDP (low vs global)" },
    { icon: CreditCard, stat: "39%", text: "MSMEs financially constrained" },
    { icon: BarChart3, stat: "Low", text: "Financial literacy & data insights" },
  ];

  const features = [
    {
      icon: CreditCard,
      title: "AI Credit-Readiness Advisor",
      description: "Get instant credit score insights and bank document preparation guidance to access financing easily.",
    },
    {
      icon: Shield,
      title: "Regulatory & Compliance Guide",
      description: "Voice-guided compliance reminders for VAT, trade license, and tax obligations.",
    },
    {
      icon: Globe,
      title: "Export Readiness Advisor",
      description: "Market recommendations, pricing strategy, and certification guidance for international trade.",
    },
    {
      icon: Lightbulb,
      title: "Product Diversification Engine",
      description: "AI-powered trend analysis and new product line suggestions for business growth.",
    },
    {
      icon: Users,
      title: "Cluster & Community Intelligence",
      description: "Nearby market insights and joint procurement suggestions from your business community.",
    },
    {
      icon: BookOpen,
      title: "Need-Based Voice Micro-Training",
      description: "Quick training modules on accounting, quality control, digital marketing, and B2B sales.",
    },
    {
      icon: Award,
      title: "Government Scheme Finder",
      description: "Discover and apply for government grants, SME Foundation loans, and support programs.",
    },
  ];

  const impacts = [
    { icon: TrendingUp, value: "20%", label: "Profit improvement", variant: "success" as const },
    { icon: Package, value: "30%", label: "Reduction in inventory waste", variant: "warning" as const },
    { icon: CreditCard, value: "100%", label: "Credit access support", variant: "primary" as const },
    { icon: Target, value: "100K", label: "SME users in 3 years", variant: "info" as const },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <VoiceWave isActive={true} />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-holobiz-blue via-holobiz-purple to-holobiz-blue bg-clip-text text-transparent leading-tight">
              HoloBiz — Your AI CFO.<br />Speak. Understand. Grow.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A voice-driven financial advisor for Bangladesh's 7.8M SMEs. Speak in Bangla or English — get instant insights, predictions and guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/how-it-works">
                <Button size="lg" className="bg-gradient-to-r from-holobiz-blue to-holobiz-purple hover:opacity-90 text-lg px-8" data-testid="button-try-holobiz-hero">
                  Try HoloBiz
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="text-lg px-8 backdrop-blur-sm" data-testid="button-how-it-works-hero">
                  How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              The SME Challenge in Bangladesh
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Small and medium enterprises face significant financial and operational barriers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <StatsCard
                key={index}
                icon={problem.icon}
                value={problem.stat}
                label={problem.text}
                delay={index * 0.1}
                variant="warning"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              Turn Business Complexity Into Simple Voice Conversations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              HoloBiz transforms how SMEs manage finances, compliance, and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: LineChart, title: "Daily Profit/Loss", desc: "Real-time financial insights" },
              { icon: TrendingUp, title: "Cash Flow Predictions", desc: "AI-powered forecasting" },
              { icon: AlertTriangle, title: "Expense Warnings", desc: "Smart spending alerts" },
              { icon: Package, title: "Inventory Alerts", desc: "Stock management guidance" },
              { icon: CreditCard, title: "Loan Guidance", desc: "Credit readiness advisor" },
              { icon: Target, title: "Diversification Tips", desc: "Growth opportunities" },
            ].map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.desc}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              New SME-Focused Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools designed specifically for Bangladeshi businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-holobiz-blue to-holobiz-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Measurable Impact for SMEs
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real results that drive business growth and financial health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((impact, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <impact.icon className="w-12 h-12 mx-auto mb-4 text-white" />
                <div className="text-4xl font-heading font-bold mb-2">{impact.value}</div>
                <p className="text-blue-100">{impact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Give Your Business a Voice.<br />HoloBiz Guides You Every Day.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of SMEs transforming their business with AI-powered insights
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-holobiz-blue to-holobiz-purple hover:opacity-90 text-lg px-12" data-testid="button-get-started">
                Get Started Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
