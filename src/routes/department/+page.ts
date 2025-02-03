import type { PageLoad } from './$types';
import type {  Department } from '$lib/types';
import { getDepartments} from '$lib/api';

export const load: PageLoad = async () => {
	const [ departmentResponse] = await Promise.all([getDepartments()]);

	if (departmentResponse.status === 200) {
        const department: Department[] = departmentResponse.data;

		return { department };
	} else {
		throw new Error('Failed to load data');
	}
};