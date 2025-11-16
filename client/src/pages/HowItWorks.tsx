import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChatBubble } from "@/components/ChatBubble";
import { Mic, Brain, LineChart, Target, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Mic,
      title: "Speak",
      description: "Ask anything in Bangla, Banglish, or English using your voice",
      color: "from-holobiz-blue to-blue-600",
    },
    {
      icon: Brain,
      title: "Understand",
      description: "Advanced LLM interprets your business context and intent",
      color: "from-holobiz-purple to-purple-600",
    },
    {
      icon: LineChart,
      title: "Analyze",
      description: "AI generates dashboards, forecasts, and detailed reasoning",
      color: "from-holobiz-green to-green-600",
    },
    {
      icon: Target,
      title: "Advise",
      description: "Receive personalized recommendations tailored to your business",
      color: "from-holobiz-yellow to-yellow-600",
    },
  ];

  const sampleQueries = [
    { user: "আমার আজকের লাভ কত?", ai: "Today's profit is ৳15,750. Up 12% from yesterday. Your best-selling item was Product A with ৳8,200 revenue." },
    { user: "কোন পণ্য বেশি বিক্রি হয়েছে?", ai: "Product A had the highest sales with 45 units sold. I recommend increasing stock by 20% for next week." },
    { user: "আমি কি ঋণ নিতে পারবো?", ai: "Based on your financials, you're eligible for SME loans up to ৳5 lakhs. Your credit readiness score is 72/100. I can help prepare documents." },
    { user: "আমার ট্রেড লাইসেন্স কবে রিনিউ করতে হবে?", ai: "Your trade license expires on March 15, 2025 - that's in 45 days. Would you like me to set a reminder and prepare renewal documents?" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-holobiz-blue to-holobiz-purple bg-clip-text text-transparent">
              How HoloBiz Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four simple steps to transform your business with voice-driven AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-6 text-center h-full hover-elevate">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
              Real Conversations, Real Insights
            </h2>
            <p className="text-xl text-muted-foreground">
              See how HoloBiz understands and responds to your business queries
            </p>
          </motion.div>

          <div className="space-y-8">
            {sampleQueries.map((query, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="space-y-4"
              >
                <ChatBubble message={query.user} isUser={true} />
                <ChatBubble message={query.ai} isUser={false} delay={0.3} />
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
              Ready to Experience HoloBiz?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start speaking to your AI CFO today and transform your business operations
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
