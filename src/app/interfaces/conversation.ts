export interface Message {
  text: string;
  date: string;
}

export interface Conversation {
  address: string;
  messages: Message[];
}