import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ y: -4 }}
      data-testid={`feature-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Card className="p-6 h-full backdrop-blur-sm bg-card/80 border-card-border hover-elevate">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-holobiz-purple to-holobiz-blue flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}
