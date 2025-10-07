import { Button } from '@/components/ui/button';
import { LogOut, Scale } from 'lucide-react';
import ChatInterface from '@/components/ChatInterface';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation, Link } from 'wouter';

export default function ChatPage() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col">
        <header className="border-b border-border bg-card/50 backdrop-blur-sm px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-purple-blue flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-purple-blue bg-clip-text text-transparent">
              AI Legal Advisor
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/about-constitution">
              <Button variant="outline" className="border-primary/50" data-testid="link-about-constitution">
                About Constitution
              </Button>
            </Link>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground" data-testid="text-username">
                {user?.username}
              </span>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                data-testid="button-logout"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>
        
        <ChatInterface />
      </div>
    </div>
  );
}
