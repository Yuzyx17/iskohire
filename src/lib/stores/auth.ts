import { writable } from "svelte/store";

export const logged_in = writable(true)
export const log_id = writable("14f9e9d6-865f-4283-8bd4-347a2854a992")

export let user_id:string;
log_id.subscribe((value) => (user_id = value));