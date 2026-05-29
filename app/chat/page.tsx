import type { Metadata } from "next";
import { ChatSurface } from "./chat-surface";

export const metadata: Metadata = {
  title: "Meridian AI Chat",
  description: "AI Elements-style chat surface for Meridian Marketplace.",
};

export default function ChatPage() {
  return <ChatSurface />;
}
