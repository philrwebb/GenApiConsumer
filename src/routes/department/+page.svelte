<script lang="ts">
	import type {  Department } from '$lib/types';
	import type { PageData } from './$types';
	import { deleteDepartment } from '$lib/api';

	export let data: PageData;

    let departments: Department[] = data.department;


	async function removeDepartment(id: number) {
		if (confirm('Are you sure you want to delete this department?')) {
			const response = await deleteDepartment(id);
			if (response.status === 204) {
                departments = departments.filter((item) => item.id !== id);

			} else {
				console.error('Failed to delete {{classlowertext}}');
			}
		}
	}
    

</script>

<h1 class="my-6 text-center text-2xl font-bold">Department</h1>
<div class="grid-container">
  <div class="grid-header">ID</div>
  <div class="grid-header">departmentName</div>
  <div class="grid-header">Actions</div>
  {#each departments as department}
  <div class='grid-item'>{department.id}</div>
  <div class="grid-item">{department.departmentName}</div>
  <div class="grid-item flex items-center space-x-2">
    <a href="/department/{department.id}/edit" class="mr-2">
    <button class="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">Edit</button>
    </a>
    <button on:click={() => removeDepartment(department.id)} class="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700">Delete</button>
  </div>
  {/each}
</div>
<div class="mt-4 flex justify-center">
  <a href="/department/create" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
    Add New Department
  </a>
</div>


<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
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

	  .grid-item:nth-child(6n + 1),
  .grid-item:nth-child(6n + 2),
  .grid-item:nth-child(6n + 3)
   {
       background-color: grey;
    }
  .grid-item:nth-child(6n + 4),
  .grid-item:nth-child(6n + 5),
  .grid-item:nth-child(6n + 6)
   {
       background-color: white;
    }


</style>