<script lang="ts">
  import Icon from '@iconify/svelte';

  interface NavItem {
    href: string;
    label: string;
  }

  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/so-what', label: 'So What?' },
    { href: '/meet-the-team', label: 'Meet the Team' }
  ];

  let isMenuOpen: boolean = false;
  let menuButton: HTMLButtonElement;
  let menuContainer: HTMLDivElement;

  function handleClickOutside(event: MouseEvent): void {
    if (!isMenuOpen) return;

    const clickedElement = event.target as HTMLElement;
    if (
      menuContainer &&
      !menuContainer.contains(clickedElement) &&
      !menuButton.contains(clickedElement)
    ) {
      isMenuOpen = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<button
  bind:this={menuButton}
  class="text-goblin hover:text-sandcastle"
  on:click|stopPropagation={() => (isMenuOpen = !isMenuOpen)}
>
  <Icon icon="material-symbols:menu" height="30" />
</button>

<!-- Mobile Navigation Menu -->
<div
  bind:this={menuContainer}
  class="absolute left-0 right-0 top-[100px] overflow-hidden font-squil transition-all duration-500 ease-in-out md:hidden"
  style="max-height: {isMenuOpen ? '300px' : '0'};"
>
  <nav class="border-b border-gray-800 bg-black py-4">
    <div class="flex flex-col gap-4">
      {#each navItems as { href, label }}
        <a
          {href}
          class="text-sm text-goblin transition-colors hover:text-sandcastle"
          on:click={() => (isMenuOpen = false)}
        >
          {label}
        </a>
      {/each}
    </div>
  </nav>
</div>
