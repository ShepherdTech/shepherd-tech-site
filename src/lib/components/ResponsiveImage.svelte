<script>
  export let src;
  export let alt;
  let className = ''; // Prop to accept additional classes
  export { className as class }; // Export as 'class' prop
  export let showOnMobile = true;
  import { isMobile } from '$lib/stores/mobile';
</script>

{#if showOnMobile ? $isMobile : !$isMobile}
  <img {src} {alt} class={className} />
{/if}
