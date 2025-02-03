<script lang="ts">
	import type {  AddressType } from '$lib/types';
	import type { PageData } from './$types';
	import { deleteAddressType } from '$lib/api';

	export let data: PageData;

    let addresstypes: AddressType[] = data.addresstype;


	async function removeAddressType(id: number) {
		if (confirm('Are you sure you want to delete this addresstype?')) {
			const response = await deleteAddressType(id);
			if (response.status === 204) {
                addresstypes = addresstypes.filter((item) => item.id !== id);

			} else {
				console.error('Failed to delete {{classlowertext}}');
			}
		}
	}
    

</script>

<h1 class="my-6 text-center text-2xl font-bold">AddressType</h1>
<div class="grid-container">
  <div class="grid-header">ID</div>
  <div class="grid-header">Actions</div>
  {#each addresstypes as addresstype}
  <div class='grid-item'>{addresstype.id}</div>
  <div class="grid-item flex items-center space-x-2">
    <a href="/addresstype/{addresstype.id}/edit" class="mr-2">
    <button class="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">Edit</button>
    </a>
    <button on:click={() => removeAddressType(addresstype.id)} class="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700">Delete</button>
  </div>
  {/each}
</div>
<div class="mt-4 flex justify-center">
  <a href="/addresstype/create" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
    Add New AddressType
  </a>
</div>


<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
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

	  .grid-item:nth-child(4n + 1),
  .grid-item:nth-child(4n + 2)
   {
       background-color: grey;
    }
  .grid-item:nth-child(4n + 3),
  .grid-item:nth-child(4n + 4)
   {
       background-color: white;
    }


</style>