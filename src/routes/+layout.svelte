<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		if (window.location.pathname === '/') {
			goto('/person');
		}
	});
</script>

<nav class="menu">
	<ul class="menu-list">
        <li class="menu-item">
  <a href="/person" class="menu-link">People</a>
</li>
<li class="menu-item">
  <a href="/employee" class="menu-link">Employees</a>
</li>
<li class="menu-item">
  <a href="/address" class="menu-link">Addresses</a>
</li>
<li class="menu-item">
  <a href="/contact" class="menu-link">Contacts</a>
</li>
<li class="menu-item">
  <a href="/gendertype" class="menu-link">GenderTypes</a>
</li>
<li class="menu-item">
  <a href="/addresstype" class="menu-link">AddressTypes</a>
</li>
<li class="menu-item">
  <a href="/contacttype" class="menu-link">ContactTypes</a>
</li>
<li class="menu-item">
  <a href="/department" class="menu-link">Departments</a>
</li>
<li class="menu-item">
  <a href="/account" class="menu-link">Accounts</a>
</li>

	</ul>
</nav>

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	.menu {
		background-color: #f8f9fa;
		padding: 1rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid #dee2e6;
	}

	.menu-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 1rem;
	}

	.menu-link {
		text-decoration: none;
		color: #007bff;
		font-weight: bold;
	}

	.menu-link:hover {
		text-decoration: underline;
	}
</style>
