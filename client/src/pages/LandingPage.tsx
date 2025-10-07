import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Scale, MessageSquare, Shield, LogIn } from 'lucide-react';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';

const features = [
  {
    icon: FileText,
    title: 'Draft Legal Documents Instantly',
    description: 'Generate contracts, agreements, and legal documents with AI assistance in minutes.'
  },
  {
    icon: Scale,
    title: 'Get Case Law Insights',
    description: 'Access relevant case law and legal precedents for your situation instantly.'
  },
  {
    icon: MessageSquare,
    title: 'Chat with a Virtual Legal Expert',
    description: 'Ask questions and get expert legal guidance through our AI-powered chat.'
  },
  {
    icon: Shield,
    title: 'Your Data Stays Confidential',
    description: 'End-to-end encryption ensures your legal matters remain completely private.'
  }
];

export default function LandingPage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const { login, isAuthenticated, logout } = useAuth();
  const [, setLocation] = useLocation();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      setLocation('/chat');
    } else {
      setLoginOpen(true);
    }
  };

  const handleLogin = (username: string) => {
    login(username);
    setLocation('/chat');
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-purple-blue flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-purple-blue bg-clip-text text-transparent">
              AI Legal Advisor
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Button variant="outline" onClick={() => setLocation('/chat')} data-testid="button-go-to-chat">
                  Go to Chat
                </Button>
                <Button variant="outline" onClick={logout} data-testid="button-logout-header">
                  Logout
                </Button>
              </>
            ) : (
              <Button variant="outline" onClick={() => setLoginOpen(true)} data-testid="button-login-header">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            )}
          </div>
        </div>
      </header>
      
      <Hero onGetStarted={handleGetStarted} />
      
      <div className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-purple-blue bg-clip-text text-transparent">
              Powerful Legal AI Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for legal assistance, powered by AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
      
      <HowItWorks />
      
      <div className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users getting instant legal assistance
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:scale-105 transition-transform text-white px-8 py-6 text-lg"
            onClick={handleGetStarted}
            data-testid="button-cta-bottom"
          >
            Start Chatting Now
          </Button>
        </div>
      </div>
      
      <Footer />
      
      <LoginModal 
        open={loginOpen} 
        onOpenChange={setLoginOpen}
        onLogin={handleLogin}
      />
    </div>
  );
}
