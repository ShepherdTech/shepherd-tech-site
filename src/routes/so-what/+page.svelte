<script>
  import Button from '$components/Button.svelte';
  import GreenBox from '$components/GreenBox.svelte';
  import SecondaryBox from '$components/SecondaryBox.svelte';
  import { t } from '$lib/translations';
  import { deviceTranslationKey } from '$lib/stores/mobile';
  import { getModalStore } from '@skeletonlabs/skeleton';
  import Flag from '$components/Flag.svelte';
  import Ribbon from '$components/Ribbon.svelte';
  import ResponsiveImage from '$components/ResponsiveImage.svelte';
  const modalStore = getModalStore();
</script>

<div class="space-y-4 md:space-y-8">
  <GreenBox hasDiamonds hasBanner>
    <div
      class="mt-[100px] flex h-full flex-col items-center justify-between gap-y-6 p-4 text-center md:flex-row md:px-12 md:pb-8 md:text-start"
    >
      <div class="w-full md:w-2/3">
        <h1 class="mb-0">{$t('so_what.main.title.line1')}</h1>
        <h1 class="text-goblin">{$t('so_what.main.title.line2')}</h1>
        <p class="text-base md:text-xl">{$t('so_what.main.description')}</p>
      </div>
      <img src="fortune-teller.png" alt="fortune teller" class="w-2/3 md:w-1/3" />
    </div>
  </GreenBox>

  <!-- How does this help your adventure -->
  <GreenBox class="min-h-[900px] md:min-h-[400px]">
    <div class="flex flex-col gap-y-8 md:gap-x-6 md:px-8">
      <Ribbon title={$t('so_what.benefits.title')} />
      <div
        class="flex flex-col items-center gap-y-8 md:flex-row md:items-start md:justify-around md:gap-x-8 lg:gap-x-14"
      >
        <Flag class="relative md:-top-10">
          <h3>{$t('so_what.benefits.items.costs.title')}</h3>
          <p>{$t(`so_what.benefits.items.costs.description.${$deviceTranslationKey}`)}</p>
        </Flag>
        <Flag class="mt-0 md:mt-[100px]">
          <h3>{$t('so_what.benefits.items.scalability.title')}</h3>
          <p>{$t(`so_what.benefits.items.scalability.description.${$deviceTranslationKey}`)}</p>
        </Flag>
        <Flag class="relative md:-top-10">
          <h3>{$t('so_what.benefits.items.performance.title')}</h3>
          <p>{$t(`so_what.benefits.items.performance.description.${$deviceTranslationKey}`)}</p>
        </Flag>
      </div>
    </div>
  </GreenBox>

  <!-- What do you need to know for your journey -->
  <GreenBox>
    <div class="flex flex-col gap-y-6 md:flex-row md:gap-x-6 md:p-8">
      <div class="flex w-full flex-col md:w-1/2">
        <h1 class="font-lowdrag">{$t('so_what.sustainability.title')}</h1>
        <ResponsiveImage
          src="backpack.png"
          alt="backpack"
          class="w-[40vw] min-w-[24px] self-center md:max-w-[434px] md:self-end"
          showOnMobile={false}
        />
      </div>
      <div class="flex w-full flex-col md:w-1/2">
        <ul class="flex flex-col gap-y-6 md:gap-y-8">
          <li class="flex items-center gap-x-4">
            <img src="checkmark.svg" alt="checkmark" class="h-12 md:h-16" />
            <div class="flex flex-col">
              <h3 class="text-lg md:text-xl">
                {$t('so_what.sustainability.keyPoints.eWaste.title')}
              </h3>
              <p>
                {$t(`so_what.sustainability.keyPoints.eWaste.description.${$deviceTranslationKey}`)}
              </p>
            </div>
          </li>
          <li class="flex items-center gap-x-4">
            <img src="checkmark.svg" alt="checkmark" class="h-12 md:h-16" />
            <div class="flex flex-col">
              <h3 class="text-lg md:text-xl">
                {$t('so_what.sustainability.keyPoints.carbonFootprint.title')}
              </h3>
              <p>
                {$t(
                  `so_what.sustainability.keyPoints.carbonFootprint.description.${$deviceTranslationKey}`
                )}
              </p>
            </div>
          </li>
          <li class="flex items-center gap-x-4">
            <img src="checkmark.svg" alt="checkmark" class="h-12 md:h-16" />
            <div class="flex flex-col">
              <h3 class="text-lg md:text-xl">
                {$t('so_what.sustainability.keyPoints.circularEconomy.title')}
              </h3>
              <p>
                {$t(
                  `so_what.sustainability.keyPoints.circularEconomy.description.${$deviceTranslationKey}`
                )}
              </p>
            </div>
          </li>
        </ul>
        <ResponsiveImage
          src="backpack.png"
          alt="backpack"
          class="w-[40vw] min-w-[24px] self-center md:max-w-[434px] md:self-end"
          showOnMobile={true}
        />
      </div>
    </div>
  </GreenBox>

  <SecondaryBox>
    <div class="flex flex-col justify-between gap-y-6 p-4 md:h-[300px] md:flex-row md:p-8">
      <div class="flex w-full flex-col md:block md:w-1/2">
        <h2 class="m-0">{$t('so_what.contact.title')}</h2>
        <Button
          class="self-end"
          on:click={() =>
            modalStore.trigger({
              component: 'formModal',
              type: 'component',
              title: "Let's Talk"
            })}
        >
          {$t('so_what.contact.cta')}
        </Button>
      </div>
      <ResponsiveImage
        src="equipment.svg"
        alt="Equipment"
        class="relative -top-4 h-[340px]"
        showOnMobile={false}
      />
    </div>
  </SecondaryBox>
</div>
