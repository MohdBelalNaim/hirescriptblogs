import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-surface border-t">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <h3 className="text-xl font-bold bg-text-gradient bg-clip-text text-transparent">
                Hirescript
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering the next generation of professionals with career insights, startup trends, and growth strategies.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Subscribe to our newsletter</h4>
              <div className="flex gap-2 max-w-sm">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button className="bg-hero-gradient hover:opacity-90 transition-opacity shrink-0">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Get weekly career tips and startup insights delivered to your inbox.
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/career-tips" className="hover:text-primary transition-colors">Career Tips</a></li>
              <li><a href="/startup-news" className="hover:text-primary transition-colors">Startup News</a></li>
              <li><a href="/tech-trends" className="hover:text-primary transition-colors">Tech Trends</a></li>
              <li><a href="/interviews" className="hover:text-primary transition-colors">Interviews</a></li>
              <li><a href="/resources" className="hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t">
          <p className="text-muted-foreground text-sm">
            © 2024 Hirescript. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};