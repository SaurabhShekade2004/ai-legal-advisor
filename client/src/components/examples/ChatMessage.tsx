import ChatMessage from '../ChatMessage';

export default function ChatMessageExample() {
  return (
    <div className="p-6 space-y-4">
      <ChatMessage 
        role="user" 
        content="What are the basic requirements for filing a civil suit in India?"
      />
      <ChatMessage 
        role="assistant" 
        content="To file a civil suit in India, you need to ensure: 1) The court has jurisdiction over the matter, 2) You have legal standing to sue, 3) The cause of action has not expired under the Limitation Act, and 4) You have proper documentation and evidence."
      />
    </div>
  );
}
