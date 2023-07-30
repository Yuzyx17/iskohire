import { updatePosts, uploadPosts, deletePosts } from '$lib/stores/post_store';
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
	delete: async ({ request, locals: { getSession }}) => {
        let session = await getSession()
		const data = await request.formData();
        let post: any = {}
        for (const [key, value] of data) {
            post[key] = value;
        }
        post["user_id"]
        session?.user.id
        deletePosts(post["job_id"], session?.user.id)
	}
};