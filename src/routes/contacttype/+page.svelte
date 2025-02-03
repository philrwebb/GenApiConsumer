<script lang="ts">
	import type {  ContactType } from '$lib/types';
	import type { PageData } from './$types';
	import { deleteContactType } from '$lib/api';

	export let data: PageData;

    let contacttypes: ContactType[] = data.contacttype;


	async function removeContactType(id: number) {
		if (confirm('Are you sure you want to delete this contacttype?')) {
			const response = await deleteContactType(id);
			if (response.status === 204) {
                contacttypes = contacttypes.filter((item) => item.id !== id);

			} else {
				console.error('Failed to delete {{classlowertext}}');
			}
		}
	}
    

</script>

<h1 class="my-6 text-center text-2xl font-bold">ContactType</h1>
<div class="grid-container">
  <div class="grid-header">ID</div>
  <div class="grid-header">Actions</div>
  {#each contacttypes as contacttype}
  <div class='grid-item'>{contacttype.id}</div>
  <div class="grid-item flex items-center space-x-2">
    <a href="/contacttype/{contacttype.id}/edit" class="mr-2">
    <button class="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">Edit</button>
    </a>
    <button on:click={() => removeContactType(contacttype.id)} class="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700">Delete</button>
  </div>
  {/each}
</div>
<div class="mt-4 flex justify-center">
  <a href="/contacttype/create" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
    Add New ContactType
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