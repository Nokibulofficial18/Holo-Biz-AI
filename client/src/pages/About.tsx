import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Github, Target, Eye, Heart } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Nokibul Hasan",
      role: "Project Lead, AI/ML & Frontend",
      initials: "NH",
      bio: "Expert in AI/ML systems and modern frontend development. Leading the vision for HoloBiz's conversational AI interface.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Md. Hasibul Haque",
      role: "Co-Lead, Data Scientist",
      initials: "MH",
      bio: "Specialized in financial forecasting and data analytics. Building predictive models for SME insights.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Ruhin Arman Omi",
      role: "Backend Developer",
      initials: "RO",
      bio: "Backend architecture expert focused on scalable, secure systems for financial data processing.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Empower Bangladesh's 7.8M SMEs with accessible, voice-driven financial intelligence that drives growth and financial inclusion.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Become the leading AI CFO for SMEs across South Asia, democratizing financial insights through conversational technology.",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Accessibility, Trust, Innovation, and SME-first thinking guide everything we build.",
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
              About HoloBiz
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building the future of SME financial management in Bangladesh
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover-elevate">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-holobiz-blue to-holobiz-purple flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Passionate experts building AI solutions for Bangladesh's SMEs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover-elevate">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-holobiz-blue to-holobiz-purple text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-heading font-bold mb-1 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-holobiz-purple font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover-elevate"
                      data-testid={`link-${member.name.toLowerCase().replace(/\s+/g, "-")}-github`}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover-elevate"
                      data-testid={`link-${member.name.toLowerCase().replace(/\s+/g, "-")}-linkedin`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
              <h2 className="text-3xl font-heading font-bold mb-4 text-foreground text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  HoloBiz was born from a simple observation: Bangladesh's 7.8 million SMEs are the backbone of our economy, yet 39% face financial constraints and struggle with basic business analytics.
                </p>
                <p className="mb-4">
                  We realized that the barrier wasn't capability—it was accessibility. Traditional financial tools require technical expertise, digital literacy, and often a computer. But every SME owner has a voice and a phone.
                </p>
                <p className="mb-4">
                  By combining advanced AI with voice-first interaction in Bangla and English, we're making sophisticated financial insights as easy as asking a question. No dashboards to learn. No complex software. Just speak, and HoloBiz understands.
                </p>
                <p>
                  Our goal is to support 100,000 SMEs in the first three years, directly contributing to Bangladesh's economic growth and the achievement of SME Policy 2019 objectives.
                </p>
              </div>
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
              Join Us on This Journey
            </h2>
            <p className="text-xl text-blue-100">
              Together, we're building a more financially inclusive Bangladesh
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
