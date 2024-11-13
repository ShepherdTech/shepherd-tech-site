<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
      import { t } from '$lib/translations/index';
  </script>
  
  <footer class="bg-black text-sandcastle py-4 px-8 flex justify-between items-center border-t border-gray-800">
    <div class="flex items-center gap-2">
      <img 
        src="favicon.png" 
        alt="ShepherdTech Logo" 
        class="h-6 w-6"
      />
      <span class="text-sm">
        {$t("common.copyright", { companyName: "ShepherdTech" })}
      </span>
    </div>
  
    <div class="flex gap-2">
      <a href="/privacy" class="text-sm hover:text-sandcastle transition-colors">Privacy</a>
      <span>·</span>
      <a href="/terms" class="text-sm hover:text-sandcastle transition-colors">Terms</a>
    </div>
  </footer>