<script lang="ts">
	import { goto } from '$app/navigation';
	import { createGenderType } from '$lib/api';
	import type { GenderType } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let gendertype: Partial<GenderType> = {
		typeLongDescription: '',
		typeShortDescription: '',
		code: '',
		effFrom: '',
		effTo: '',
		active: true
	};

	// Save gender type data
	async function saveGenderType() {
		const response = await createGenderType(gendertype);
		if (response.status === 201) {
			goto('/gendertype');
		} else {
			console.error('Failed to create gender type');
		}
	}
</script>

<h1 class="my-6 text-center text-2xl font-bold">Create Gender Type</h1>
<form on:submit|preventDefault={saveGenderType} class="grid grid-cols-2 gap-4">
	<div class="flex items-center">
		<label for="typeLongDescription" class="w-1/3">Long Description:</label>
		<input
			id="typeLongDescription"
			type="text"
			bind:value={gendertype.typeLongDescription}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="flex items-center">
		<label for="typeShortDescription" class="w-1/3">Short Description:</label>
		<input
			id="typeShortDescription"
			type="text"
			bind:value={gendertype.typeShortDescription}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="flex items-center">
		<label for="code" class="w-1/3">Code:</label>
		<input
			id="code"
			type="text"
			bind:value={gendertype.code}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="flex items-center">
		<label for="effFrom" class="w-1/3">Effective From:</label>
		<input
			id="effFrom"
			type="date"
			bind:value={gendertype.effFrom}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="flex items-center">
		<label for="effTo" class="w-1/3">Effective To:</label>
		<input
			id="effTo"
			type="date"
			bind:value={gendertype.effTo}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
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
