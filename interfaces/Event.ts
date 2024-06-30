export interface Event {
    id: string;
    object: string;
    actor_id: string;
    actor_name: string;
    group: string;
    action_id: string;
    action_object: string;
    action_name: string;
    target_id: string;
    target_name: string;
    location: string;
    occurred_at: Date;
    metadata: any;
}