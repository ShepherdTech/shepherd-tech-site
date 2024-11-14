<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  import { t } from '$lib/translations/index';
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

  <div class="flex flex-1 justify-end gap-2">
    <a
      href="https://www.instagram.com/shepherdtech.se/profilecard/?igsh=MWwzNDBsajlxamN5ZQ=="
      class="text-sm transition-colors hover:text-sandcastle"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="instagram.png" alt="Instagram" class="h-5 w-5" />
    </a>
    <span>·</span>
    <a
      href="https://www.linkedin.com/company/shepherdtechse/"
      class="text-sm transition-colors hover:text-sandcastle"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="linkedin.png" alt="LinkedIn" class="h-5 w-5" />
    </a>
  </div>
</footer>
