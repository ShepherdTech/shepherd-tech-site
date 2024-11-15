<script lang="ts">
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';

  import '../app.css';
</script>

<div class="flex min-h-screen flex-col bg-black">
  <Header />

  <main class="w-screen flex-1 overflow-x-hidden p-8 pt-12">
    <slot />
  </main>

  <Footer />
</div>
