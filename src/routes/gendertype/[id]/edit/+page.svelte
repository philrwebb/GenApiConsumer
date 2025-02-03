<script lang="ts">
	import { goto } from '$app/navigation';
	import { updateGenderType } from '$lib/api';
	import type {  GenderType } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let gendertype: GenderType = data.gendertype;


	// Convert dob to YYYY-MM-DD format for date input
	// person.dob = new Date(person.dob).toISOString().split('T')[0];
    //{{converts}}

	// Save person data
	async function saveGenderType() {
		const response = await updateGenderType(gendertype.id, gendertype);
		if (response.status === 200) {
			goto('/gendertype');
		} else {
			console.error('Failed to update gendertype');
		}
	}
</script>
<h1 class="my-6 text-center text-2xl font-bold">Edit GenderType</h1>
<form on:submit|preventDefault={saveGenderType} class="grid grid-cols-2 gap-4">
<div class="col-span-2 flex justify-between">
   <button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >Save</button
   >
   <button
      type="button"
      on:click={() => goto('/gendertype')}
      class="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">Cancel</button
   >
</div>
</form>
<style>
</style>
