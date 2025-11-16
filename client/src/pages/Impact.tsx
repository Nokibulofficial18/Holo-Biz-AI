import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { StatsCard } from "@/components/StatsCard";
import {
  TrendingUp,
  Target,
  Users,
  Globe,
  Award,
  Lightbulb,
  BarChart3,
  Briefcase,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Impact() {
  const policyAlignment = [
    {
      icon: TrendingUp,
      title: "Access to Finance",
      description: "Credit readiness tools and loan guidance aligned with SME Policy 2019 financial inclusion goals",
      impact: "39% of financially constrained MSMEs supported",
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Voice-based micro-training modules for accounting, quality control, and digital marketing",
      impact: "On-demand learning for 7.8M SME owners",
    },
    {
      icon: Users,
      title: "Cluster Development",
      description: "Community intelligence and joint procurement opportunities for local business networks",
      impact: "Strengthening 90% CMSME industrial clusters",
    },
    {
      icon: Globe,
      title: "Export Capability",
      description: "Export readiness advisor with market recommendations and certification guidance",
      impact: "Boosting SME contribution beyond 25% GDP",
    },
    {
      icon: Lightbulb,
      title: "Digital Transformation",
      description: "Voice-first AI interface making advanced analytics accessible to all literacy levels",
      impact: "Democratizing financial insights for all SMEs",
    },
  ];

  const projectedGrowth = [
    { year: "Year 1", users: 10000, revenue: 500, satisfaction: 75 },
    { year: "Year 2", users: 40000, revenue: 1800, satisfaction: 82 },
    { year: "Year 3", users: 100000, revenue: 4200, satisfaction: 88 },
    { year: "Year 4", users: 200000, revenue: 8500, satisfaction: 92 },
    { year: "Year 5", users: 350000, revenue: 15000, satisfaction: 95 },
  ];

  const outcomes = [
    { icon: TrendingUp, value: "20%", label: "Average profit improvement", variant: "success" as const },
    { icon: BarChart3, value: "30%", label: "Inventory waste reduction", variant: "warning" as const },
    { icon: Target, value: "100K", label: "Users by Year 3", variant: "primary" as const },
    { icon: Briefcase, value: "7.8M", label: "SME market opportunity", variant: "info" as const },
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
              Impact & Policy Alignment
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Supporting Bangladesh's SME Policy 2019 goals with AI-driven solutions
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
              Alignment with SME Policy 2019
            </h2>
            <p className="text-lg text-muted-foreground">
              Every feature directly supports national SME development objectives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {policyAlignment.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-holobiz-blue to-holobiz-purple flex items-center justify-center mb-4">
                    <policy.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                    {policy.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{policy.description}</p>
                  <div className="bg-holobiz-green/10 rounded-md p-2 mt-auto">
                    <p className="text-xs font-semibold text-holobiz-green">{policy.impact}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Projected Outcomes
            </h2>
            <p className="text-lg text-muted-foreground">
              Our 5-year growth trajectory and impact metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {outcomes.map((outcome, index) => (
              <StatsCard
                key={index}
                icon={outcome.icon}
                value={outcome.value}
                label={outcome.label}
                variant={outcome.variant}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 md:p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">
                5-Year User Growth Projection
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={projectedGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#1A73E8"
                    strokeWidth={3}
                    name="Active Users"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
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
              Building Bangladesh's Digital SME Ecosystem
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Goal: 100,000 SME users in 3 years, contributing to national economic growth
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
              <Award className="w-6 h-6" />
              <span className="font-semibold">Government-aligned, SME-focused, Future-ready</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
