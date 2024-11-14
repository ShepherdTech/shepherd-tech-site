<script>
	import Button from '$components/Button.svelte';
	import { t } from '$lib/translations';
</script>

<div class="space-y-8 text-black">
	<section class="bg-stone-400">
		<div class="flex flex-col text-center">
			<h1>{$t('so_what.main.title.line1')}</h1>
			<h1>{$t('so_what.main.title.line2')}</h1>
			<h2>{$t('so_what.main.description')}</h2>
		</div>
	</section>

	<section class="bg-stone-400">
		<h1>{$t('so_what.benefits.title')}</h1>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<section class="flex flex-col items-center bg-gray-100 text-center">
				<img src="favicon.png" alt="logo" class="h-40 w-40" />
				<h3>{$t('so_what.benefits.items.costs.title')}</h3>
				<p>{$t('so_what.benefits.items.costs.description')}</p>
			</section>
			<section class="flex flex-col items-center bg-gray-100 text-center">
				<img src="favicon.png" alt="logo" class="h-40 w-40" />
				<h3>
					{$t('so_what.benefits.items.scalability.title')}
				</h3>
				<p>{$t('so_what.benefits.items.scalability.description')}</p>
			</section>
			<section class="flex flex-col items-center bg-gray-100 text-center">
				<img src="favicon.png" alt="logo" class="h-40 w-40" />
				<h3>{$t('so_what.benefits.items.performance.title')}</h3>
				<p>{$t('so_what.benefits.items.performance.description')}</p>
			</section>
		</div>
	</section>

	<section class="bg-stone-400">
		<h1>{$t('so_what.sustainability.title')}</h1>
		<div class="flex flex-col-reverse gap-4 md:flex-row md:gap-8">
			<!-- Image container -->
			<div class="w-full md:w-1/2">
				<img src="" alt="Cool pic here" class="h-40 w-40" />
			</div>

			<!-- List container -->
			<div class="w-full md:w-1/2">
				<ul class="space-y-2">
					<li>{$t('so_what.sustainability.keyPoints.eWaste.description')}</li>
					<li>{$t('so_what.sustainability.keyPoints.carbonFootprint.description')}</li>
					<li>{$t('so_what.sustainability.keyPoints.circularEconomy.description')}</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="bg-stone-400">
		<div class="flex min-h-[200px] flex-col">
			<!-- Content area -->
			<div class="flex-1">
				<h1>{$t('so_what.contact.title')}</h1>
			</div>

			<!-- Button container -->
			<div class="mt-4 flex justify-center md:justify-end">
				<Button>
					{$t('so_what.contact.cta')}
				</Button>
			</div>
		</div>
	</section>
</div>
