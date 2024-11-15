<script>
	import Button from '$components/Button.svelte';
	import GreenBox from '$components/GreenBox.svelte';
	import SecondaryBox from '$components/SecondaryBox.svelte';
	import { t } from '$lib/translations';

  import { deviceTranslationKey } from '$lib/stores/mobile';

  import Flag from '$components/Flag.svelte';
  import Ribbon from '$components/Ribbon.svelte';
  import ResponsiveImage from '$components/ResponsiveImage.svelte';
</script>

<div class="space-y-4 md:space-y-8">
  <GreenBox hasDiamonds hasBanner>
    <div class="flex flex-col h-full md:flex-row items-center justify-between text-center mt-[100px] md:text-start p-4 md:px-12 md:pb-8 gap-y-6">
      <div class="w-full md:w-2/3">
        <h1 class="mb-0">{$t("so_what.main.title.line1")}</h1>
        <h1 class="text-goblin">{$t('so_what.main.title.line2')}</h1>
        <p class="text-base md:text-xl">{$t('so_what.main.description')}</p>
      </div>
      <img src="fortune-teller.png" alt="fortune teller" class="w-2/3 md:w-1/3"/>
    </div>
  </GreenBox>

  <!-- How does this help your adventure -->
   <GreenBox class="min-h-[900px] md:min-h-[400px]">
    <div class="flex flex-col md:px-8 gap-y-8 md:gap-x-6">
      <Ribbon title={$t('so_what.benefits.title')}/>
      <div class="flex flex-col items-center md:flex-row md:items-start md:justify-around gap-y-8 md:gap-x-8 lg:gap-x-14">
        <Flag class="md:-top-10 relative">
          <h3>{$t('so_what.benefits.items.costs.title')}</h3>
          <p>{$t(`so_what.benefits.items.costs.description.${$deviceTranslationKey}`)}</p>
        </Flag>
        <Flag class="mt-0 md:mt-[100px]">
          <h3>{$t('so_what.benefits.items.scalability.title')}</h3>
          <p>{$t(`so_what.benefits.items.scalability.description.${$deviceTranslationKey}`)}</p>
        </Flag>
        <Flag class="md:-top-10 relative">
          <h3>{$t('so_what.benefits.items.performance.title')}</h3>
          <p>{$t(`so_what.benefits.items.performance.description.${$deviceTranslationKey}`)}</p>
        </Flag>
      </div>
    </div>
	</GreenBox>

  <!-- What do you need to know for your journey -->
	<GreenBox>
    <div class="flex flex-col md:flex-row md:p-8 gap-y-6 md:gap-x-6">
      <div class="w-full md:w-1/2 flex flex-col">
        <h1 class="font-lowdrag">{$t('so_what.sustainability.title')}</h1>
        <ResponsiveImage src="backpack.png" alt="backpack" class="w-[40vw] min-w-[24px] md:max-w-[434px] self-center md:self-end" showOnMobile={false} />
      </div>
      <div class="flex flex-col w-full md:w-1/2">
        <ul class="flex flex-col gap-y-6 md:gap-y-8">
          <li class="flex items-center gap-x-4">
            <img src="checkmark.svg" alt="checkmark" class="h-12 md:h-16"/>
            <div class="flex flex-col">
              <h3 class="text-lg md:text-xl">{$t('so_what.sustainability.keyPoints.eWaste.title')}</h3>
              <p>{$t(`so_what.sustainability.keyPoints.eWaste.description.${$deviceTranslationKey}`)}</p>
            </div>
          </li>
          <li class="flex items-center gap-x-4">
            <img src="checkmark.svg" alt="checkmark" class="h-12 md:h-16"/>
            <div class="flex flex-col">
              <h3 class="text-lg md:text-xl">{$t('so_what.sustainability.keyPoints.carbonFootprint.title')}</h3>
              <p>{$t(`so_what.sustainability.keyPoints.carbonFootprint.description.${$deviceTranslationKey}`)}</p>
            </div>
          </li>
          <li class="flex items-center gap-x-4">
            <img src="checkmark.svg" alt="checkmark" class="h-12 md:h-16"/>
            <div class="flex flex-col">
              <h3 class="text-lg md:text-xl">{$t('so_what.sustainability.keyPoints.circularEconomy.title')}</h3>
              <p>{$t(`so_what.sustainability.keyPoints.circularEconomy.description.${$deviceTranslationKey}`)}</p>
            </div>
          </li>
        </ul>
        <ResponsiveImage src="backpack.png" alt="backpack" class="w-[40vw] min-w-[24px] md:max-w-[434px] self-center md:self-end" showOnMobile={true} />
      </div>
    </div>
	</GreenBox>

  <SecondaryBox>
    <div class="flex flex-col md:flex-row justify-between md:h-[300px] p-4 md:p-8 gap-y-6">
      <div class="w-full md:w-1/2 flex flex-col md:block">
        <h2 class="m-0">{$t('so_what.contact.title')}</h2>
        <Button style="self-end">
          {$t('so_what.contact.cta')}
        </Button>
      </div>
      <ResponsiveImage src="equipment.svg" alt="Equipment" class="relative -top-4 h-[340px]" showOnMobile={false}/>
    </div>
  </SecondaryBox>
</div>
