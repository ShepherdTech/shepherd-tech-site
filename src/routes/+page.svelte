<script>
  import Button from '$components/Button.svelte';
  import DiamondBox from '$components/DiamondBox.svelte';
  import GreenBox from '$components/GreenBox.svelte';
  import Ribbon from '$components/Ribbon.svelte';

  let services = [
    {
      title: 'Professional Services',
      image: 'services-professional.png',
      description:
        "Our Professional Services are like a skilled ranger guild, guiding you through every twist and turn of your business quest. Whether you need expert strategy to blaze a new trail, hands-on help to sharpen your operations, or direction to keep your IT in line with sustainability goals, we're ready."
    },
    {
      title: 'MSP Services',
      image: 'services-managed.png',
      description:
        'In the realm of managed IT services, our three-tiered MSP packages offer an ascending journey to unmatched support and protection. Choose your path and rise through the ranks of protection and innovation. The journey awaits!'
    },
    {
      title: 'Sustainable Technology Providers',
      image: 'services-sustainable.png',
      description:
        'As a Sustainable Technology Provider (STP), we arm your business with eco-friendly hardware, software, cloud solutions, and AI-driven tools to help you crush sustainability challenges with the strength of a battle-ready berserker.'
    },
    {
      title: 'Consulting Services',
      image: 'services-consulting.png',
      description:
        'Our Consultation services are here to guide you through the tangled forests of IT and sustainability—consider us your trusted druids, offering expert wisdom to craft and implement sustainable IT strategies, optimize resources, and align your tech with green goals.'
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
      alt="Diamonds"
      class="absolute -left-12 hidden w-2/5 max-w-[31rem] -translate-y-32 opacity-40 md:block"
    />
    <img
      src="diy_magical_graph.svg"
      alt="Diamonds"
      class="absolute right-6 hidden w-2/5 max-w-[31rem] translate-y-2 opacity-40 md:block"
    />
    <h2 class="font-squil text-xl font-light text-fireball">Powering your business with</h2>
    <h1 class="text-center text-7xl font-bold">Tech support</h1>
    <h1 class="font-bold">Wizardry</h1>

    <p class="mt-4">At ShepherdTech we believe in equipping you on your</p>
    <p class="">quest for success with sustainable IT solutions.</p>
    <Button class="font-l mb-28 mt-12 w-fit bg-transparent font-lowdrag">Let's talk</Button>
  </div>
</GreenBox>

<GreenBox class="mt-0 flex justify-center bg-black" style="padding:0px">
  <DiamondBox />
  <p class="sustainable flex items-center whitespace-nowrap bg-shire pl-8 pr-8">
    SUSTAINABLE COMPUTERING YOU CAN RELY ON
  </p>
  <DiamondBox />
</GreenBox>

<GreenBox class="flex flex-col-reverse bg-black lg:flex-row">
  <div class="flex flex-1 items-center">
    <img src="equipment.svg" alt="Treasure" class="h-auto w-full" />
  </div>
  <div class="flex flex-1 flex-col">
    <div class="flex flex-1 flex-col items-center justify-center">
      <img src="Logo_Light_sm.png" alt="ShepherdTech" class="mb-4 w-64" />
      <h1 class="text-center text-6xl font-bold">Sustainable Tech</h1>
      <h1 class="text-center text-6xl font-bold">You can trust.</h1>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center text-goblin">
      <h1 class="text-center text-7xl font-bold">Like Magic</h1>
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
          <h2 class="mb-4 text-center font-lowdrag text-xl font-bold lg:h-24">{service.title}</h2>
          <p class="mb-auto text-center">{service.description}</p>
          <Button class="mt-8 w-fit">Learn more</Button>
        </div>
      {/each}
    </div>
  </GreenBox>
</GreenBox>

<style>
  .sustainable {
    font-family: Inter;
    font-size: 13px;
    font-weight: 800;
    line-height: 13px;
    letter-spacing: 0.25em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
</style>
