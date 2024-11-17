<script lang="ts">
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import FormModal from '$components/FormModal.svelte';
  import { Modal, initializeStores } from '@skeletonlabs/skeleton';
  initializeStores();
  const modalRegistry = {
    formModal: { ref: FormModal }
  };
  import '../app.css';
</script>

<Modal components={modalRegistry} />
<div class="flex min-h-screen flex-col bg-black">
  <Header />

  <main class="w-screen flex-1 overflow-x-hidden p-8 pt-12">
    <slot />
  </main>

  <Footer />
</div>
