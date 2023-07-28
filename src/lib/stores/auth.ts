import { writable } from "svelte/store";

export const logged_in = writable(false)
export const log_id = writable("")

export let user_id:string;
log_id.subscribe((value) => (user_id = value));