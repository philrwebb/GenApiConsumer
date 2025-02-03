<script lang="ts">
	import { goto } from '$app/navigation';
	import { updateDepartment } from '$lib/api';
	import type {  Department } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let department: Department = data.department;


	// Convert dob to YYYY-MM-DD format for date input
	// person.dob = new Date(person.dob).toISOString().split('T')[0];
    //{{converts}}

	// Save person data
	async function saveDepartment() {
		const response = await updateDepartment(department.id, department);
		if (response.status === 200) {
			goto('/department');
		} else {
			console.error('Failed to update department');
		}
	}
</script>
<h1 class="my-6 text-center text-2xl font-bold">Edit Department</h1>
<form on:submit|preventDefault={saveDepartment} class="grid grid-cols-2 gap-4">
   <div class="flex items-center">
      <label for=departmentName class="w-1/3">Department Name:</label>
      <input id=departmentName type=text bind:value={department.departmentName} class="w-2/3 rounded border border-gray-300 p-2"/>
   </div>
<div class="col-span-2 flex justify-between">
   <button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >Save</button
   >
   <button
      type="button"
      on:click={() => goto('/department')}
      class="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">Cancel</button
   >
</div>
</form>
<style>
</style>
