import { IGuests } from "../guest/IGuests";

interface Event {
  name: string;
  duration: number;
  date: string;
  location?: string;
  guests: IGuests | IGuests[];
  tag?: string;
}

export default Event;
