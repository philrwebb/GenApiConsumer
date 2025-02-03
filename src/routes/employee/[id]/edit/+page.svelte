<script lang="ts">
	import { goto } from '$app/navigation';
	import { updateEmployee } from '$lib/api';
	import type {  Employee, Department } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let employee: Employee = data.employee;
let departments: Department[] = data.department;


	// Convert dob to YYYY-MM-DD format for date input
	// person.dob = new Date(person.dob).toISOString().split('T')[0];
    //{{converts}}

	// Save person data
	async function saveEmployee() {
		const response = await updateEmployee(employee.id, employee);
		if (response.status === 200) {
			goto('/employee');
		} else {
			console.error('Failed to update employee');
		}
	}
</script>
<h1 class="my-6 text-center text-2xl font-bold">Edit Employee</h1>
<form on:submit|preventDefault={saveEmployee} class="grid grid-cols-2 gap-4">
   <div class="flex items-center">
      <label for="Department" class="w-1/3"> Department:</label>
      <select
         id="Department"
         bind:value={employee.Departmentid}
         class="w-2/3 rounded border border-gray-300 p-2"
      >
         {#each departments as item}
            <option value={item.id}>{item.typeLongDescription}</option>
         {/each}
      </select>
   </div>
<div class="col-span-2 flex justify-between">
   <button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >Save</button
   >
   <button
      type="button"
      on:click={() => goto('/employee')}
      class="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">Cancel</button
   >
</div>
</form>
<style>
</style>
