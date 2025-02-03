import type { PageLoad } from './$types';
import type {  AddressType } from '$lib/types';
import { getAddressTypes} from '$lib/api';

export const load: PageLoad = async () => {
	const [ addresstypeResponse] = await Promise.all([getAddressTypes()]);

	if (addresstypeResponse.status === 200) {
        const addresstype: AddressType[] = addresstypeResponse.data;

		return { addresstype };
	} else {
		throw new Error('Failed to load data');
	}
};