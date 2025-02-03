<script lang="ts">
	import type {  Employee, Department } from '$lib/types';
	import type { PageData } from './$types';
	import { deleteEmployee } from '$lib/api';

	export let data: PageData;

    let employees: Employee[] = data.employee;
let departments: Department[] = data.department;


	async function removeEmployee(id: number) {
		if (confirm('Are you sure you want to delete this employee?')) {
			const response = await deleteEmployee(id);
			if (response.status === 204) {
                employees = employees.filter((item) => item.id !== id);

			} else {
				console.error('Failed to delete {{classlowertext}}');
			}
		}
	}
    function getDepartmentDescription(id: number): string{
  const item = departments.find((item) => item.id === id);
  return item ? item.typeLongDescription : '';
}


</script>

<h1 class="my-6 text-center text-2xl font-bold">Employee</h1>
<div class="grid-container">
  <div class="grid-header">ID</div>
  <div class="grid-header">Department</div>
  <div class="grid-header">Actions</div>
  {#each employees as employee}
  <div class='grid-item'>{employee.id}</div>
  <div class="grid-item">{getDepartmentDescription(employee.Departmentid)}</div>
  <div class="grid-item flex items-center space-x-2">
    <a href="/employee/{employee.id}/edit" class="mr-2">
    <button class="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">Edit</button>
    </a>
    <button on:click={() => removeEmployee(employee.id)} class="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700">Delete</button>
  </div>
  {/each}
</div>
<div class="mt-4 flex justify-center">
  <a href="/employee/create" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
    Add New Employee
  </a>
</div>


<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2px;
	}

	.grid-header {
		font-weight: bold;
		background-color: lightskyblue;
		padding: 0.5rem;
		border: 1px solid #ccc;
		text-align: center;
	}

	.grid-item {
		padding: 0.5rem;
		border: 1px solid #ccc;
	}

	  .grid-item:nth-child(6n + 1),
  .grid-item:nth-child(6n + 2),
  .grid-item:nth-child(6n + 3)
   {
       background-color: grey;
    }
  .grid-item:nth-child(6n + 4),
  .grid-item:nth-child(6n + 5),
  .grid-item:nth-child(6n + 6)
   {
       background-color: white;
    }


</style>