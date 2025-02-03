import type { PageLoad } from './$types';
import type {  Person, GenderType } from '$lib/types';
import { getPeople, getGenderTypes} from '$lib/api';

export const load: PageLoad = async () => {
	const [ personResponse, gendertypeResponse] = await Promise.all([getPeople(), getGenderTypes()]);

	if (personResponse.status === 200 && gendertypeResponse.status === 200) {
        const person: Person[] = personResponse.data;

const gendertype: GenderType[] = gendertypeResponse.data;

		return { person, gendertype };
	} else {
		throw new Error('Failed to load data');
	}
};