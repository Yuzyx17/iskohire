import { writable } from "svelte/store";

export const logged_in = writable(false)
export const log_id = writable(1)

export let user_id:number;
log_id.subscribe((value) => (user_id = value));