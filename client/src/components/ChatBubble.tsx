import { motion } from "framer-motion";
import { User, Bot } from "lucide-react";

interface ChatBubbleProps {
  message: string;
  isUser?: boolean;
  delay?: number;
}

export function ChatBubble({ message, isUser = false, delay = 0 }: ChatBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"} items-start`}
      data-testid={isUser ? "chat-bubble-user" : "chat-bubble-ai"}
    >
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? "bg-holobiz-blue" : "bg-gradient-to-br from-holobiz-purple to-holobiz-blue"
      }`}>
        {isUser ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
      </div>
      <div
        className={`max-w-md px-4 py-3 rounded-lg ${
          isUser
            ? "bg-holobiz-blue text-white"
            : "bg-white shadow-md border border-border"
        }`}
      >
        <p className={`text-sm ${isUser ? "text-white" : "text-foreground"}`}>{message}</p>
      </div>
    </motion.div>
  );
}
