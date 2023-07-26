import { updatePosts, uploadPosts, deletePosts } from '$lib/stores/post_store';
import { user_id } from '$lib/stores/auth';
import type { Database } from '$lib/db/types';
import { goto } from '$app/navigation';

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
        let newPost: any = {}
        for (const [key, value] of data) {
            newPost[key] = value;
        }
        newPost["user_id"] = user_id
        newPost["status"] = "UNPUBLISHED"
        uploadPosts(newPost as Database['public']['Tables']['job_post']['Insert'])
	},
    update: async ({ request }) => {
		const data = await request.formData();
        let post: any = {}
        for (const [key, value] of data) {
            post[key] = value;
        }
        updatePosts(post)
        // goto("alumni-dashboard")
	},
	delete: async ({ request }) => {
		const data = await request.formData();
        let post: any = {}
        for (const [key, value] of data) {
            post[key] = value;
        }
        post["job_id"]
        post["user_id"]
        deletePosts(post["job_id"], post["user_id"])
	}
};