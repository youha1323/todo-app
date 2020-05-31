export type Post = {
  id: number;
  title: string;
  done: boolean;
}

export type User = {
  //プロパティとして、氏名,称賛回数,称賛された回数,特定の画像を持つ
  name: string;
  clap: number;
  applause: number;
  img : HTMLImageElement;
}