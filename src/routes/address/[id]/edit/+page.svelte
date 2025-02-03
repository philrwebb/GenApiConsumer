<script lang="ts">
	import { goto } from '$app/navigation';
	import { updateAddress } from '$lib/api';
	import type {  Address, AddressType } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let address: Address = data.address;
let addresstypes: AddressType[] = data.addresstype;


	// Convert dob to YYYY-MM-DD format for date input
	// person.dob = new Date(person.dob).toISOString().split('T')[0];
    //{{converts}}

	// Save person data
	async function saveAddress() {
		const response = await updateAddress(address.id, address);
		if (response.status === 200) {
			goto('/address');
		} else {
			console.error('Failed to update address');
		}
	}
</script>
<h1 class="my-6 text-center text-2xl font-bold">Edit Address</h1>
<form on:submit|preventDefault={saveAddress} class="grid grid-cols-2 gap-4">
   <div class="flex items-center">
      <label for=addressLine1 class="w-1/3">Address Line1:</label>
      <input id=addressLine1 type=text bind:value={address.addressLine1} class="w-2/3 rounded border border-gray-300 p-2"/>
   </div>
   <div class="flex items-center">
      <label for=addressLine2 class="w-1/3">Address Line2:</label>
      <input id=addressLine2 type=text bind:value={address.addressLine2} class="w-2/3 rounded border border-gray-300 p-2"/>
   </div>
   <div class="flex items-center">
      <label for=addressLine3 class="w-1/3">Address Line3:</label>
      <input id=addressLine3 type=text bind:value={address.addressLine3} class="w-2/3 rounded border border-gray-300 p-2"/>
   </div>
   <div class="flex items-center">
      <label for=suburb class="w-1/3">Suburb:</label>
      <input id=suburb type=text bind:value={address.suburb} class="w-2/3 rounded border border-gray-300 p-2"/>
   </div>
   <div class="flex items-center">
      <label for=postcode class="w-1/3">Postcode:</label>
      <input id=postcode type=text bind:value={address.postcode} class="w-2/3 rounded border border-gray-300 p-2"/>
   </div>
   <div class="flex items-center">
      <label for=state class="w-1/3">State:</label>
      <input id=state type=text bind:value={address.state} class="w-2/3 rounded border border-gray-300 p-2"/>
   </div>
   <div class="flex items-center">
      <label for="AddressType" class="w-1/3"> Address Type:</label>
      <select
         id="AddressType"
         bind:value={address.AddressTypeid}
         class="w-2/3 rounded border border-gray-300 p-2"
      >
         {#each addresstypes as item}
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
      on:click={() => goto('/address')}
      class="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700">Cancel</button
   >
</div>
</form>
<style>
</style>
