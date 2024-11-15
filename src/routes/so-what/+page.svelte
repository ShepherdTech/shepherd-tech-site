<script>
	import Button from '$components/Button.svelte';
	import SecondaryBox from '$components/SecondaryBox.svelte';
	import { t } from '$lib/translations';
</script>

<div class="space-y-8 text-black">
   <div class="relative border-shire border-solid border-[3px] h-[400px] mx-8 mt-8">
    <div class="flex justify-between items-start">
      <img class="-top-3 -left-3 relative" src="/star.svg" alt="star"/>
      <img class="h-40 -top-8 relative" src="/Flag_Light_md.png" alt="Shepherd Tech Flag" />
      <img class="-top-3 -right-3 relative" src="/star.svg" alt="star"/>
    </div>
   </div>

   <section class="border-shire border-solid border-[3px] h-[820px] mx-8 flex text-sandcastle p-12 gap-x-6 flex-col">
		<h2>{$t('so_what.benefits.title')}</h2>
		<div class="flex justify-around gap-x-14">
			<section class="flex flex-col text-center w-1/3 h-[600px] bg-shire border-goblin border-[3px] border-solid" style="clip-path: polygon(0 0, 0 100%, 50% 70%, 60% 60%, 50% 70%, 100% 100%, 100% 0%)">
        <div class="flex flex-col p-4 gap-y-8">
          <h3>{$t('so_what.benefits.items.costs.title')}</h3>
          <p>{$t('so_what.benefits.items.costs.description')}</p>
        </div>  
			</section>
			<section class="flex flex-col text-center w-1/3 h-[600px] mt-[100px] bg-shire border-goblin border-[3px] border-solid" style="clip-path: polygon(0 0, 0 100%, 50% 70%, 60% 60%, 50% 70%, 100% 100%, 100% 0%)">
        <div class="flex flex-col p-4 gap-y-8">
          <h3>
            {$t('so_what.benefits.items.scalability.title')}
          </h3>
          <p>{$t('so_what.benefits.items.scalability.description')}</p>
        </div>
			</section>
			<section class="flex flex-col text-center w-1/3 h-[600px] bg-shire border-goblin border-[3px] border-solid" style="clip-path: polygon(0 0, 0 100%, 50% 70%, 60% 60%, 50% 70%, 100% 100%, 100% 0%)">
        <div class="flex flex-col p-4 gap-y-8">
          <h3>{$t('so_what.benefits.items.performance.title')}</h3>
          <p>{$t('so_what.benefits.items.performance.description')}</p>
        </div>
			</section>
		</div>
	</section>

	<section class="border-shire border-solid border-[3px] mx-8 flex text-sandcastle p-12 gap-x-6">
    <div class="w-1/2 flex flex-col">
      <h1 class="font-lowdrag text-sandcastle">{$t('so_what.sustainability.title')}</h1>
      <img src="backpack.png" alt="backpack" class="max-h-[374px] self-end" />
    </div>
		<div class="flex flex-col-reverse gap-4 md:flex-row md:gap-8 w-1/2">
			<!-- List container -->
			<div class="w-full">
				<ul class="flex flex-col justify-around h-full">
					<li class="flex items-center">
            <img src="checkmark.svg" alt="checkmark" class="mr-4 h-16"/>
            <div class="flex flex-col">
              <h3>{$t('so_what.sustainability.keyPoints.eWaste.title')}</h3>
              <p>{$t('so_what.sustainability.keyPoints.eWaste.description')}</p>
            </div>
          </li>
          <li class="flex items-center">
            <img src="checkmark.svg" alt="checkmark" class="mr-4 h-16"/>
            <div class="flex flex-col">
              <h3>{$t('so_what.sustainability.keyPoints.carbonFootprint.title')}</h3>
              <p>{$t('so_what.sustainability.keyPoints.carbonFootprint.description')}</p>
            </div>
          </li>
          <li class="flex items-center">
            <img src="checkmark.svg" alt="checkmark" class="mr-4 h-16" />
              <div class="flex flex-col">
                <h3>{$t('so_what.sustainability.keyPoints.circularEconomy.title')}</h3>
                <p>{$t('so_what.sustainability.keyPoints.circularEconomy.description')}</p>
            </div>
          </li>
				</ul>
			</div>
		</div>
	</section>

  <SecondaryBox>
    <div class="flex justify-between h-[300px] p-12">
      <div class="w-1/2">
        <h2>{$t('so_what.contact.title')}</h2>
        <Button>
          {$t('so_what.contact.cta')}
        </Button>
      </div>
      <img src="equipment.svg" alt="Equipment" class="relative -top-12 h-[354px]" />
    </div>
  </SecondaryBox>
</div>
