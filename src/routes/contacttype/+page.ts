import type { PageLoad } from './$types';
import type {  ContactType } from '$lib/types';
import { getContactTypes} from '$lib/api';

export const load: PageLoad = async () => {
	const [ contacttypeResponse] = await Promise.all([getContactTypes()]);

	if (contacttypeResponse.status === 200) {
        const contacttype: ContactType[] = contacttypeResponse.data;

		return { contacttype };
	} else {
		throw new Error('Failed to load data');
	}
};