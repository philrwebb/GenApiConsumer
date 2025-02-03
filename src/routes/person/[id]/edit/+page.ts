import type { PageLoad } from './$types';
import type { Person, GenderType } from '$lib/types';
import { getPersonById, getGenderTypes } from '$lib/api';

export const load: PageLoad = async ({ params }) => {
	const id = +params.id;
	const [personResponse, gendertypeResponse] = await Promise.all([
		getPersonById(id),
		getGenderTypes()
	]);

	if (personResponse.status === 200 && gendertypeResponse.status === 200) {
		const person: Person = personResponse.data;

		const gendertype: GenderType[] = gendertypeResponse.data;

		console.log(gendertype);

		return { person, gendertype };
	} else {
		throw new Error('Failed to load data');
	}
};
