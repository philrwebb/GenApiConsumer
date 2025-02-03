import type { PageLoad } from "./$types";
import type {  GenderType } from "$lib/types";
import { getGenderTypeById } from "$lib/api";

export const load: PageLoad = async ({params}) => {
    const id = +params.id;
    const [ gendertypeResponse] = await Promise.all([
        getGenderTypeById(id)
    ]);

    if (gendertypeResponse.status === 200) {
        const gendertype: GenderType = gendertypeResponse.data;


        return { gendertype };
    } else {
        throw new Error("Failed to load data");
    }
};
