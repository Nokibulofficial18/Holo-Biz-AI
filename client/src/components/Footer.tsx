import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Linkedin, Github } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-holobiz-purple to-holobiz-blue flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold">HoloBiz</span>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Your AI CFO. Speak. Understand. Grow.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover-elevate" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-elevate" data-testid="link-github">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-elevate" data-testid="link-whatsapp">
                <SiWhatsapp className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/features"><a className="hover:text-white transition-colors" data-testid="link-footer-financial">Financial Assistant</a></Link></li>
              <li><Link href="/features"><a className="hover:text-white transition-colors" data-testid="link-footer-compliance">Compliance Tools</a></Link></li>
              <li><Link href="/features"><a className="hover:text-white transition-colors" data-testid="link-footer-export">Export Advisor</a></Link></li>
              <li><Link href="/features"><a className="hover:text-white transition-colors" data-testid="link-footer-training">Micro Training</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/how-it-works"><a className="hover:text-white transition-colors" data-testid="link-footer-how-it-works">How It Works</a></Link></li>
              <li><Link href="/use-cases"><a className="hover:text-white transition-colors" data-testid="link-footer-use-cases">Use Cases</a></Link></li>
              <li><Link href="/technology"><a className="hover:text-white transition-colors" data-testid="link-footer-technology">Technology</a></Link></li>
              <li><Link href="/impact"><a className="hover:text-white transition-colors" data-testid="link-footer-impact">Impact & Policy</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-slate-300 mb-3">Get updates on HoloBiz features</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-slate-800 border-slate-700"
                data-testid="input-newsletter-email"
              />
              <Button className="bg-holobiz-purple hover:bg-holobiz-purple/90" data-testid="button-newsletter-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2024 HoloBiz. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors" data-testid="link-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
