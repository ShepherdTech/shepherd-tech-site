<script lang="ts">
	// Define allowed HTML button types
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	// Allow onClick handler
	export let onClick = () => {};
	// Add style prop
	export let style: string = '';

	// Combine default classes with any additional styles
	const baseClasses =
		'bg-black rounded-full border-[3px] border-goblin px-4 py-2 text-sm text-sandcastle transition-all duration-200 hover:border-green-600 hover:text-green-400 font-lowdrag text-base';
	$: combinedClasses = style ? `${baseClasses} ${style}` : baseClasses;
</script>

<button {type} on:click={onClick} class={combinedClasses}>
	<slot></slot>
</button>
