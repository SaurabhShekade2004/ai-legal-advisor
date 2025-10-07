import { Button } from '@/components/ui/button';
import { Plus, MessageSquare, Clock } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Conversation {
  id: string;
  title: string;
  timestamp: string;
}

interface ChatSidebarProps {
  conversations: Conversation[];
  activeConversationId?: string;
  onNewChat: () => void;
  onSelectConversation: (id: string) => void;
}

export default function ChatSidebar({ 
  conversations, 
  activeConversationId, 
  onNewChat, 
  onSelectConversation 
}: ChatSidebarProps) {
  return (
    <div className="w-72 bg-sidebar border-r border-sidebar-border flex flex-col h-full">
      <div className="p-4 border-b border-sidebar-border">
        <Button 
          className="w-full bg-gradient-purple-blue hover:scale-105 transition-transform"
          onClick={onNewChat}
          data-testid="button-new-chat"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Chat
        </Button>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-1">
          <h3 className="px-3 py-2 text-sm font-semibold text-sidebar-foreground/70">
            Previous Conversations
          </h3>
          
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => onSelectConversation(conv.id)}
              className={`w-full text-left px-3 py-3 rounded-md hover-elevate active-elevate-2 transition-all ${
                activeConversationId === conv.id 
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                  : 'text-sidebar-foreground'
              }`}
              data-testid={`conversation-${conv.id}`}
            >
              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{conv.title}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    {conv.timestamp}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
