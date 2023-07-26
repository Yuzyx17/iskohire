import { writable } from "svelte/store";

export const logged_in = writable(true)
export const log_id = writable(2)

export let user_id:number;
log_id.subscribe((value) => (user_id = value));