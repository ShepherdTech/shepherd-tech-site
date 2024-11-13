<script lang="ts">
	import { onMount } from "svelte";

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/so-what", label: "So What?"},
    { href: "/meet-the-team", label: "Meet the Team" }
  ];

  let scrollY: number;
  let header: HTMLElement;

  // Add scroll listener
  onMount(() => {
    const updateScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  });

  $: isScrolled = scrollY > 0;
</script>

<header
  bind:this={header}
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-8 py-4 flex justify-between items-center border-b {isScrolled ? 'bg-black/80 backdrop-blur-sm border-gray-800' : 'bg-black border-transparent'}"
>
  <nav class="flex gap-6">
    {#each navItems as {href, label}}
      <a 
        {href} 
        class="text-goblin hover:text-sandcastle transition-colors text-sm"
      >
        {label}
      </a>
    {/each}
  </nav>

  <div class="text-sandcastle text-xl font-bold">
    ShepherdTech
  </div>

  <div>
    <button class="px-4 py-2 border-2 border-goblin text-sandcastle rounded-full text-sm hover:bg-green-700/10 hover:text-green-400 hover:border-green-600 transition-all duration-200">
      Contact
    </button>
  </div>
</header>

<!-- Spacer to prevent content from going under header -->
<div class="h-[72px]"></div>