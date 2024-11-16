<script>
  let containerWidth;
  let containerHeight;
  let container;

  $: numberOfHorizontalImages = calculateNumberOfImages(containerWidth, false);
  $: numberOfVerticalImages = calculateNumberOfImages(containerHeight, true);

  function calculateNumberOfImages(size, isVertical = false) {
    if (!size) return 0;
    const singleImageWidth = 107;
    const overlap = isVertical ? 56 : 24; // 56 for vertical (-ml-14), 24 for horizontal (-ml-6)
    const effectiveWidth = singleImageWidth - overlap;
    return Math.ceil(size / effectiveWidth) - 1;
  }
</script>

<div class="w-full p-8">
  <div
    class="relative min-h-[500px] w-full overflow-hidden"
    bind:clientWidth={containerWidth}
    bind:clientHeight={containerHeight}
    bind:this={container}
  >
    <!-- Top Border -->
    <div class="absolute left-0 right-0 top-0 overflow-hidden">
      <div class="flex">
        {#each Array(numberOfHorizontalImages) as _, index}
          <div
            class="-ml-6 transition-transform first:ml-0"
            style:transform={index % 2 === 1 ? 'rotate(180deg)' : ''}
          >
            <img src="wifi-thing.svg" alt="decorative border" class="h-[88px] w-[107px]" />
          </div>
        {/each}
      </div>
    </div>

    <!-- Bottom Border -->
    <div class="absolute bottom-0 left-0 right-0 rotate-180 overflow-hidden">
      <div class="flex">
        {#each Array(numberOfHorizontalImages) as _, index}
          <div
            class="-ml-6 transition-transform first:ml-0"
            style:transform={index % 2 === 1 ? 'rotate(180deg)' : ''}
          >
            <img src="wifi-thing.svg" alt="decorative border" class="h-[88px] w-[107px]" />
          </div>
        {/each}
      </div>
    </div>

    <!-- Left Border -->
    <div class="absolute -top-9 bottom-0 left-[3.75rem] origin-top-left rotate-90 overflow-hidden">
      <div class="flex h-full">
        {#each Array(numberOfVerticalImages) as _, index}
          <div
            class="-ml-14 transition-transform first:ml-0"
            style:transform={index % 2 === 1 ? '' : ''}
          >
            <img
              src="wifi-thing.svg"
              alt="decorative border"
              class="h-[88px] w-[107px]"
              style:transform={index % 2 === 1 ? 'rotate(180deg)' : ''}
            />
          </div>
        {/each}
      </div>
    </div>

    <!-- Right Border -->
    <div
      class="absolute bottom-0 right-[3.75rem] top-5 origin-top-right -rotate-90 overflow-hidden"
    >
      <div class="flex h-full">
        {#each Array(numberOfVerticalImages) as _, index}
          <div class="-ml-14 transition-transform first:ml-0">
            <img
              src="wifi-thing.svg"
              alt="decorative border"
              class="h-[88px] w-[107px]"
              style:transform={index % 2 === 1 ? 'rotate(180deg)' : ''}
            />
          </div>
        {/each}
      </div>
    </div>

    <!-- Content Area -->
    <div
      class="relative z-10 flex h-full min-h-[500px] w-full items-center justify-center p-[176px]"
    >
      <div class="flex h-full w-full items-center justify-center rounded-lg bg-white">
        <slot>
          <p class="text-xl text-gray-800">Content goes here</p>
        </slot>
      </div>
    </div>
  </div>
</div>
