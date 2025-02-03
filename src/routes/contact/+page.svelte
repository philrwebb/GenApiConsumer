<script lang="ts">
	import type {  Contact, ContactType } from '$lib/types';
	import type { PageData } from './$types';
	import { deleteContact } from '$lib/api';

	export let data: PageData;

    let contacts: Contact[] = data.contact;
let contacttypes: ContactType[] = data.contacttype;


	async function removeContact(id: number) {
		if (confirm('Are you sure you want to delete this contact?')) {
			const response = await deleteContact(id);
			if (response.status === 204) {
                contacts = contacts.filter((item) => item.id !== id);

			} else {
				console.error('Failed to delete {{classlowertext}}');
			}
		}
	}
    function getContactTypeDescription(id: number): string{
  const item = contacttypes.find((item) => item.id === id);
  return item ? item.typeLongDescription : '';
}


</script>

<h1 class="my-6 text-center text-2xl font-bold">Contact</h1>
<div class="grid-container">
  <div class="grid-header">ID</div>
  <div class="grid-header">details</div>
  <div class="grid-header">ContactType</div>
  <div class="grid-header">Actions</div>
  {#each contacts as contact}
  <div class='grid-item'>{contact.id}</div>
  <div class="grid-item">{contact.details}</div>
  <div class="grid-item">{getContactTypeDescription(contact.ContactTypeid)}</div>
  <div class="grid-item flex items-center space-x-2">
    <a href="/contact/{contact.id}/edit" class="mr-2">
    <button class="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">Edit</button>
    </a>
    <button on:click={() => removeContact(contact.id)} class="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700">Delete</button>
  </div>
  {/each}
</div>
<div class="mt-4 flex justify-center">
  <a href="/contact/create" class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
    Add New Contact
  </a>
</div>


<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
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

	  .grid-item:nth-child(8n + 1),
  .grid-item:nth-child(8n + 2),
  .grid-item:nth-child(8n + 3),
  .grid-item:nth-child(8n + 4)
   {
       background-color: grey;
    }
  .grid-item:nth-child(8n + 5),
  .grid-item:nth-child(8n + 6),
  .grid-item:nth-child(8n + 7),
  .grid-item:nth-child(8n + 8)
   {
       background-color: white;
    }


</style>