import ChatSidebar from '../ChatSidebar';

const mockConversations = [
  { id: '1', title: 'Property dispute question' },
  { id: '2', title: 'Contract review needed' },
  { id: '3', title: 'Employment law query' }
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
