<script lang="ts">
  // Define allowed HTML button types
  export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
  // Allow onClick handler
  export let onClick = () => {};
  // Add style prop
  let classes = '';
  export { classes as class };

  // Combine default classes with any additional styles
  const baseClasses =
    'bg-black rounded-full border-[3px] border-goblin px-4 py-2 text-sm text-sandcastle transition-all duration-200 hover:border-green-600 hover:text-green-400';
  $: combinedClasses = classes ? `${baseClasses} ${classes}` : baseClasses;
</script>

<button {type} on:click={onClick} class={combinedClasses}>
  <slot></slot>
</button>
