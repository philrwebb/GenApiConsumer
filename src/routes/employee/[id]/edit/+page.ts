import type { PageLoad } from "./$types";
import type {  Employee, Department } from "$lib/types";
import { getEmployeeById, getDepartments } from "$lib/api";

export const load: PageLoad = async ({params}) => {
    const id = +params.id;
    const [ employeeResponse, departmentResponse] = await Promise.all([
        getEmployeeById(id), getDepartments()
    ]);

    if (employeeResponse.status === 200 && departmentResponse.status === 200) {
        const employee: Employee = employeeResponse.data;

const department: Department[] = departmentResponse.data;


        return { employee, department };
    } else {
        throw new Error("Failed to load data");
    }
};
