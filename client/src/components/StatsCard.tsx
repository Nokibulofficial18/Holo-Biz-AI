import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
  variant?: "primary" | "success" | "warning" | "info";
}

export function StatsCard({ icon: Icon, value, label, delay = 0, variant = "primary" }: StatsCardProps) {
  const variantColors = {
    primary: "from-holobiz-blue to-holobiz-purple",
    success: "from-holobiz-green to-emerald-600",
    warning: "from-holobiz-yellow to-amber-600",
    info: "from-holobiz-purple to-purple-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      data-testid={`stats-card-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Card className="p-6 text-center backdrop-blur-sm bg-card/90 border-card-border hover-elevate">
        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${variantColors[variant]} flex items-center justify-center mb-4`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl font-heading font-bold text-foreground mb-1">{value}</div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </Card>
    </motion.div>
  );
}
