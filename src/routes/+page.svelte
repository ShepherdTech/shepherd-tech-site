<script>
  import Button from '$components/Button.svelte';
  import GreenBox from '$components/GreenBox.svelte';
  import GreenSustainableBox from '$components/GreenSustainableBox.svelte';
  import ResponsiveImage from '$components/ResponsiveImage.svelte';
  import Ribbon from '$components/Ribbon.svelte';
  import SecondaryBox from '$components/SecondaryBox.svelte';
  import WifiBox from '$components/WifiBox.svelte';
  import { t } from '$lib';
  import { deviceTranslationKey, isMobile } from '$lib/stores/mobile';

  import { getModalStore } from '@skeletonlabs/skeleton';
  const modalStore = getModalStore();
  $: services = [
    {
      title: $t('home.services.professional.title'),
      image: 'services-professional.png',
      description: $t(`home.services.professional.description.${$deviceTranslationKey}`)
    },
    {
      title: $t('home.services.consulting.title'),
      image: 'services-consulting.png',
      description: $t(`home.services.consulting.description.${$deviceTranslationKey}`)
    },
    {
      title: $t('home.services.sustainable.title'),
      image: 'services-sustainable.png',
      description: $t(`home.services.sustainable.description.${$deviceTranslationKey}`)
    },
    {
      title: $t('home.services.msp.title'),
      image: 'services-managed.png',
      description: $t(`home.services.msp.description.${$deviceTranslationKey}`)
    }
  ];
</script>

<GreenBox
  class="text-sandcastle"
  style={`background: linear-gradient(${$isMobile ? '0deg' : '90deg'}, 
  rgba(0, 0, 0, 0.5) 0%, 
  rgba(0, 48, 27, 0.5) 25%, 
  rgba(2, 81, 45, 0.5) 65%, 
  rgba(5, 19, 14, 0.5) 100%);`}
  hasBanner
  hasDiamonds
>
  <div class="mt-[70px] flex w-full flex-col items-center justify-center text-center md:mt-36">
    <img
      src="diy_magical_graph.svg"
      alt="Magic Graph"
      class="absolute -left-12 w-4/5 max-w-[15rem] translate-y-[8rem] opacity-40 md:-left-12 md:block md:w-2/5 md:max-w-[31rem] md:-translate-y-32"
    />
    <img
      src="diy_magical_graph.svg"
      alt="Magic Graph"
      class="absolute -right-[6rem] w-4/5 max-w-[15rem] -translate-y-[8rem] opacity-40 md:right-6 md:block md:w-2/5 md:max-w-[31rem] md:translate-y-2"
    />
    <p class="font-squil font-light text-fireball">{$t('home.main.intro')}</p>
    <h1 class="mb-0 mt-2 font-bold">Tech support</h1>
    <h1 class="m-0 font-bold">Wizardry</h1>

    <p class="mt-4 w-[80%] md:w-[50%]">{$t('home.main.subtitle')}</p>
    <Button
      class="mb-14 mt-12 w-fit bg-transparent font-lowdrag md:mb-28 md:mt-12"
      on:click={() =>
        modalStore.trigger({
          component: 'formModal',
          type: 'component',
          title: "Let's Talk"
        })}>Let's talk</Button
    >
  </div>
</GreenBox>

<GreenSustainableBox />

<GreenBox class="flex flex-col-reverse bg-footerbg lg:flex-row">
  <div class="flex flex-1 items-center">
    <img src="equipment.svg" alt="Treasure" class="h-auto w-full max-w-[600px]" />
  </div>
  <div class="flex flex-col">
    <div class="flex flex-col items-center justify-center">
      <img src="Logo_Light_sm.png" alt="ShepherdTech" class="mb-4 w-64" />
      <h1 class="m-0 text-center font-bold">Sustainable Tech</h1>
      <h1 class="m-0 text-center font-bold">You can trust.</h1>
    </div>
    <div class="flex flex-col items-center justify-center text-goblin md:mt-4">
      <h1 class="text-center font-bold">Like Magic</h1>
      <Button
        class="w-fit bg-transparent font-lowdrag"
        on:click={() => (window.location.href = '/so-what')}>Learn more</Button
      >
    </div>
  </div>
