<script lang="ts">
	import type {  Address, AddressType } from '$lib/types';
	import type { PageData } from './$types';
	import { deleteAddress } from '$lib/api';

	export let data: PageData;

    let addresses: Address[] = data.address;
let addresstypes: AddressType[] = data.addresstype;


	async function removeAddress(id: number) {
		if (confirm('Are you sure you want to delete this address?')) {
			const response = await deleteAddress(id);
			if (response.status === 204) {
                addresses = addresses.filter((item) => item.id !== id);

			} else {
				console.error('Failed to delete {{classlowertext}}');
			}
		}
	}
    function getAddressTypeDescription(id: number): string{
  const item = addresstypes.find((item) => item.id === id);
  return item ? item.typeLongDescription : '';
}


</script>

<h1 class="my-6 text-center text-2xl font-bold">Address</h1>
<div class="grid-container">
  <div class="grid-header">ID</div>
  <div class="grid-header">addressLine1</div>
  <div class="grid-header">addressLine2</div>
  <div class="grid-header">addressLine3</div>
  <div class="grid-header">suburb</div>
  <div class="grid-header">postcode</div>
  <div class="grid-header">state</div>
  <div class="grid-header">AddressType</div>
  <div class="grid-header">Actions</div>
  {#each addresses as address}
  <div class='grid-item'>{address.id}</div>
  <div class="grid-item">{address.addressLine1}</div>
  <div class="grid-item">{address.addressLine2}</div>
  <div class="grid-item">{address.addressLine3}</div>
  <div class="grid-item">{address.suburb}</div>
  <div class="grid-item">{address.postcode}</div>
  <div class="grid-item">{address.state}</div>
  <div class="grid-item">{getAddressTypeDescription(address.AddressTypeid)}</div>
  <div class="grid-item flex items-center space-x-2">
    <a href="/address/{address.id}/edit" class="mr-2">
    <button class="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">Edit</button>
    </a>
    <button on:click={() => removeAddress(address.id)} class="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700">Delete</button>
  </div>
  {/each}
</div>
<div class="mt-4 flex justify-center">
  <a href="/address/create" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
    Add New Address
  </a>
</div>


<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		gap: 2px;
	}

	.grid-header {
		font-weight: bold;
		background-color: lightskyblue;
		padding: 0.5rem;
		border: 1px solid #ccc;
		text-align: center;
	}

	.grid-item {
		padding: 0.5rem;
		border: 1px solid #ccc;
	}

	  .grid-item:nth-child(18n + 1),
  .grid-item:nth-child(18n + 2),
  .grid-item:nth-child(18n + 3),
  .grid-item:nth-child(18n + 4),
  .grid-item:nth-child(18n + 5),
  .grid-item:nth-child(18n + 6),
  .grid-item:nth-child(18n + 7),
  .grid-item:nth-child(18n + 8),
  .grid-item:nth-child(18n + 9)
   {
       background-color: grey;
    }
  .grid-item:nth-child(18n + 10),
  .grid-item:nth-child(18n + 11),
  .grid-item:nth-child(18n + 12),
  .grid-item:nth-child(18n + 13),
  .grid-item:nth-child(18n + 14),
  .grid-item:nth-child(18n + 15),
  .grid-item:nth-child(18n + 16),
  .grid-item:nth-child(18n + 17),
  .grid-item:nth-child(18n + 18)
   {
       background-color: white;
    }


</style>