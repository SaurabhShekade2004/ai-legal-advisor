import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut, Scale, Menu } from 'lucide-react';
import ChatSidebar from '@/components/ChatSidebar';
import ChatInterface from '@/components/ChatInterface';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation, Link } from 'wouter';

interface Conversation {
  id: string;
  title: string;
}

export default function ChatPage() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string>('');

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  const handleNewChat = () => {
    const newId = Date.now().toString();
    setActiveConversationId(newId);
    console.log('Starting new chat...');
  };

  const handleSelectConversation = (id: string) => {
    setActiveConversationId(id);
    console.log('Selected conversation:', id);
  };

  const handleAddConversation = (title: string) => {
    const newConversation: Conversation = {
      id: activeConversationId || Date.now().toString(),
      title: title
    };
    
    setConversations(prev => {
      const exists = prev.find(c => c.id === newConversation.id);
      if (exists) return prev;
      return [newConversation, ...prev];
    });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {sidebarOpen && (
        <ChatSidebar 
          conversations={conversations}
          activeConversationId={activeConversationId}
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
        
        <ChatInterface onAddConversation={handleAddConversation} />
      </div>
    </div>
  );
}
