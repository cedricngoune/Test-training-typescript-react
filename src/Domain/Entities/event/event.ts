interface Event {
  kind: kindEvent;
  name: string;
  duration: number;
  date: Date;
  location: string;
}

export enum kindEvent {
  CONF = "Conférence",
  GALA = "Gala",
  MEETING = "Meeting",
}
export default Event;
