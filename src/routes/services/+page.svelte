<script lang="ts">
  import GreenBox from '$components/GreenBox.svelte';
  import GreenSustainableBox from '$components/GreenSustainableBox.svelte';
  import WifiRow from '$components/WifiRow.svelte';
  import { isMobile } from '$lib/stores/mobile';
  import { t } from '$lib/translations';
  import Icon from '@iconify/svelte';

  let containerWidth: number;
</script>

<GreenBox hasDiamonds hasBanner class="bg-footerbg">
  <div
    class="mt-[40px] flex h-full flex-col items-center justify-between gap-y-2 text-center md:mt-[120px] md:flex-row md:items-start md:px-12 md:pb-8 md:text-start"
  >
    <div class="w-full md:w-2/3">
      <h1 class="mb-0">{$t('services.main.title.line1')}</h1>
      <h1 class="text-goblin">{$t('services.main.title.line2')}</h1>
      {#if !$isMobile}
        <p class="text-base md:text-xl">{$t('services.main.description')}</p>
      {/if}
    </div>
    <img src="sword-in-stone-stars.png" alt="Sword in stone" class="h-[248px] md:h-[470px]" />
  </div>
</GreenBox>

<GreenSustainableBox />

<!-- Services -->
<GreenBox class="flex flex-col space-y-6 bg-footerbg md:space-y-10 md:p-12">
  <!-- Consulting -->
  <div class="flex items-center">
    <div class="space-y-2">
      <h2>{$t('services.consulting.title')}</h2>
      <div class="flex items-center">
        <p class="mr-2">{$t('services.consulting.description.mobile')}</p>
        <!-- Show logo here in mobile view -->
        {#if $isMobile}
          <img src="services-consulting.png" alt="Consulting Services logo" class="h-[112px]" />
        {/if}
      </div>
    </div>
    <!-- Show logo here in desktop -->
    {#if !$isMobile}
      <img src="services-consulting.png" alt="Consulting Services logo" class="h-[254px]" />
    {/if}
  </div>

  <!-- Professional -->
  <div class="flex items-center">
    <div>
      <h2>{$t('services.professional.title')}</h2>
      <div class="flex items-center">
        <p class="mr-2">{$t('services.professional.description.mobile')}</p>
        {#if $isMobile}
          <img src="services-professional.png" alt="Professional Services logo" class="h-[112px]" />
        {/if}
      </div>
    </div>
    {#if !$isMobile}
      <img src="services-professional.png" alt="Professional Services logo" class="h-[254px]" />
    {/if}
  </div>

  <!-- Sustainable -->
  <div class="flex items-center">
    <div>
      <h2>{$t('services.sustainable.title')}</h2>
      <div class="flex items-center">
        <p class="mr-2">{$t('services.sustainable.description.mobile')}</p>
        {#if $isMobile}
          <img src="services-sustainable.png" alt="Sustainable Services logo" class="h-[112px]" />
        {/if}
      </div>
    </div>
    {#if !$isMobile}
      <img src="services-sustainable.png" alt="Sustainable Services logo" class="h-[254px]" />
    {/if}
  </div>
</GreenBox>

<div bind:clientWidth={containerWidth} class="my-2 md:my-4">
  <WifiRow {containerWidth} />
</div>

<!-- Packages -->
<GreenBox class="flex flex-col bg-fangorn text-center">
  <div class="space-y-4 md:space-y-8 md:p-4">
    <h2>{$t('services.mspTiers.title')}</h2>
    <p>{$t('services.mspTiers.subtitle')}</p>

    <!-- Mobile Layout -->
    {#if $isMobile}
      <div class="border border-solid border-sandcastle p-4">
        <h2 class="text-start">{$t('services.mspTiers.tiers.scout.name')}</h2>
        <div class="w-5/6 border-t-4 border-solid border-iceknife" />
        <div class="mt-4 flex flex-col items-center space-y-4">
          <img src="key.png" alt="Key" class="h-[112px]" />
          <p>{$t('services.mspTiers.tiers.scout.description.primary')}</p>
        </div>
      </div>
      <div class="border border-solid border-sandcastle p-4">
        <h2 class="text-start">{$t('services.mspTiers.tiers.ranger.name')}</h2>
        <div class="w-5/6 border-t-4 border-solid border-wizard" />
        <div class="mt-4 flex flex-col items-center space-y-4">
          <img src="chest.png" alt="Treasure Chest" class="h-[112px]" />
          <p>{$t('services.mspTiers.tiers.ranger.description.primary')}</p>
        </div>
      </div>
      <div class="border border-solid border-sandcastle p-4">
        <h2 class="text-start">{$t('services.mspTiers.tiers.vanguard.name')}</h2>
        <div class="w-5/6 border-t-4 border-solid border-fireball" />
        <div class="mt-4 flex flex-col items-center space-y-4">
          <img src="sword-in-stone.png" alt="Sword in Stone" class="h-[112px]" />
          <p>{$t('services.mspTiers.tiers.vanguard.description.mobile.description')}</p>
        </div>
      </div>
    {/if}

    <!-- Desktop Layout -->
    {#if !$isMobile}
      <!-- Scout -->
      <div class="flex items-center space-x-4 border border-solid border-sandcastle p-6 text-start">
        <div class="w-[236px]">
          <img src="key.png" alt="Key" />
        </div>
        <div class="space-y-4">
          <div>
            <h2 class="text-start">{$t('services.mspTiers.tiers.scout.name')}</h2>
            <!-- Divider-->
            <div class="w-1/3 border-t-4 border-solid border-iceknife" />
            <p class="leading-0 text-[12px]">{$t('services.mspTiers.tiers.scout.tagline')}</p>
          </div>
          <div class="flex space-x-6">
            <div class="w-1/2 space-y-4">
              <p>{$t('services.mspTiers.tiers.scout.description.primary')}</p>
              <p>{$t('services.mspTiers.tiers.scout.description.secondary')}</p>
            </div>
            <ul class="flex flex-col justify-between">
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-iceknife"
                />
                <p>{$t('services.mspTiers.tiers.scout.points.1')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-iceknife"
                />
                <p>{$t('services.mspTiers.tiers.scout.points.2')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-iceknife"
                />
                <p>{$t('services.mspTiers.tiers.scout.points.3')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-iceknife"
                />
                <p>{$t('services.mspTiers.tiers.scout.points.4')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-iceknife"
                />
                <p>{$t('services.mspTiers.tiers.scout.points.5')}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Ranger -->
      <div class="flex items-center space-x-4 border border-solid border-sandcastle p-6 text-start">
        <div class="w-[236px]">
          <img src="chest.png" alt="Treasure Chest" />
        </div>
        <div class="space-y-4">
          <div>
            <h2 class="text-start">{$t('services.mspTiers.tiers.ranger.name')}</h2>
            <!-- Divider-->
            <div class="w-1/3 border-t-4 border-solid border-wizard" />
            <p class="leading-0 text-[12px]">{$t('services.mspTiers.tiers.ranger.tagline')}</p>
          </div>
          <div class="flex space-x-6">
            <div class="w-1/2 space-y-4">
              <p>{$t('services.mspTiers.tiers.ranger.description.primary')}</p>
              <p>{$t('services.mspTiers.tiers.ranger.description.secondary')}</p>
            </div>
            <ul class="flex flex-col justify-between">
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-wizard"
                />
                <p>{$t('services.mspTiers.tiers.ranger.points.1')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-wizard"
                />
                <p>{$t('services.mspTiers.tiers.ranger.points.2')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-wizard"
                />
                <p>{$t('services.mspTiers.tiers.ranger.points.3')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-wizard"
                />
                <p>{$t('services.mspTiers.tiers.ranger.points.4')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-wizard"
                />
                <p>{$t('services.mspTiers.tiers.ranger.points.5')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-wizard"
                />
                <p>{$t('services.mspTiers.tiers.ranger.points.6')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-wizard"
                />
                <p>{$t('services.mspTiers.tiers.ranger.points.7')}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Vanguard -->
      <div class="flex items-center space-x-4 border border-solid border-sandcastle p-6 text-start">
        <div class="w-[236px]">
          <img src="sword-in-stone.png" alt="Sword In Stone" />
        </div>
        <div class="space-y-4">
          <div>
            <h2 class="text-start">{$t('services.mspTiers.tiers.vanguard.name')}</h2>
            <!-- Divider-->
            <div class="w-1/3 border-t-4 border-solid border-fireball" />
            <p class="leading-0 text-[12px]">{$t('services.mspTiers.tiers.vanguard.tagline')}</p>
          </div>
          <div class="flex space-x-6">
            <div class="w-1/2 space-y-4">
              <p>{$t('services.mspTiers.tiers.vanguard.description.primary')}</p>
              <p>{$t('services.mspTiers.tiers.vanguard.description.secondary')}</p>
            </div>
            <ul class="flex flex-col justify-between">
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-fireball"
                />
                <p>{$t('services.mspTiers.tiers.vanguard.points.1')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-fireball"
                />
                <p>{$t('services.mspTiers.tiers.vanguard.points.2')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-fireball"
                />
                <p>{$t('services.mspTiers.tiers.vanguard.points.3')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-fireball"
                />
                <p>{$t('services.mspTiers.tiers.vanguard.points.4')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-fireball"
                />
                <p>{$t('services.mspTiers.tiers.vanguard.points.5')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-fireball"
                />
                <p>{$t('services.mspTiers.tiers.vanguard.points.6')}</p>
              </li>
              <li class="flex space-x-2">
                <Icon
                  icon="fluent:diamond-20-filled"
                  width={20}
                  class="relative top-1 flex-shrink-0 text-fireball"
                />
                <p>{$t('services.mspTiers.tiers.vanguard.points.7')}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    {/if}
  </div>
</GreenBox>
