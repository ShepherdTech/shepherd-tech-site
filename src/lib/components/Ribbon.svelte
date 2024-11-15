<script>
  export let title;
</script>

<div class="ribbon w-full min-w-[300px] md:w-fit bg-green-3 px-4 md:px-[calc(1.8em+0.5em)] pb-[0.8em] self-center text-center md:max-w-[760px] relative z-10 min-h-[6rem] md:min-h-[8rem]">
  <div class="ribbon-content">
    <h2 class="mb-0 relative top-3">{title}</h2>
  </div>
</div>

<style>
  .ribbon {
    /* Mobile defaults */
    --s: 1.8em;
    --d: 0.8em;
    --c: 0.8em;
    position:relative;
    width: 100%;

    /* Desktop defaults */
    @media (min-width: 768px) {
      --s: 3em;
      --d: 1.4em;
      --c: 0.8em;
    }
    
    background-image: 
      conic-gradient(at left var(--s) bottom var(--d),
        #0000 25%, #0008 0 37.5%, #0004 0),
      conic-gradient(at right var(--s) bottom var(--d),
        #0004 62.5%, #0008 0 75%, #0000 0);
    background-position: 0, 100%;
    background-size: 50% 100%, 50% 100%;
    background-repeat: no-repeat;
    
    clip-path: polygon(
      0 var(--d), 
      var(--s) var(--d),
      var(--s) 0,
      calc(100% - var(--s)) 0,
      calc(100% - var(--s)) var(--d),
      100% var(--d),
      calc(100% - var(--c)) calc(50% + var(--d)/2),
      100% 100%,
      calc(100% - var(--s) - var(--d)) 100%,
      calc(100% - var(--s) - var(--d)) calc(100% - var(--d)),
      calc(var(--s) + var(--d)) calc(100% - var(--d)),
      calc(var(--s) + var(--d)) 100%,
      0 100%,
      var(--c) calc(50% + var(--d)/2)
    );
  }

  .ribbon-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - (var(--s) * 2));
    text-align: center;
    padding: 0 0.5em;
    height: 100%;
  }
</style>
