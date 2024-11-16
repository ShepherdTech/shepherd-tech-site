<script>
  import DiamondBox from './DiamondBox.svelte';
  import GreenBox from './GreenBox.svelte';
</script>

<GreenBox class="mt-0 flex justify-center bg-black" style="padding:0px">
  <DiamondBox />
  <p class="sustainable flex items-center whitespace-nowrap bg-shire pl-2 pr-2">
    SUSTAINABLE COMPUTERING YOU CAN RELY ON
  </p>
  <DiamondBox />
</GreenBox>

<style>
  .sustainable {
    font-family: Inter;
    font-size: 0.55rem;
    font-weight: 800;
    line-height: 13px;
    letter-spacing: 0.25em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
  @media (max-width: 768px) {
    .sustainable {
      font-size: 0.4rem;
    }
  }
</style>
