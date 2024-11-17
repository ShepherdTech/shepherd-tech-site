<script>
  import WifiRow from './WifiRow.svelte';

  /**
   * @type {number}
   */
  let containerWidth;
</script>

<div class="w-full py-2 md:py-8">
  <div class="relative min-h-[500px] w-full overflow-hidden" bind:clientWidth={containerWidth}>
    <!-- Top Border -->
    <WifiRow class="absolute left-0 right-0 top-0 overflow-hidden" {containerWidth} />

    <!-- Bottom Border -->
    <WifiRow class="absolute bottom-0 left-0 right-0 rotate-180 overflow-hidden" {containerWidth} />

    <!-- Left Border -->
    <!-- <div class="absolute -top-9 bottom-0 left-[3.75rem] origin-top-left rotate-90 overflow-hidden">
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
    </div> -->

    <!-- Right Border -->
    <!-- <div
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
    </div> -->

    <!-- Content Area -->
    <div
      class="relative z-10 flex h-full min-h-[500px] w-full items-center justify-center p-[84px] md:p-[84px] lg:p-[100px] xl:p-[176px]"
    >
      <div class="flex h-full w-full items-center justify-center rounded-lg">
        <slot />
      </div>
    </div>
  </div>
</div>
