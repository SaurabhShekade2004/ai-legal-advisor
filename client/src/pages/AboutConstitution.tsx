import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, Scale, BookOpen, Gavel } from 'lucide-react';
import { Link } from 'wouter';
import constitutionImg from '@assets/stock_images/indian_constitution__1b83b90e.jpg';
import courtroomImg from '@assets/stock_images/professional_courtro_87a706cf.jpg';

export default function AboutConstitution() {
  const handleDownload = () => {
    console.log('Downloading Constitution PDF...');
    window.open('https://legislative.gov.in/constitution-of-india/', '_blank');
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Button variant="ghost" size="icon" data-testid="button-back">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-purple-blue flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-purple-blue bg-clip-text text-transparent">
                AI Legal Advisor
              </span>
            </div>
          </Link>
        </div>
      </header>

      <div className="relative bg-gradient-legal py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <BookOpen className="w-4 h-4 text-chart-3" />
              <span className="text-sm text-white/90">The Supreme Law of India</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Indian Constitution
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The Constitution of India is the supreme law of India. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers, and duties of government institutions.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src={constitutionImg} 
                alt="Indian Constitution" 
                className="rounded-2xl shadow-2xl w-full object-cover"
                data-testid="img-constitution"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent">
                About the Constitution
              </h2>
              
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  The Constitution of India was adopted on 26th November 1949 and came into effect on 26th January 1950. It is the longest written constitution of any sovereign country in the world.
                </p>
                
                <p className="leading-relaxed">
                  The Constitution provides for a parliamentary system of government which is federal in structure with certain unitary features. It establishes the framework for the governance of India.
                </p>
                
                <div className="pt-4">
                  <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Gavel className="w-5 h-5 text-primary mt-0.5" />
                      <span>Fundamental Rights for all citizens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Gavel className="w-5 h-5 text-primary mt-0.5" />
                      <span>Directive Principles of State Policy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Gavel className="w-5 h-5 text-primary mt-0.5" />
                      <span>Independent Judiciary</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Gavel className="w-5 h-5 text-primary mt-0.5" />
                      <span>Federal structure with Parliamentary form</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent">
                Download the Constitution
              </h2>
              
              <p className="text-foreground leading-relaxed">
                Access the complete text of the Indian Constitution. Available in multiple formats for your convenience. Learn about your rights, duties, and the fundamental principles that govern our nation.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-gold hover:scale-105 transition-transform text-white"
                onClick={handleDownload}
                data-testid="button-download-constitution"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Constitution PDF
              </Button>
              
              <p className="text-sm text-muted-foreground">
                The PDF will redirect you to the official legislative website
              </p>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src={courtroomImg} 
                alt="Courtroom" 
                className="rounded-2xl shadow-2xl w-full object-cover"
                data-testid="img-courtroom"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Important Constitutional Bodies</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Supreme Court', desc: 'Highest judicial authority' },
              { title: 'Parliament', desc: 'Legislative body of India' },
              { title: 'Election Commission', desc: 'Conducts free and fair elections' }
            ].map((body) => (
              <div 
                key={body.title}
                className="p-6 rounded-lg bg-background border border-border hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-2 text-foreground">{body.title}</h3>
                <p className="text-muted-foreground">{body.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
