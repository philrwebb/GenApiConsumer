<script lang="ts">
	import type {  Person, GenderType } from '$lib/types';
	import type { PageData } from './$types';
	import { deletePerson } from '$lib/api';

	export let data: PageData;

    let people: Person[] = data.person;
let gendertypes: GenderType[] = data.gendertype;


	async function removePerson(id: number) {
		if (confirm('Are you sure you want to delete this person?')) {
			const response = await deletePerson(id);
			if (response.status === 204) {
                people = people.filter((item) => item.id !== id);

			} else {
				console.error('Failed to delete {{classlowertext}}');
			}
		}
	}
    function getGenderTypeDescription(id: number): string{
  const item = gendertypes.find((item) => item.id === id);
  return item ? item.typeLongDescription : '';
}


</script>

<h1 class="my-6 text-center text-2xl font-bold">Person</h1>
<div class="grid-container">
  <div class="grid-header">ID</div>
  <div class="grid-header">givenNames</div>
  <div class="grid-header">lastName</div>
  <div class="grid-header">dob</div>
  <div class="grid-header">GenderType</div>
  <div class="grid-header">Actions</div>
  {#each people as person}
  <div class='grid-item'>{person.id}</div>
  <div class="grid-item">{person.givenNames}</div>
  <div class="grid-item">{person.lastName}</div>
  <div class="grid-item">{new Date(person.dob).toLocaleDateString().slice(0,10)}</div>
  <div class="grid-item">{getGenderTypeDescription(person.GenderTypeid)}</div>
  <div class="grid-item flex items-center space-x-2">
    <a href="/person/{person.id}/edit" class="mr-2">
    <button class="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">Edit</button>
    </a>
    <button on:click={() => removePerson(person.id)} class="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700">Delete</button>
  </div>
  {/each}
</div>
<div class="mt-4 flex justify-center">
  <a href="/person/create" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
    Add New Person
  </a>
</div>


<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
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

	  .grid-item:nth-child(12n + 1),
  .grid-item:nth-child(12n + 2),
  .grid-item:nth-child(12n + 3),
  .grid-item:nth-child(12n + 4),
  .grid-item:nth-child(12n + 5),
  .grid-item:nth-child(12n + 6)
   {
       background-color: grey;
    }
  .grid-item:nth-child(12n + 7),
  .grid-item:nth-child(12n + 8),
  .grid-item:nth-child(12n + 9),
  .grid-item:nth-child(12n + 10),
  .grid-item:nth-child(12n + 11),
  .grid-item:nth-child(12n + 12)
   {
       background-color: white;
    }


</style>