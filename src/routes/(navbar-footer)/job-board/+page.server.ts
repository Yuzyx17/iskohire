import { Filters } from '$lib/stores/post_store.js';
import { fail } from '@sveltejs/kit';
export const actions = {
	search: async ({ request }) => {
		const data = await request.formData();
		let filters: any = {}
        for (const [key, value] of data) {
            filters[key] = value;
        }
		Filters.set({i_type: filters["industry_type"], emp_type: filters["loc_type"]})
	}
};