<script lang="ts">
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';

	import '../app.css';
  </script>
  
  <div class="min-h-screen flex flex-col bg-black">
	<Header />
	
	<main class="flex-1 pt-4">
		<img src="favicon.png" alt="logo" class="w-20 h-20" />
	  <slot />
	</main>
	
	<Footer />
  </div>