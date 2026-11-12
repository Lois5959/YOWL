// Membre affiché dans le fil (données d'exemple du prototype)
export interface Member {
  id: number;
  name: string;
  gym: string;
  activity: string;
}

export interface ChatMessage {
  me: boolean;
  txt: string;
}

export interface Conversation {
  id: number;
  name: string;
  lastMsg: string;
  history: ChatMessage[];
}
