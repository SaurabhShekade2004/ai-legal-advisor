import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut, Scale, Menu } from 'lucide-react';
import ChatSidebar from '@/components/ChatSidebar';
import ChatInterface from '@/components/ChatInterface';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation, Link } from 'wouter';

export default function ChatPage() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Mock conversations data
  const [conversations] = useState([
    { id: '1', title: 'Property dispute question', timestamp: '2 hours ago' },
    { id: '2', title: 'Contract review needed', timestamp: 'Yesterday' },
    { id: '3', title: 'Employment law query', timestamp: '3 days ago' },
    { id: '4', title: 'Tenant rights inquiry', timestamp: '5 days ago' }
  ]);

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  const handleNewChat = () => {
    console.log('Starting new chat...');
  };

  const handleSelectConversation = (id: string) => {
    console.log('Selected conversation:', id);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {sidebarOpen && (
        <ChatSidebar 
          conversations={conversations}
          activeConversationId="1"
          onNewChat={handleNewChat}
          onSelectConversation={handleSelectConversation}
        />
      )}
      
      <div className="flex-1 flex flex-col">
        <header className="border-b border-border bg-card/50 backdrop-blur-sm px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              data-testid="button-toggle-sidebar"
            >
              <Menu className="w-5 h-5" />
            </Button>
            
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-purple-blue flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-purple-blue bg-clip-text text-transparent">
                AI Legal Advisor
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/about-constitution">
              <Button variant="ghost" data-testid="link-about-constitution">
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
