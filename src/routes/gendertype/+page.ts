import type { PageLoad } from './$types';
import type {  GenderType } from '$lib/types';
import { getGenderTypes} from '$lib/api';

export const load: PageLoad = async () => {
	const [ gendertypeResponse] = await Promise.all([getGenderTypes()]);

	if (gendertypeResponse.status === 200) {
        const gendertype: GenderType[] = gendertypeResponse.data;

		return { gendertype };
	} else {
		throw new Error('Failed to load data');
	}
};