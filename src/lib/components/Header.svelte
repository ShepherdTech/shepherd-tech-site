<script lang="ts">
  import { onMount } from 'svelte';

  const navItems = [
    { href: '/services', label: 'Services' },
    { href: '/so-what', label: 'So What?' },
    { href: '/meet-the-team', label: 'Meet the Team' }
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
  class="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b px-8 py-4 transition-all duration-200 {isScrolled
    ? 'border-gray-800 bg-black/80 backdrop-blur-sm'
    : 'border-transparent bg-black'}"
>
  <nav class="flex flex-1 gap-6">
    {#each navItems as { href, label }}
      <a
        {href}
        class="font-squil text-sm font-bold text-goblin transition-colors hover:text-sandcastle"
      >
        {label}
      </a>
    {/each}
  </nav>

  <a
    href="/"
    class="absolute left-1/2 -translate-x-1/2 cursor-pointer text-xl font-bold text-sandcastle transition-colors hover:text-goblin"
  >
    ShepherdTech
  </a>
  <div class="flex flex-1 justify-end">
    <button
      class="rounded-full border-2 border-goblin px-4 py-2 text-sm text-sandcastle transition-all duration-200 hover:border-green-600 hover:bg-green-700/10 hover:text-green-400"
    >
      Contact
    </button>
  </div>
</header>

<!-- Spacer to prevent content from going under header -->
<div class="h-[72px]"></div>
