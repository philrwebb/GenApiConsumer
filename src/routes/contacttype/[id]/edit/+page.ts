import type { PageLoad } from "./$types";
import type {  ContactType } from "$lib/types";
import { getContactTypeById } from "$lib/api";

export const load: PageLoad = async ({params}) => {
    const id = +params.id;
    const [ contacttypeResponse] = await Promise.all([
        getContactTypeById(id)
    ]);

    if (contacttypeResponse.status === 200) {
        const contacttype: ContactType = contacttypeResponse.data;


        return { contacttype };
    } else {
        throw new Error("Failed to load data");
    }
};
