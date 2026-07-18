import { useEffect, useRef, useState, type FormEvent } from 'react';
import { MessageCircle, Send, Trash2, X } from 'lucide-react';
import { chatAnswers, chatFallback, type ChatAnswer } from '../data';
import './chatbot.css';

type Message = { id: number; sender: 'bot' | 'user'; text: string };
const welcomeMessage: Message = { id: 0, sender: 'bot', text: 'Hi! I’m Raju’s portfolio assistant. I use predefined answers only. What would you like to know?' };
const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9.]+/g, ' ').trim();
const findAnswer = (question: string) => {
  const normalizedQuestion = normalize(question);
  return chatAnswers.find(({ keywords }) => keywords.some((keyword) => normalizedQuestion.includes(normalize(keyword))));
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [question, setQuestion] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageId = useRef(1);

  useEffect(() => { if (isOpen) inputRef.current?.focus() }, [isOpen]);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ block: 'nearest' }) }, [messages]);
  const closeChat = () => { setIsOpen(false); window.requestAnimationFrame(() => launcherRef.current?.focus()) };
  const askQuestion = (text: string, answer?: ChatAnswer) => {
    const trimmedQuestion = text.trim();
    if (!trimmedQuestion) return;
    const response = answer ?? findAnswer(trimmedQuestion);
    setMessages((current) => [...current,
      { id: messageId.current++, sender: 'user', text: trimmedQuestion },
      { id: messageId.current++, sender: 'bot', text: response?.answer ?? chatFallback },
    ]);
    setQuestion('');
  };
  const submitQuestion = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); askQuestion(question) };
  const clearChat = () => { setMessages([welcomeMessage]); setQuestion(''); inputRef.current?.focus() };

  return <div className="chatbot">{isOpen ? <section className="chat-panel" role="dialog" aria-modal="false" aria-labelledby="chat-title" onKeyDown={(event) => { if (event.key === 'Escape') closeChat() }}>
    <div className="chat-header"><div><span className="chat-avatar" aria-hidden="true">RE</span><div><h2 id="chat-title">Chat with Raju</h2><p>Predefined portfolio answers</p></div></div><div className="chat-actions"><button type="button" onClick={clearChat} aria-label="Clear chat"><Trash2 aria-hidden="true" /></button><button type="button" onClick={closeChat} aria-label="Close chat"><X aria-hidden="true" /></button></div></div>
    <div className="chat-messages" role="log" aria-live="polite" aria-relevant="additions">{messages.map((message) => <div className={`chat-message ${message.sender}`} key={message.id}><span className="sr-only">{message.sender === 'bot' ? 'Raju’s assistant' : 'You'}:</span>{message.text}</div>)}<div ref={messagesEndRef} aria-hidden="true" /></div>
    <div className="chat-suggestions" aria-label="Suggested recruiter questions"><p>Suggested questions</p><div>{chatAnswers.map((item) => <button type="button" key={item.id} onClick={() => askQuestion(item.question, item)}>{item.question}</button>)}</div></div>
    <form className="chat-form" onSubmit={submitQuestion}><label className="sr-only" htmlFor="chat-question">Ask about Raju’s experience</label><input id="chat-question" ref={inputRef} value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about Raju…" autoComplete="off"/><button type="submit" aria-label="Send question" disabled={!question.trim()}><Send aria-hidden="true" /></button></form>
  </section> : <button className="chat-launcher" type="button" ref={launcherRef} onClick={() => setIsOpen(true)} aria-haspopup="dialog"><MessageCircle aria-hidden="true"/><span>Chat with Raju</span></button>}</div>;
}
