import { Event } from "./Event";

export interface InstaLogger {
  createEvent(event: Event): Promise<Event>;
  listEvents(): Promise<Event[]>;
}
