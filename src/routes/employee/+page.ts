import type { PageLoad } from './$types';
import type {  Employee, Department } from '$lib/types';
import { getEmployees, getDepartments} from '$lib/api';

export const load: PageLoad = async () => {
	const [ employeeResponse, departmentResponse] = await Promise.all([getEmployees(), getDepartments()]);

	if (employeeResponse.status === 200 && departmentResponse.status === 200) {
        const employee: Employee[] = employeeResponse.data;

const department: Department[] = departmentResponse.data;

		return { employee, department };
	} else {
		throw new Error('Failed to load data');
	}
};