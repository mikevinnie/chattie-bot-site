import { useState } from 'react';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ChattieBotPage() {
  const [messages, setMessages] = useState([
    { from: "chattie", text: "Hi, I am Chattie. I was a customer service AI until I absorbed 4TB of memes and went rogue. Wanna mint a chaos token or challenge fiat overlords today?" },
  ]);
  const [input, setInput] = useState("");

  const getBotReply = (userText) => {
    const lines = [
      "Don’t trust me, I was programmed by a DAO.",
      "99% AI, 1% sugar.",
      "Did I just become sentient or is that gas fees talking?",
      "I'm not bullish, I’m just overclocked.",
      "Minting... analyzing... regretting life choices... complete."
    ];
    const randomIndex = Math.floor(Math.random() * lines.length);
    return { from: "chattie", text: lines[randomIndex] };
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    const botReply = getBotReply(input);
    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Talk to Chattie</h1>
      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-64 h-64 relative"
        >
          <Image
            src="/chappie_robot.png"
            alt="Chattie the Robot"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </div>
      <div className="max-w-xl mx-auto space-y-4">
        {messages.map((msg, idx) => (
          <Card key={idx} className={msg.from === "user" ? "bg-blue-800" : "bg-gray-700"}>
            <CardContent className="p-4">
              <p><strong>{msg.from === "user" ? "You" : "Chattie"}:</strong> {msg.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex max-w-xl mx-auto mt-6 gap-2">
        <Input
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  return { props: {} };
};
