import type { PageLoad } from './$types';
import type {  Address, AddressType } from '$lib/types';
import { getAddresses, getAddressTypes} from '$lib/api';

export const load: PageLoad = async () => {
	const [ addressResponse, addresstypeResponse] = await Promise.all([getAddresses(), getAddressTypes()]);

	if (addressResponse.status === 200 && addresstypeResponse.status === 200) {
        const address: Address[] = addressResponse.data;

const addresstype: AddressType[] = addresstypeResponse.data;

		return { address, addresstype };
	} else {
		throw new Error('Failed to load data');
	}
};