<script>
  import { isMobile } from '$lib/stores/mobile';
  let className = ''; // Prop to accept additional classes
  export { className as class }; // Export as 'class' prop
  export let containerWidth;

  $: numberOfHorizontalImages = calculateNumberOfImages(containerWidth, false, $isMobile);
  // $: numberOfVerticalImages = calculateNumberOfImages(containerHeight, true);

  /**
   * @param {number} size
   */
  function calculateNumberOfImages(size, isVertical = false, isMobile) {
    if (!size) return 0;

    if (!isMobile) {
      const singleImageWidth = 80;
      const overlap = isVertical ? 1 : 24; // 56 for vertical (-ml-14), 24 for horizontal (-ml-6)
      const effectiveWidth = singleImageWidth - overlap;
      return Math.ceil(size / effectiveWidth) - 1;
    }

    const singleImageWidth = 48;
    const overlap = isVertical ? 1 : 18; // 56 for vertical (-ml-14), 24 for horizontal (-ml-6)
    const effectiveWidth = singleImageWidth - overlap;
    return Math.ceil(size / effectiveWidth) - 1;
  }
</script>

<div class="overflow-hidden {className}">
  <div class="flex">
    {#each Array(numberOfHorizontalImages) as _, index}
      <div
        class="-ml-2 transition-transform first:ml-0 md:-ml-6"
        style:transform={index % 2 === 1 ? 'rotate(180deg)' : ''}
      >
        <img
          src="wifi-thing.svg"
          alt="decorative border"
          class="h-[2rem] w-[3rem] md:h-[4rem] md:w-[5rem]"
        />
      </div>
    {/each}
  </div>
</div>
