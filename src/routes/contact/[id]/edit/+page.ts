import type { PageLoad } from "./$types";
import type {  Contact, ContactType } from "$lib/types";
import { getContactById, getContactTypes } from "$lib/api";

export const load: PageLoad = async ({params}) => {
    const id = +params.id;
    const [ contactResponse, contacttypeResponse] = await Promise.all([
        getContactById(id), getContactTypes()
    ]);

    if (contactResponse.status === 200 && contacttypeResponse.status === 200) {
        const contact: Contact = contactResponse.data;

const contacttype: ContactType[] = contacttypeResponse.data;


        return { contact, contacttype };
    } else {
        throw new Error("Failed to load data");
    }
};
