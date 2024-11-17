<script lang="ts">
  import Icon from '@iconify/svelte';
  import { getModalStore } from '@skeletonlabs/skeleton';
  import { currentPath } from '$lib/stores/page';
  const modalStore = getModalStore();

  interface NavItem {
    action?: () => void;
    href?: string;
    label: string;
  }

  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/so-what', label: 'So What?' },
    { href: '/meet-the-team', label: 'Meet the Team' },
    {
      action: () => {
        modalStore.trigger({
          component: 'formModal',
          type: 'component',
          title: "Let's Talk"
        });
      },
      label: 'Contact Us'
    }
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
  on:click|stopPropagation={() => {
    isMenuOpen = !isMenuOpen;
  }}
>
  <Icon icon="material-symbols:menu" height="30" />
</button>

<!-- Mobile Navigation Menu -->
<div
  bind:this={menuContainer}
  class="absolute left-0 right-0 top-[70px] overflow-hidden font-squil transition-all duration-500 ease-in-out lg:hidden"
  style="max-height: {isMenuOpen ? '300px' : '0'};"
>
  <nav class="w-screen border-b border-gray-800 bg-black p-4">
    <div class="flex flex-col gap-4">
      {#each navItems as { href, label, action }}
        <a
          {href}
          class="text-sm text-goblin transition-colors hover:text-sandcastle {$currentPath === href
            ? 'text-sandcastle'
            : ''}"
          on:click={() => {
            isMenuOpen = false;
            if (action) action();
          }}
        >
          {label}
        </a>
      {/each}
    </div>
  </nav>
</div>
