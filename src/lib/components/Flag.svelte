<script>
   let className = ''; // Prop to accept additional classes
   export { className as class }; // Export as 'class' prop

  const flagStyles = {
    container: "w-3/4 md:w-1/3",
    flag: "flex flex-col text-center self-center h-fit bg-shire border-goblin border-[3px] border-solid border-b-0",
    content: "flex flex-col p-2 gap-y-4 md:p-4 md:gap-y-8",
    cutout: "bg-shire border-goblin border-[3px] border-solid border-y-0 h-[100px] -top-1 relative",
    clipPath: "clip-path: polygon(0 0, 0 100%, 50% 30%, 60% 20%, 50% 30%, 100% 100%, 100% 0%)"
  };
</script>

<section class="{flagStyles.container} {className}">
  <div class={flagStyles.flag}>
    <div class={flagStyles.content}>
      <slot></slot>
    </div>
  </div>
  <!-- Flag Cutout -->
  <div class={flagStyles.cutout} style={flagStyles.clipPath}/>
</section>
