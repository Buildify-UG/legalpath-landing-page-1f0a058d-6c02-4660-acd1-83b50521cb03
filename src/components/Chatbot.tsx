import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Loader } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm LegalPath's AI assistant. I can help you with questions about law courses, entrance exams, admissions, and career guidance. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const knowledgeBase: Record<string, string> = {
    "law courses": "LegalPath offers comprehensive law courses including Constitutional Law, Criminal Law, Civil Law, Corporate Law, and more. Each course includes structured modules, real case studies, and practical applications. You can choose from beginner to advanced levels based on your current knowledge.",
    "entrance exam": "Our mock entrance tests are designed to match the format and difficulty of actual legal entrance exams (CLAT, AIBE, etc.). We provide detailed solutions, performance analytics, and personalized study recommendations based on your results.",
    "admission": "We help with law school admission preparation through dedicated modules, document guidance, and interview preparation. Our mentors provide insights into different law schools and admission processes across India.",
    "mentorship": "Connect with experienced advocates and legal professionals through our mentorship program. Get 1-on-1 guidance, career roadmaps, internship opportunities, and real-world legal practice insights.",
    "study resources": "Access our extensive library of study materials including case summaries, statutory notes, practice questions, and video lectures. All resources are curated by legal experts and updated regularly.",
    "mock tests": "Take unlimited mock tests covering various law entrance exams and bar association tests. Get instant results, detailed explanations, and performance tracking to identify weak areas.",
    "career guidance": "Our expert mentors provide personalized career guidance, helping you choose between different legal specializations, understand market demands, and prepare for internships and placements.",
    "pricing": "LegalPath offers flexible pricing plans. We have a free trial to explore our platform, monthly subscriptions, and annual plans with significant discounts. Contact our sales team for enterprise packages.",
    "support": "Our support team is available 24/7 to help with technical issues, course content questions, and general guidance. You can reach us through email, chat, or phone.",
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate processing delay for better UX
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let botResponse = "I am here to help! I can answer questions about law courses, entrance exams, admissions, mentorship, study resources, mock tests, career guidance, pricing, and support. What would you like to know?";

      // Search knowledge base for matching response
      for (const [key, value] of Object.entries(knowledgeBase)) {
        if (lowerInput.includes(key)) {
          botResponse = value;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center z-40"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-24px)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col z-50 max-h-[600px]">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-semibold">LegalPath Assistant</h3>
              <p className="text-sm text-primary-foreground/80">Always here to help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary/80 rounded transition"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-secondary text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-foreground px-4 py-2 rounded-lg rounded-bl-none flex items-center gap-2">
                  <Loader className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-border p-4 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about courses, exams..."
              className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={loading}
            />
            <Button
              type="submit"
              size="sm"
              disabled={loading || !input.trim()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
