export class Weather{
  summary: string;

  constructor(s:Weather) {
    this.summary = s.summary || 'nesto';
  }
}
