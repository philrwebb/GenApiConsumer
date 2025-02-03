import type { PageLoad } from './$types';
import type { Person, GenderType } from '$lib/types';
import { getPersonById, getGenderTypes } from '$lib/api';

export const load: PageLoad = async ({ params }) => {
	const personId = Number(params.id);

	const [personResponse, genderResponse] = await Promise.all([
		getPersonById(personId),
		getGenderTypes()
	]);

	if (personResponse.status === 200 && genderResponse.status === 200) {
		const person: Person = personResponse.data;
		const gendertypes: GenderType[] = genderResponse.data;
		return {
			person,
			gendertypes
		};
	} else {
		throw new Error('Failed to load data');
	}
};
