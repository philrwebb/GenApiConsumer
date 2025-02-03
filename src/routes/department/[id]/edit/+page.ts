import type { PageLoad } from "./$types";
import type {  Department } from "$lib/types";
import { getDepartmentById } from "$lib/api";

export const load: PageLoad = async ({params}) => {
    const id = +params.id;
    const [ departmentResponse] = await Promise.all([
        getDepartmentById(id)
    ]);

    if (departmentResponse.status === 200) {
        const department: Department = departmentResponse.data;


        return { department };
    } else {
        throw new Error("Failed to load data");
    }
};
