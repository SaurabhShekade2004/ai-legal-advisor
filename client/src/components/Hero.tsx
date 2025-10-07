import { Button } from '@/components/ui/button';
import { Scale, Sparkles } from 'lucide-react';
import ladyJusticeImg from '@assets/image_1759812165735.png';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="relative bg-gradient-legal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-chart-3" />
              <span className="text-sm text-white/90">Powered by AI Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Your Personal AI Legal Assistant
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Get instant legal insights, document drafts, and case clarifications — powered by AI.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-gold hover:scale-105 transition-transform text-white border-0 shadow-xl"
                onClick={onGetStarted}
                data-testid="button-get-started"
              >
                <Scale className="w-5 h-5 mr-2" />
                Chat with Advisor
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-purple-blue opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={ladyJusticeImg} 
              alt="Lady Justice Statue" 
              className="relative rounded-2xl shadow-2xl w-3/4 h-auto object-cover"
              data-testid="img-hero-justice"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
