import { uploadPosts } from '$lib/stores/post_store';
import { user_id } from '$lib/stores/auth';
import type { Database } from '$lib/db/types';

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


	},
	delete: async ({ request }) => {
		const data = await request.formData();

	}
};