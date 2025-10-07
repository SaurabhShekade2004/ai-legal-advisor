import { Scale } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-purple-blue flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent">
                AI Legal Advisor
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted AI-powered legal assistant for instant insights and document generation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-constitution" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-about">
                  About Constitution
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <p className="text-muted-foreground text-sm">
              Have questions? Reach out to our support team.
            </p>
            <a href="mailto:support@ailegaladvisor.com" className="text-primary hover:underline text-sm">
              support@ailegaladvisor.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 AI Legal Advisor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
