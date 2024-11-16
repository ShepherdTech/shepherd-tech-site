<script>
  import Button from '$components/Button.svelte';
  import DiamondBox from '$components/DiamondBox.svelte';
  import GreenBox from '$components/GreenBox.svelte';
  import GreenSustainableBox from '$components/GreenSustainableBox.svelte';
  import ResponsiveImage from '$components/ResponsiveImage.svelte';
  import Ribbon from '$components/Ribbon.svelte';
  import SecondaryBox from '$components/SecondaryBox.svelte';
  import WifiBox from '$components/WifiBox.svelte';

  let services = [
    {
      title: 'Professional Services',
      image: 'services-professional.png',
      description:
        "Our Professional Services are like a skilled ranger guild, guiding you through every twist and turn of your business quest. Whether you need expert strategy to blaze a new trail, hands-on help to sharpen your operations, or direction to keep your IT in line with sustainability goals, we're ready."
    },
    {
      title: 'Consulting Services',
      image: 'services-consulting.png',
      description:
        'Our Consultation services are here to guide you through the tangled forests of IT and sustainability—consider us your trusted druids, offering expert wisdom to craft and implement sustainable IT strategies, optimize resources, and align your tech with green goals.'
    },
    {
      title: 'Sustainable Technology Providers',
      image: 'services-sustainable.png',
      description:
        'As a Sustainable Technology Provider (STP), we arm your business with eco-friendly hardware, software, cloud solutions, and AI-driven tools to help you crush sustainability challenges with the strength of a battle-ready berserker.'
    },
    {
      title: 'MSP Services',
      image: 'services-managed.png',
      description:
        'In the realm of managed IT services, our three-tiered MSP packages offer an ascending journey to unmatched support and protection. Choose your path and rise through the ranks of protection and innovation. The journey awaits!'
    }
  ];
</script>

<GreenBox
  class="text-sandcastle"
  style="background: linear-gradient(90.21deg, rgba(0, 0, 0, 0.5) 5.15%, rgba(0, 48, 27, 0.5) 36.32%, rgba(2, 81, 45, 0.5) 49.27%, rgba(5, 19, 14, 0.5) 86.86%);"
  hasBanner
  hasDiamonds
>
  <div class="mt-36 flex w-full flex-col items-center justify-center">
    <img
      src="diy_magical_graph.svg"
      alt="Magic Graph"
      class="absolute -left-12 hidden w-2/5 max-w-[31rem] -translate-y-32 opacity-40 md:block"
    />
    <img
      src="diy_magical_graph.svg"
      alt="Magic Graph"
      class="absolute right-6 hidden w-2/5 max-w-[31rem] translate-y-2 opacity-40 md:block"
    />
    <h2 class="font-squil text-xl font-light text-fireball">Powering your business with</h2>
    <h1 class="text-center font-bold">Tech support</h1>
    <h1 class="font-bold">Wizardry</h1>

    <p class="mt-4">At ShepherdTech we believe in equipping you on your</p>
    <p class="">quest for success with sustainable IT solutions.</p>
    <Button class="font-l mb-28 mt-12 w-fit bg-transparent font-lowdrag">Let's talk</Button>
  </div>
</GreenBox>

<GreenSustainableBox />

<GreenBox class="flex flex-col-reverse bg-black lg:flex-row">
  <div class="flex flex-1 items-center">
    <img src="equipment.svg" alt="Treasure" class="h-auto w-full" />
  </div>
  <div class="flex flex-1 flex-col">
    <div class="flex flex-1 flex-col items-center justify-center">
      <img src="Logo_Light_sm.png" alt="ShepherdTech" class="mb-4 w-64" />
      <h1 class="text-center font-bold">Sustainable Tech</h1>
      <h1 class="text-center font-bold">You can trust.</h1>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center text-goblin">
      <h1 class="text-center font-bold">Like Magic</h1>
      <Button class="font-l mb-20 w-fit bg-transparent font-lowdrag">Learn more</Button>
    </div>
  </div>
</GreenBox>

<GreenBox class="bg-black" style="padding: 0.5rem">
  <GreenBox class="flex flex-col justify-center bg-black">
    <Ribbon
      title="Every Great Tech Quest Deserves the Best Services We've Got Them All"
      width="80%"
    />
    <div class="grid gap-8 p-12 md:grid-cols-2 lg:grid-cols-4">
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
  <div class="grid gap-24 text-sandcastle xl:grid-cols-3">
    <img src="diamond-outline.png" alt="Diamonds" class="outline-diamond right-12 top-24 z-0" />
    <img src="diamond-outline.png" alt="Diamonds" class="outline-diamond bottom-24 left-12 z-0" />
    <img src="diamond-outline.png" alt="Diamonds" class="outline-diamond bottom-24 right-1/3 z-0" />
    <img src="diamond-outline.png" alt="Diamonds" class="outline-diamond z- left-1/3 top-24" />
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
      class="h-12 self-end text-nowrap"
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
