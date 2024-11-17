<script lang="ts">
  import { onMount } from 'svelte';
  import Button from '$components/Button.svelte';
  import { isMobile } from '$lib/stores/mobile';
  import MobileMenu from './MobileMenu.svelte';
  import { getModalStore } from '@skeletonlabs/skeleton';
  const modalStore = getModalStore();

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
  class="fixed left-0 right-0 top-0 z-50 h-[79px] border-b px-4 transition-all duration-200 sm:px-8 lg:h-[100px] {isScrolled
    ? 'border-gray-800 bg-black/80 backdrop-blur-sm'
    : 'border-transparent bg-black'}"
>
  <div class="relative flex h-full w-full items-center justify-between">
    <!-- Mobile Menu Button -->
    {#if $isMobile}
      <img src="full-logo-white.png" alt="logo" class="w-[250px]" />
      <MobileMenu />
    {/if}

    <!-- Desktop Navigation -->
    {#if !$isMobile}
      <nav class="flex gap-4 lg:gap-6">
        {#each navItems as { href, label }}
          <a
            {href}
            class="whitespace-nowrap text-sm text-goblin transition-colors hover:text-sandcastle"
          >
            {label}
          </a>
        {/each}
      </nav>

      <div class="absolute left-1/2 -translate-x-1/2">
        <img src="logo-white.png" alt="logo" class="h-[50px]" />
      </div>

      <div>
        <Button
          on:click={() =>
            modalStore.trigger({
              component: 'formModal',
              type: 'component',
              title: "Let's Talk"
            })}>Contact</Button
        >
      </div>
    {/if}
  </div>
</header>

<!-- Spacer to prevent content from going under header -->
<div class="h-[72px]" />
