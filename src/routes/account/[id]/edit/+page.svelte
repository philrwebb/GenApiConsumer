<script lang="ts">
	import { goto } from '$app/navigation';
	import { updateAccount } from '$lib/api';
	import type {  Account, Person } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let account: Account = data.account;
let people: Person[] = data.person;


	// Convert dob to YYYY-MM-DD format for date input
	// person.dob = new Date(person.dob).toISOString().split('T')[0];
    //{{converts}}

	// Save person data
	async function saveAccount() {
		const response = await updateAccount(account.id, account);
		if (response.status === 200) {
			goto('/account');
		} else {
			console.error('Failed to update account');
		}
	}
</script>
<h1 class="my-6 text-center text-2xl font-bold">Edit Account</h1>
<form on:submit|preventDefault={saveAccount} class="grid grid-cols-2 gap-4">
   <div class="flex items-center">
      <label for="Person" class="w-1/3"> Person:</label>
      <select
         id="Person"
         bind:value={account.Personid}
         class="w-2/3 rounded border border-gray-300 p-2"
      >
         {#each People as item}
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
      on:click={() => goto('/account')}
      class="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">Cancel</button
   >
</div>
</form>
<style>
</style>
