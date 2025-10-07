import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Scale, MessageSquare, Shield } from 'lucide-react';
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
  const { login, isAuthenticated } = useAuth();
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
