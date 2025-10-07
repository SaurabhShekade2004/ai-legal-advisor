import FeatureCard from '../FeatureCard';
import { FileText } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-6">
      <FeatureCard 
        icon={FileText}
        title="Draft Legal Documents Instantly"
        description="Generate contracts, agreements, and legal documents with AI assistance in minutes."
      />
    </div>
  );
}
