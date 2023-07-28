import { writable } from "svelte/store";

export const logged_in = writable(false)
export const log_id = writable("")
export const roleid = writable(0)

export let user_id:string;
log_id.subscribe((value) => (user_id = value));
export let role_id:number;
roleid.subscribe((value) => (role_id = value));