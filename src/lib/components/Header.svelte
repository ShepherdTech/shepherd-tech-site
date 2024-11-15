<script lang="ts">
  import { onMount } from 'svelte';
  import Button from '$components/Button.svelte';

  const navItems = [
    { href: '/', label: 'Home' },
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
  class="fixed left-0 right-0 top-0 z-50 border-b px-8 py-4 transition-all duration-200 {isScrolled
    ? 'border-gray-800 bg-black/80 backdrop-blur-sm'
    : 'border-transparent bg-black'}"
>
  <div class="relative flex items-center justify-between">
    <!-- Left section -->
    <nav class="flex gap-6">
      {#each navItems as { href, label }}
        <a {href} class="text-sm text-goblin transition-colors hover:text-sandcastle">
          {label}
        </a>
      {/each}
    </nav>

    <!-- Centered logo -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-sandcastle"
    >
      ShepherdTech
    </div>

    <!-- Right section -->
    <div>
      <Button>Contact</Button>
    </div>
  </div>
</header>

<!-- Spacer to prevent content from going under header -->
<div class="h-[72px]" />