</GreenBox>

<GreenBox class="bg-footerbg" style="padding: 0.5rem">
  <GreenBox class="flex flex-col justify-center bg-black">
    <Ribbon
      title="Every Great Tech Quest Deserves the Best Services We've Got Them All"
      width={$isMobile ? '100%' : '80%'}
    />
    <div class="grid gap-8 p-4 md:grid-cols-2 md:p-12 lg:grid-cols-4">
      {#each services as service}
        <div class="flex h-full flex-col items-center">
          <img src={service.image} alt={service.title} class="mb-4 w-64" />
          <h2 class="mb-4 text-center text-xl font-bold lg:h-24">{service.title}</h2>
          <p class="mb-auto text-center">{service.description}</p>
          <Button class="mt-8 w-fit">Learn more</Button>
        </div>
      {/each}
    </div>
  </GreenBox>
</GreenBox>
<WifiBox>
  <div class="grid gap-12 text-sandcastle md:gap-24 xl:grid-cols-3">
    <img
      src="diamond-outline.png"
      alt="Diamonds"
      class="outline-diamond right-12 top-24 z-0 hidden md:block"
    />
    <img
      src="diamond-outline.png"
      alt="Diamonds"
      class="outline-diamond bottom-24 left-12 z-0 hidden md:block"
    />
    <img
      src="diamond-outline.png"
      alt="Diamonds"
      class="outline-diamond bottom-24 right-1/3 z-0 hidden md:block"
    />
    <img
      src="diamond-outline.png"
      alt="Diamonds"
      class="outline-diamond z- left-1/3 top-24 hidden md:block"
    />
    <div class="column-text">
      <img src="diamond.svg" alt="Diamonds" />
      <h1 class="font-bold">100% of our projects</h1>
      <p class="text-somerandomgreen">aim to make a positive environmental or social impact.</p>
    </div>
    <div class="column-text">
      <img src="diamond.svg" alt="Diamonds" class="sm:block xl:hidden" />
      <h1 class="font-bold">100+ Years</h1>
      <p class="text-somerandomgreen">of collectively team experience</p>
      <img src="diamond.svg" alt="Diamonds" class="hidden xl:block" />
    </div>
    <div class="column-text">
      <img src="diamond.svg" alt="Diamonds" />
      <h1 class="font-bold">Customizable service packages</h1>
      <p class="text-somerandomgreen">tailored to each client’s unique business needs</p>
    </div>
  </div>
</WifiBox>
<SecondaryBox>
  <div class="flex flex-col justify-between gap-y-6 p-4 md:h-[300px] md:flex-row md:p-8">
    <div class="flex w-full md:block md:w-1/2">
      <h2 class="m-0">Want to take a look at our companions?</h2>
    </div>
    <ResponsiveImage
      src="Monogram_Dark_md.png"
      alt="Equipment"
      class="relative -bottom-8 right-[10%] h-[340px] scale-x-[-1]"
      showOnMobile={false}
    />
    <Button
      class="h-12 w-full max-w-[8rem] self-end text-nowrap md:max-w-[14rem]"
      on:click={() => (window.location.href = '/meet-the-team')}>Yes please</Button
    >
  </div>
</SecondaryBox>

<style>
  .column-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .column-text h1 {
    margin-top: 1rem;
    font-size: 3rem;
  }
  .column-text img {
    height: 44px;
  }
  .outline-diamond {
    position: absolute;
    z-index: -1;
  }
  @media (max-width: 1024px) {
    .column-text h1 {
      font-size: 3rem /* 60px */;
    }
    .outline-diamond {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .column-text h1 {
      font-size: 2rem /* 60px */;
    }
  }
</style>
