import { InstaLogger, Event, EventFilters } from "./interfaces";

export class InstaLog implements InstaLogger {
  private readonly API_URL =
    "https://activity-logger-weld.vercel.app/api/events";
  constructor(private readonly access_token: string) {}

  /**
   * Creates an event.
   * @param event - The event object to be created.
   * @returns A Promise that resolves to the created event.
   * @throws An error if the request to create the event fails.
   */
  public async createEvent(event: Event): Promise<Event> {
    const response = await fetch(this.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.access_token}`,
      },
      body: JSON.stringify(event),
    });

    if (!response.ok) {
      throw new Error(`Failed to create event: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Retrieves a list of events based on the provided filters.
   * @param filters - Optional filters to apply to the event list.
   * @returns A promise that resolves to an array of events.
   * @throws An error if the request to list events fails.
   */
  public async listEvents(filters?: EventFilters): Promise<Event[]> {
    const response = await fetch(
      `${this.API_URL}?${this.generateFiltersQuery(filters)}`,
      {
        headers: {
          Authorization: `Bearer ${this.access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to list events: ${response.statusText}`);
    }

    return response.json();
  }

  private generateFiltersQuery(filters?: EventFilters): string {
    if (!filters) {
      return "";
    }
    if (!filters.page) filters.page = 1;
    return Object.entries(filters)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  }
}
