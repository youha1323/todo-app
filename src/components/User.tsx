export default class User  {
  //プロパティとして、氏名,称賛回数,称賛された回数を持つ
  name: string;
  clap: number;
  applause: number;
  
  constructor(name: string) {
    this.name=name;//name は後から変更できるように
    this.clap=100;
    this.applause=0;
  }

}
