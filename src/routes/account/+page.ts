import type { PageLoad } from './$types';
import type {  Account, Person } from '$lib/types';
import { getAccounts, getPeople} from '$lib/api';

export const load: PageLoad = async () => {
	const [ accountResponse, personResponse] = await Promise.all([getAccounts(), getPeople()]);

	if (accountResponse.status === 200 && personResponse.status === 200) {
        const account: Account[] = accountResponse.data;

const person: Person[] = personResponse.data;

		return { account, person };
	} else {
		throw new Error('Failed to load data');
	}
};