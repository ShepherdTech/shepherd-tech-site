<script>
  export let title;
  export let width = 'auto'; // Can be a percentage, pixel value, or "auto"
</script>

<div
  class="ribbon relative z-10 self-center bg-green-3 px-4 pb-[0.8em] text-center md:px-[calc(1.8em+0.5em)]"
  style="width: {width === 'auto' ? '100%' : width}; max-width: {width === 'auto'
    ? '760px'
    : 'none'};"
>
  <div class="ribbon-content flex items-center justify-center">
    <h2 class="my-4 w-full">{title}</h2>
  </div>
</div>

<style>
  .ribbon {
    /* Mobile defaults */
    --s: 1.8em;
    --d: 0.8em;
    --c: 0.8em;
    position: relative;

    /* Desktop defaults */
    @media (min-width: 768px) {
      --s: 3em;
      --d: 1.4em;
      --c: 0.8em;
    }

    background-image: conic-gradient(
        at left var(--s) bottom var(--d),
        #0000 25%,
        #0008 0 37.5%,
        #0004 0
      ),
      conic-gradient(at right var(--s) bottom var(--d), #0004 62.5%, #0008 0 75%, #0000 0);
    background-position: 0, 100%;
    background-size:
      50% 100%,
      50% 100%;
    background-repeat: no-repeat;

    clip-path: polygon(
      0 var(--d),
      var(--s) var(--d),
      var(--s) 0,
      calc(100% - var(--s)) 0,
      calc(100% - var(--s)) var(--d),
      100% var(--d),
      calc(100% - var(--c)) calc(50% + var(--d) / 2),
      100% 100%,
      calc(100% - var(--s) - var(--d)) 100%,
      calc(100% - var(--s) - var(--d)) calc(100% - var(--d)),
      calc(var(--s) + var(--d)) calc(100% - var(--d)),
      calc(var(--s) + var(--d)) 100%,
      0 100%,
      var(--c) calc(50% + var(--d) / 2)
    );
  }

  .ribbon-content {
    position: relative;
    width: calc(100% - (var(--s) * 2));
    margin: 0 auto;
    min-height: 4rem;
  }
</style>
