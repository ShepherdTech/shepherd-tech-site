<script>
  import Button from '$components/Button.svelte';
  import DiamondBox from '$components/DiamondBox.svelte';
  import GreenBox from '$components/GreenBox.svelte';
  import Ribbon from '$components/Ribbon.svelte';
  import { t } from '$lib';
</script>

<GreenBox
  class="text-sandcastle"
  style="background: linear-gradient(90.21deg, rgba(0, 0, 0, 0.5) 5.15%, rgba(0, 48, 27, 0.5) 36.32%, rgba(2, 81, 45, 0.5) 49.27%, rgba(5, 19, 14, 0.5) 86.86%);
"
  hasBanner
  hasDiamonds
>
  <div class="mt-36 flex w-full flex-col items-center justify-center" style="">
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
  <div class="flex-1">
    <img src="equipment.svg" alt="Treasure" class="ml-10 h-auto w-full" />
  </div>
  <div class="flex flex-1 flex-col">
    <div class="flex flex-1 flex-col items-center justify-center">
      <img src="Logo_Light_sm.png" alt="ShepherdTech" class="mb-4 w-64" />
      <h1 class="text-center text-6xl font-bold">Sustainable Tech</h1>
      <h1 class="text-center text-6xl font-bold">You can trust.</h1>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center text-goblin">
      <h1 class="text-center text-7xl font-bold">Like Magic</h1>
      <Button class="font-l mb-20  w-fit bg-transparent font-lowdrag">Learn more</Button>
    </div>
  </div>
</GreenBox>
<GreenBox class="bg-black" style="padding: 0.5rem">
  <GreenBox class="flex justify-center bg-black">
    <Ribbon
      title="Every Great Tech Quest Deserves the Best Services We've Got Them All"
      width="80%"
    />
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
