import type { PageLoad } from "./$types";
import type {  AddressType } from "$lib/types";
import { getAddressTypeById } from "$lib/api";

export const load: PageLoad = async ({params}) => {
    const id = +params.id;
    const [ addresstypeResponse] = await Promise.all([
        getAddressTypeById(id)
    ]);

    if (addresstypeResponse.status === 200) {
        const addresstype: AddressType = addresstypeResponse.data;


        return { addresstype };
    } else {
        throw new Error("Failed to load data");
    }
};
