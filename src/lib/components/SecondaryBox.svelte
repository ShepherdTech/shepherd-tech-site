<script lang="ts">
	// Add style prop
	export let style: string = '';

	// Combine default classes with any additional styles
	const baseClasses =
		'bg-shire h-full text-sandcastle mx-8';
	$: combinedClasses = style ? `${baseClasses} ${style}` : baseClasses;
</script>

<div class={combinedClasses}>
  <div class="outline outline-4 outline-black outline-offset-[-10px] p-4">
    <slot></slot>
  </div>
</div>
