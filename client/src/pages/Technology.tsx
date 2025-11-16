import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mic,
  Brain,
  Database,
  Cloud,
  Shield,
  Zap,
  Lock,
  Wifi,
  Server,
  Code,
} from "lucide-react";
import { SiPython, SiMongodb, SiAmazon, SiGoogle } from "react-icons/si";

export default function Technology() {
  const techStack = [
    {
      icon: Mic,
      name: "Whisper / Vosk",
      category: "Speech-to-Text",
      description: "Advanced STT for Bangla and English voice recognition",
    },
    {
      icon: Brain,
      name: "Fine-tuned LLM",
      category: "Language Model",
      description: "Custom Bangla-Banglish language model for business context",
    },
    {
      icon: Code,
      name: "Prophet / LSTM",
      category: "Forecasting",
      description: "Time-series forecasting for cash flow and inventory",
    },
    {
      icon: Zap,
      name: "Reinforcement Learning",
      category: "Personalization",
      description: "Adaptive recommendations based on user behavior",
    },
    {
      icon: SiPython,
      name: "Python FastAPI",
      category: "Backend",
      description: "High-performance async backend architecture",
    },
    {
      icon: SiMongodb,
      name: "MongoDB Atlas",
      category: "Database",
      description: "Scalable cloud database for business data",
    },
    {
      icon: SiAmazon,
      name: "AWS",
      category: "Cloud Infrastructure",
      description: "Serverless functions and cloud computing",
    },
    {
      icon: SiGoogle,
      name: "GCP",
      category: "Cloud Services",
      description: "AI/ML services and cloud functions",
    },
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All financial data is encrypted in transit and at rest",
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description: "Bank-grade security for sensitive business information",
    },
    {
      icon: Wifi,
      title: "Near-Offline Mode",
      description: "Core features work with minimal internet connectivity",
    },
    {
      icon: Server,
      title: "Data Sovereignty",
      description: "Your data stays in Bangladesh-compliant infrastructure",
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
              Technology Architecture
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge AI and cloud infrastructure powering HoloBiz
            </p>
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
            <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">
              AI & ML Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade technologies designed for Bangladeshi SMEs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-holobiz-purple to-holobiz-blue mb-4">
                    {typeof tech.icon === 'function' ? (
                      <tech.icon className="w-6 h-6 text-white" />
                    ) : (
                      <tech.icon className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <Badge variant="secondary" className="mb-2">{tech.category}</Badge>
                  <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-lg p-8 md:p-12"
          >
            <h3 className="text-3xl font-heading font-bold mb-6 text-center text-foreground">
              How It All Connects
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="flex items-center gap-4">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                  <Mic className="w-8 h-8 text-holobiz-blue mb-2 mx-auto" />
                  <p className="text-sm font-semibold">Voice Input</p>
                </div>
                <span className="text-2xl text-muted-foreground">→</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                  <Brain className="w-8 h-8 text-holobiz-purple mb-2 mx-auto" />
                  <p className="text-sm font-semibold">AI Processing</p>
                </div>
                <span className="text-2xl text-muted-foreground">→</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                  <Database className="w-8 h-8 text-holobiz-green mb-2 mx-auto" />
                  <p className="text-sm font-semibold">Data Analysis</p>
                </div>
                <span className="text-2xl text-muted-foreground">→</span>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                <Zap className="w-8 h-8 text-holobiz-yellow mb-2 mx-auto" />
                <p className="text-sm font-semibold">Insights</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">
              Security & Reliability
            </h2>
            <p className="text-lg text-muted-foreground">
              Bank-grade security for your business data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center hover-elevate">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-holobiz-green to-emerald-600 flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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
            <Cloud className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Built for Bangladesh's Digital Future
            </h2>
            <p className="text-xl text-blue-100">
              Scalable, secure, and designed to work even with limited connectivity
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
