import ChatSidebar from '../ChatSidebar';

const mockConversations = [
  { id: '1', title: 'Property dispute question', timestamp: '2 hours ago' },
  { id: '2', title: 'Contract review needed', timestamp: 'Yesterday' },
  { id: '3', title: 'Employment law query', timestamp: '3 days ago' }
];

export default function ChatSidebarExample() {
  return (
    <div className="h-screen">
      <ChatSidebar 
        conversations={mockConversations}
        activeConversationId="1"
        onNewChat={() => console.log('New chat')}
        onSelectConversation={(id) => console.log('Selected:', id)}
      />
    </div>
  );
}
