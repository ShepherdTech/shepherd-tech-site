<script lang="ts">
  import GreenBox from '$components/GreenBox.svelte';
  import { deviceTranslationKey, isMobile } from '$lib/stores/mobile';
  import { t } from '$lib/translations';

  import EquipmentSection from '$components/EquipmentSection.svelte';
  import DiamondBox from '$components/DiamondBox.svelte';
  import GreenSustainableBox from '$components/GreenSustainableBox.svelte';

  const team = [
    {
      name: 'Kerina Simonsen',
      companionUri: '/team/kerina-companion.png',
      profileUri: '/team/kerina.png',
      profilePosition: 'bottom',
      linkedinUri: 'https://www.linkedin.com/in/kerina-simonsen-0a797613a/'
    },
    {
      name: 'Steve Zimmerman',
      companionUri: '/team/steve-companion.png',
      profileUri: '/team/steve.png',
      profilePosition: 'bottom',
      linkedinUri: 'https://www.linkedin.com/in/steven-zimmerman-572014226/'
    },
    {
      name: 'Zack Muniz',
      // companionUri: '/team/zack-companion.png',
      profileUri: '/team/zack.png',
      profilePosition: 'bottom',
      linkedinUri: 'https://www.linkedin.com/in/zack-muniz-187690233/'
    },
    {
      name: 'Betty Louie',
      companionUri: '/team/betty-companion.png',
      profileUri: '/team/betty.png',
      profilePosition: 'bottom',
      linkedinUri: 'https://www.linkedin.com/in/betty-louie-944a98b1/'
    },
    {
      name: 'Ben Banister',
      companionUri: '/team/ben-companion.png',
      profileUri: '/team/ben.png',
      profilePosition: 'bottom',
      linkedinUri: 'https://www.linkedin.com/in/benjamin-banister-95622b121/'
    },
    {
      name: 'Tim Cutler',
      // companionUri: '/team/tim-companion.png',
      profileUri: '/team/tim.png',
      profilePosition: 'bottom',
      linkedinUri: 'https://www.linkedin.com/in/timothycutler/'
    },
    {
      name: 'Ken White',
      companionUri: '/team/ken-companion.png',
      profileUri: '/team/ken.png',
      profilePosition: 'bottom',
      linkedinUri: 'https://www.linkedin.com/in/kenneth-white-50127618/'
    },
    {
      name: 'Riley Garrett',
      companionUri: '/team/riley-companion.png',
      profileUri: '/team/riley.png',
      profilePosition: 'bottom',
      linkedinUri: 'https://www.linkedin.com/in/trileygarrett/'
    }
  ];
  // Function to get position classes based on profilePosition
  const getProfilePositionClasses = (position: string) => {
    const positions = {
      top: 'md:-top-12 lg:-top-14',
      bottom: 'md:top-[12rem] lg:top-[14rem]'
    };
    return positions[position] || positions.top; // Default to top if position is invalid
  };
</script>

<GreenBox hasBanner hasDiamonds class="bg-footerbg">
  <div
    class="mt-[100px] flex h-full flex-col items-center justify-between text-center md:flex-row md:items-start md:px-12 md:pb-8 md:text-start"
  >
    <!-- Content -->
    <div class="w-full md:w-2/3">
      <h1>
        <span>{$t('team.main.title.line1')}</span>
        <span class="text-goblin">{$t('team.main.title.line2')}</span>
      </h1>
      <p>{$t(`team.main.description.${$deviceTranslationKey}`)}</p>
    </div>
    <div class="flex-1">
      <img src="wizard.png" alt="Wizard" class="max-h-[245px] md:max-h-[378px]" />
    </div>

    <!-- Emebllishments -->
    <!-- Left diamond -->
    <img src="diamond-lg.svg" alt="Star" class="absolute -left-6 bottom-[12rem]" />
    <!-- Right diamond -->
    <img src="diamond-lg.svg" alt="Star" class="absolute -right-6 bottom-[12rem]" />

    {#if !$isMobile}
      <!-- Left Magic Circle -->
      <img
        src="magic-graph-2.svg"
        alt="Magic Graph"
        class="absolute bottom-[-9rem] left-[-9rem] text-shire opacity-40 md:block"
      />
      <!-- Right Magic Circle -->
      <img
        src="magic-graph-2.svg"
        alt="Magic Graph"
        class="absolute right-[-10rem] hidden w-2/5 max-w-[31rem] opacity-40 md:block"
      />
    {/if}
  </div>
</GreenBox>

<GreenSustainableBox />

<!-- Team -->
<GreenBox class="bg-footerbg">
  <div
    class="xxs:grid-cols-2 container mx-auto grid grid-cols-2 justify-between justify-items-center gap-4 px-2 py-0 md:gap-8 md:p-4 lg:grid-cols-3 lg:p-6 xl:grid-cols-4"
  >
    {#each team as { name, companionUri, profileUri, profilePosition, linkedinUri }}
      <div class="flex flex-col">
        <div class="relative w-fit">
          <img
            class={`h-[151px] w-[99px] rounded-md border border-void object-cover md:h-[307px] md:w-[255px] xl:h-[337px] xl:w-[280px]`}
            src={companionUri || '/team/placeholder.jpg'}
            alt={`${name} Companion`}
          />
          <a href={linkedinUri} target="_blank" rel="noopener noreferrer">
            <img
              class={`absolute -right-0 bottom-0 h-[46px] w-[46px] object-cover md:-right-10 md:h-[150px] md:w-[150px] xl:h-[180px] xl:w-[180px] ${getProfilePositionClasses(profilePosition)}`}
              src={profileUri}
              alt={`${name} Profile`}
            />
          </a>
        </div>
        <p>{name}</p>
      </div>
    {/each}
  </div>
</GreenBox>

<EquipmentSection />
