import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactFormSchema = insertContactSubmissionSchema.extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: "Please try again later.",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const faqs = [
    {
      question: "What is HoloBiz?",
      answer: "HoloBiz is a voice-driven AI CFO designed specifically for Bangladeshi SMEs. You can ask questions in Bangla or English and get instant financial insights, predictions, and business guidance.",
    },
    {
      question: "How does voice input work?",
      answer: "Simply speak to HoloBiz in Bangla, Banglish, or English. Our advanced speech-to-text system understands your business queries and provides contextual responses with dashboards and recommendations.",
    },
    {
      question: "Is my financial data secure?",
      answer: "Yes! We use bank-grade encryption for all data in transit and at rest. Your business information is stored securely on Bangladesh-compliant cloud infrastructure.",
    },
    {
      question: "Do I need internet connectivity all the time?",
      answer: "HoloBiz works in near-offline mode, meaning core features function with minimal internet connectivity. Full AI analysis requires internet, but basic queries work offline.",
    },
    {
      question: "What types of businesses can use HoloBiz?",
      answer: "HoloBiz is designed for all Bangladeshi SMEs including retail shops, pharmacies, clothing stores, manufacturers, online sellers, wholesalers, and more. We adapt to your specific business type.",
    },
    {
      question: "How much does HoloBiz cost?",
      answer: "We offer flexible pricing plans for SMEs of all sizes. Contact us for a demo and pricing information tailored to your business needs.",
    },
    {
      question: "Can HoloBiz help me get a business loan?",
      answer: "Yes! HoloBiz provides credit readiness scoring, helps prepare bank documents, and guides you through CGS and SME Foundation loan programs.",
    },
    {
      question: "What languages does HoloBiz support?",
      answer: "HoloBiz understands Bangla, Banglish (Bangla written in English), and English. You can mix languages naturally in your queries.",
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? We're here to help you get started with HoloBiz
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">
                Send Us a Message
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} data-testid="input-contact-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} data-testid="input-contact-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+880 1234567890" {...field} data-testid="input-contact-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your business and how HoloBiz can help..."
                            className="min-h-32"
                            {...field}
                            data-testid="input-contact-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-holobiz-green bg-holobiz-green/10 p-3 rounded-lg"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-semibold">Message sent successfully!</span>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-holobiz-blue to-holobiz-purple hover:opacity-90 disabled:opacity-50"
                    data-testid="button-contact-submit"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">
                Contact Information
              </h2>

              <div className="space-y-4 mb-8">
                <Card className="p-4 hover-elevate">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-holobiz-blue to-holobiz-purple flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:support@holobiz.ai" className="font-semibold text-foreground hover:text-primary" data-testid="link-email">
                        support@holobiz.ai
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover-elevate">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-holobiz-green to-emerald-600 flex items-center justify-center">
                      <SiWhatsapp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <a href="https://wa.me/8801234567890" className="font-semibold text-foreground hover:text-primary" data-testid="link-whatsapp-contact">
                        +880 1234 567 890
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover-elevate">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-holobiz-purple to-purple-600 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">AI Chatbot</p>
                      <p className="font-semibold text-foreground">Coming Soon</p>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-gradient-to-br from-holobiz-blue to-holobiz-purple text-white">
                <h3 className="text-xl font-heading font-bold mb-3">
                  Schedule a Demo
                </h3>
                <p className="mb-4 text-blue-100">
                  See HoloBiz in action with a personalized demo for your business
                </p>
                <Button variant="secondary" className="w-full" data-testid="button-schedule-demo">
                  Book a Demo Call
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about HoloBiz
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold hover:no-underline" data-testid={`faq-question-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
