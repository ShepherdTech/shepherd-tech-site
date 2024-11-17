<script>
  import { t } from '$lib/translations';
  import Button from './Button.svelte';
  import ResponsiveImage from './ResponsiveImage.svelte';
  import SecondaryBox from './SecondaryBox.svelte';
</script>

<SecondaryBox>
  <div class="flex flex-col justify-between gap-y-6 p-2 md:h-[300px] md:flex-row md:p-8">
    <div class="flex w-full flex-col justify-between md:block md:w-1/2">
      <h2 class="m-0">{$t('common.contact.title')}</h2>
      <Button class="self-end">
        {$t('common.contact.cta')}
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
