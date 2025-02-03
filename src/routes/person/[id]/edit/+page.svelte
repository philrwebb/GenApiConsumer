<script lang="ts">
	// import { PageProps } from './../../../../../node_modules/@sveltejs/kit/src/core/sync/write_types/index.js';
	import { goto } from '$app/navigation';
	import { updatePerson } from '$lib/api';
	import type { Person, GenderType } from '$lib/types';
	// import type { PageData } from './$types';
	import type { PageProps } from './$types';
	// let data: PageData;
	let { data }: PageProps = $props();
	// let { data }: { data: PageData } = $props();

	let person: Person = data.person;
	let gendertypes: GenderType[] = data.gendertype;

	// Convert dob to YYYY-MM-DD format for date input
	// person.dob = new Date(person.dob).toISOString().split('T')[0];
	//{{converts}}

	// Save person data
	async function savePerson() {
		const response = await updatePerson(person.id, person);
		if (response.status === 200) {
			goto('/person');
		} else {
			console.error('Failed to update person');
		}
	}
</script>

<h1 class="my-6 text-center text-2xl font-bold">Edit Person</h1>
<form on:submit|preventDefault={savePerson} class="grid grid-cols-2 gap-4">
	<div class="flex items-center">
		<label for="givenNames" class="w-1/3">Given Names:</label>
		<input
			id="givenNames"
			type="text"
			bind:value={person.givenNames}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="flex items-center">
		<label for="lastName" class="w-1/3">Last Name:</label>
		<input
			id="lastName"
			type="text"
			bind:value={person.lastName}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="flex items-center">
		<label for="dob" class="w-1/3">Dob:</label>
		<input
			id="dob"
			type="datetime"
			bind:value={person.dob}
			class="w-2/3 rounded border border-gray-300 p-2"
		/>
	</div>
	<div class="flex items-center">
		<label for="GenderType" class="w-1/3"> Gender Type:</label>
		<select
			id="GenderType"
			bind:value={person.GenderTypeid}
			class="w-2/3 rounded border border-gray-300 p-2"
		>
			{#each gendertypes as item}
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
			on:click={() => goto('/person')}
			class="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">Cancel</button
		>
	</div>
</form>

<style>
</style>
