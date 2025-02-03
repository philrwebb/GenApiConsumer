<script lang="ts">
	import { goto } from '$app/navigation';
	import { updateContactType } from '$lib/api';
	import type { ContactType } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let contacttype: ContactType = data.contacttype;

	// Convert dob to YYYY-MM-DD format for date input
	// person.dob = new Date(person.dob).toISOString().split('T')[0];
	//{{converts}}

	// Save person data
	async function saveContactType() {
		const response = await updateContactType(contacttype.id, contacttype);
		if (response.status === 200) {
			goto('/contacttype');
		} else {
			console.error('Failed to update contacttype');
		}
	}
</script>

<h1 class="my-6 text-center text-2xl font-bold">Edit ContactType</h1>
<form on:submit|preventDefault={saveContactType} class="grid grid-cols-2 gap-4">
	<div class="flex items-center">
		<label for="effFrom" class="w-1/3">Eff From:</label>
		<input
			id="effFrom"
			type="datetime"
			bind:value={contacttype.effFrom}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="flex items-center">
		<label for="effTo" class="w-1/3">Eff To:</label>
		<input
			id="effTo"
			type="datetime"
			bind:value={contacttype.effTo}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="flex items-center">
		<label for="typeShortDescription" class="w-1/3">Type Short Description:</label>
		<input
			id="typeShortDescription"
			type="text"
			bind:value={contacttype.typeShortDescription}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="flex items-center">
		<label for="typeLongDescription" class="w-1/3">Type Long Description:</label>
		<input
			id="typeLongDescription"
			type="text"
			bind:value={contacttype.typeLongDescription}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="flex items-center">
		<label for="code" class="w-1/3">Code:</label>
		<input
			id="code"
			type="text"
			bind:value={contacttype.code}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="col-span-2 flex justify-between">
		<button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
			>Save</button
		>
		<button
			type="button"
			on:click={() => goto('/contacttype')}
			class="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">Cancel</button
		>
	</div>
</form>

<style>
</style>
