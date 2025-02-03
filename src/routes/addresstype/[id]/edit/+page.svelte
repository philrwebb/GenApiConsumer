<script lang="ts">
	import { goto } from '$app/navigation';
	import { updateAddressType } from '$lib/api';
	import type {  AddressType } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let addresstype: AddressType = data.addresstype;


	// Convert dob to YYYY-MM-DD format for date input
	// person.dob = new Date(person.dob).toISOString().split('T')[0];
    //{{converts}}

	// Save person data
	async function saveAddressType() {
		const response = await updateAddressType(addresstype.id, addresstype);
		if (response.status === 200) {
			goto('/addresstype');
		} else {
			console.error('Failed to update addresstype');
		}
	}
</script>
<h1 class="my-6 text-center text-2xl font-bold">Edit AddressType</h1>
<form on:submit|preventDefault={saveAddressType} class="grid grid-cols-2 gap-4">
<div class="col-span-2 flex justify-between">
   <button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >Save</button
   >
   <button
      type="button"
      on:click={() => goto('/addresstype')}
      class="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">Cancel</button
   >
</div>
</form>
<style>
</style>
