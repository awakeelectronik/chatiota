export interface Message {
  text: string;
  date: string;
  receiver: boolean;
}

export interface Conversation {
  address: string;
  messages: Message[];
}