<script lang="ts">
	import { goto } from '$app/navigation';
	import { updateContact } from '$lib/api';
	import type {  Contact, ContactType } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let contact: Contact = data.contact;
let contacttypes: ContactType[] = data.contacttype;


	// Convert dob to YYYY-MM-DD format for date input
	// person.dob = new Date(person.dob).toISOString().split('T')[0];
    //{{converts}}

	// Save person data
	async function saveContact() {
		const response = await updateContact(contact.id, contact);
		if (response.status === 200) {
			goto('/contact');
		} else {
			console.error('Failed to update contact');
		}
	}
</script>
<h1 class="my-6 text-center text-2xl font-bold">Edit Contact</h1>
<form on:submit|preventDefault={saveContact} class="grid grid-cols-2 gap-4">
   <div class="flex items-center">
      <label for=details class="w-1/3">Details:</label>
      <input id=details type=text bind:value={contact.details} class="w-2/3 rounded border border-gray-300 p-2"/>
   </div>
   <div class="flex items-center">
      <label for="ContactType" class="w-1/3"> Contact Type:</label>
      <select
         id="ContactType"
         bind:value={contact.ContactTypeid}
         class="w-2/3 rounded border border-gray-300 p-2"
      >
         {#each contacttypes as item}
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
      on:click={() => goto('/contact')}
      class="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">Cancel</button
   >
</div>
</form>
<style>
</style>
