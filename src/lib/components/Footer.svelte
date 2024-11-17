<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  import { t } from '$lib/translations/index';
  import Icon from '@iconify/svelte';
</script>

<footer
  class="flex items-center justify-between border-t border-gray-800 bg-footerbg px-8 py-4 text-sandcastle"
>
  <div class="flex-1">
    <!-- Empty div for spacing -->
  </div>

  <div>
    <div class="flex justify-center">
      <img src="Monogram_Light_sm.png" alt="ShepherdTech Logo" class="mb-4 h-14 w-14" />
    </div>
    <span class="text-sm">
      {$t('common.copyright', { companyName: 'ShepherdTech' })}
    </span>
  </div>

  <!-- <div class="flex flex-1 items-center justify-end gap-2">
    <a
      href="https://www.instagram.com/companyname/profilecard/"
      class="text-sm transition-colors hover:text-sandcastle"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon="mdi:instagram" />
    </a>
    <span>·</span>
    <a
      href="https://www.linkedin.com/company/companyname/"
      class="text-sm transition-colors hover:text-sandcastle"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon="ri:linkedin-fill" />
    </a>
  </div> -->

  <div
    class="flex flex-1 items-center justify-end gap-2"
    role="navigation"
    aria-label="Social media links"
  >
    <a
      href="https://www.instagram.com/shepherdtech.se/profilecard/?igsh=MWwzNDBsajlxamN5ZQ=="
      class="text-sm transition-colors hover:text-goblin focus:text-goblin focus:outline-none focus:ring-2 focus:ring-sandcastle"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit our Instagram profile"
    >
      <Icon icon="mdi:instagram" aria-hidden="true" width={24} />
    </a>

    <span aria-hidden="true">·</span>

    <a
      href="https://www.linkedin.com/company/shepherdtechse/"
      class="text-sm transition-colors hover:text-goblin focus:text-goblin focus:outline-none focus:ring-2 focus:ring-sandcastle"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit our LinkedIn profile"
    >
      <Icon icon="ri:linkedin-fill" aria-hidden="true" width={24} />
    </a>
  </div>
</footer>
