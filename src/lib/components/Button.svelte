<script lang="ts">
  // Define allowed HTML button types
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled = false;
  // Allow external class additions
  let classes = '';
  export { classes as class };

  // Base classes for the button
  const baseClasses =
    'bg-black rounded-full border-[3px] border-goblin px-4 py-2 text-sm text-sandcastle transition-all duration-200 hover:border-green-600 hover:text-green-400 font-lowdrag text-base';

  $: combinedClasses = classes ? `${baseClasses} ${classes}` : baseClasses;
</script>

<button {type} class={combinedClasses} on:click {disabled}>
  <slot></slot>
</button>
