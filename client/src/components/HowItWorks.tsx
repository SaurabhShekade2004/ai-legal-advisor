import { MessageSquare, Brain, Download } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Ask your legal question',
    description: 'Type your legal query in plain language'
  },
  {
    number: 2,
    icon: Brain,
    title: 'AI analyzes and responds',
    description: 'Our AI processes and provides expert insights'
  },
  {
    number: 3,
    icon: Download,
    title: 'Download drafts or recommendations',
    description: 'Get actionable documents and advice instantly'
  }
];

export default function HowItWorks() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-purple-blue bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Get legal assistance in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative" data-testid={`step-${step.number}`}>
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-20 h-20 rounded-full bg-gradient-purple-blue flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-primary/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
