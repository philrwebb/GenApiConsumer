<script lang="ts">
	import type {  GenderType } from '$lib/types';
	import type { PageData } from './$types';
	import { deleteGenderType } from '$lib/api';

	export let data: PageData;

    let gendertypes: GenderType[] = data.gendertype;


	async function removeGenderType(id: number) {
		if (confirm('Are you sure you want to delete this gendertype?')) {
			const response = await deleteGenderType(id);
			if (response.status === 204) {
                gendertypes = gendertypes.filter((item) => item.id !== id);

			} else {
				console.error('Failed to delete {{classlowertext}}');
			}
		}
	}
    

</script>

<h1 class="my-6 text-center text-2xl font-bold">GenderType</h1>
<div class="grid-container">
  <div class="grid-header">ID</div>
  <div class="grid-header">Actions</div>
  {#each gendertypes as gendertype}
  <div class='grid-item'>{gendertype.id}</div>
  <div class="grid-item flex items-center space-x-2">
    <a href="/gendertype/{gendertype.id}/edit" class="mr-2">
    <button class="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">Edit</button>
    </a>
    <button on:click={() => removeGenderType(gendertype.id)} class="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700">Delete</button>
  </div>
  {/each}
</div>
<div class="mt-4 flex justify-center">
  <a href="/gendertype/create" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
    Add New GenderType
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