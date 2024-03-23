export class Person {
  id:number;
  name:string;

  constructor(s:Person) {
    this.name = s.name || 'nesto';
    this.id = s.id || 0;
    this.id = s.id || 0;
  }
}
