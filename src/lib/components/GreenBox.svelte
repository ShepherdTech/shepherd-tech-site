<script lang="ts">
  let className = ''; // Prop to accept additional classes
  export { className as class }; // Export as 'class' prop
  let hasDiamonds = false;
  export { hasDiamonds }; // Export as 'hasDiamonds' prop
  let hasBanner = false;
  export { hasBanner }; // Export as 'hasBanner' prop
</script>

<div class="relative text-sandcastle bg-fangorn">
  <!-- Main container with thick border -->
  <div
    class="relative h-auto w-full border-4 border-shire p-4 {className} {hasBanner
      ? 'pt-0'
      : 'md:pt-10'}"
  >
    {#if hasDiamonds}
      <!-- Top left circle and connector - hidden on mobile, visible from lg up -->
      <div class="absolute -left-12 -top-12 overflow-hidden">
        <div class="relative z-10 flex h-24 w-24 items-center justify-center">
          <!-- Full circle black background -->
          <div class="absolute inset-0 rounded-full bg-black" />
          <!-- Quarter circle border with clipping -->
          <div
            class="absolute inset-0 rounded-full border-4 border-shire border-l-transparent border-t-transparent"
            style="clip-path: polygon(50% 50%, 100% 45%, 100% 100%, 45% 100%)"
          />
          <img src="diamond.svg" alt="Diamonds" class="relative z-20 h-6 w-6" />
        </div>
      </div>

      <!-- Top right circle and connector - hidden on mobile, visible from lg up -->
      <div class="absolute -right-12 -top-12 overflow-hidden">
        <div class="relative z-10 flex h-24 w-24 items-center justify-center">
          <!-- Full circle black background -->
          <div class="absolute inset-0 rounded-full bg-black" />
          <!-- Quarter circle border with clipping -->
          <div
            class="absolute inset-0 rounded-full border-4 border-shire border-r-transparent border-t-transparent"
            style="clip-path: polygon(0 45%, 50% 50%, 55% 100%, 0 100%)"
          />
          <img src="diamond.svg" alt="Diamonds" class="relative z-20 h-6 w-6" />
        </div>
      </div>
    {/if}
    {#if hasBanner}
      <div class="flex flex-col items-center">
        <!-- MMX Circle - hidden on mobile, visible from lg up -->
        <div class="absolute top-[-70px] z-10 hidden -translate-x-64 lg:block">
          <div class="relative flex h-32 w-32 items-center justify-center font-bold text-shire">
            <!-- Black background -->
            <div class="absolute inset-0 rounded-full bg-black" />
            <!-- Bottom half border -->
            <div
              class="absolute inset-0 rounded-full border-4 border-shire border-t-transparent"
              style="clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%)"
            />
            <span class="relative" style="transform: translateY(20px);">MMX</span>
          </div>
        </div>
        <!-- XIV Circle - hidden on mobile, visible from lg up -->
        <div class="absolute top-[-70px] z-10 hidden translate-x-64 lg:block">
          <div class="relative flex h-32 w-32 items-center justify-center font-bold text-shire">
            <!-- Black background -->
            <div class="absolute inset-0 rounded-full bg-black" />
            <!-- Bottom half border -->
            <div
              class="absolute inset-0 rounded-full border-4 border-shire border-t-transparent"
              style="clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%)"
            />
            <span class="relative" style="transform: translateY(20px);">XIV</span>
          </div>
        </div>
        <img src="Flag_Light_sm.png" alt="Banner" class="absolute top-[-25px] h-36 w-32" />
        <img src="flag1.png" alt="Banner" class="absolute top-[24px] h-12 w-12 -translate-x-32" />
        <img src="flag2.png" alt="Banner" class="absolute top-[24.1px] h-12 w-12 translate-x-32" />
        <div class="mt-2 h-1 w-full bg-shire"></div>
        <div class="mt-2 h-1 w-[80%] bg-shire"></div>
      </div>
    {/if}
    <slot></slot>
  </div>
</div>
