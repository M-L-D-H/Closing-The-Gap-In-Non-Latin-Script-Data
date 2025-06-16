<script lang="ts">
	import { onMount } from 'svelte';

	// Define rough types for conference and publication data
	type ConferenceRow = {
		Type: 'Conference';
		'Name of conference': string;
		Location: string;
		Date: string;
		'Lecture time': string;
		'Lecture title': string;
		Link: string;
	};

	type Conference = {
		name: string;
		location: string;
		date: string;
		time: string;
		title: string;
		link: string;
		rawDate: Date;
	};

	type PublicationRow = {
		Type: 'Publication';
		Title: string;
		Author: string;
		Year: string;
		Link: string;
	};

	type Publication = {
		title: string;
		author: string;
		year: string;
		link: string;
	};

	type DataRow = ConferenceRow | PublicationRow;

	let upcoming: Conference[] = [];
	let past: Conference[] = [];
	let publications: Publication[] = [];

	const API_URL = 'https://api.sheetbest.com/sheets/ebb6f083-a7a1-49c1-ae15-9f2739cd389e';

	function parseStartDate(dateStr: string): Date | null {
		const first = dateStr.split(/[-–—]/)[0].trim();
		const [d, m, y] = first.split('.');
		const dt = new Date(`${y}-${m}-${d}`);
		return isNaN(dt.getTime()) ? null : dt;
	}

	function isConference(row: DataRow): row is ConferenceRow {
		return row.Type?.toLowerCase() === 'conference';
	}

	function isPublication(row: DataRow): row is PublicationRow {
		return row.Type?.toLowerCase() === 'publication';
	}

	onMount(async () => {
		try {
			const res = await fetch(API_URL);
			const data: DataRow[] = await res.json();
			const today = new Date();

			const allConfs: Conference[] = data
				.filter(isConference)
				.map((c) => {
					const rawDate = parseStartDate(c.Date);
					if (!rawDate) return null;
					return {
						name: c['Name of conference'],
						location: c.Location,
						date: c.Date,
						time: c['Lecture time'],
						title: c['Lecture title'],
						link: c.Link,
						rawDate
					};
				})
				.filter((c): c is Conference => c !== null)
				.sort((a, b) => a.rawDate.getTime() - b.rawDate.getTime());

			upcoming = allConfs.filter((c) => c.rawDate >= today);
			past = allConfs.filter((c) => c.rawDate < today);

			publications = data.filter(isPublication).map((p) => ({
				title: p.Title,
				author: p.Author,
				year: p.Year,
				link: p.Link
			}));
		} catch (err) {
			console.error('Error loading research data:', err);
		}
	});
</script>

<div class="flex justify-center px-4">
	<div class="mb-4 w-full max-w-6xl rounded-lg bg-ctgtan p-4">
		<h1 class="mb-3.5 border-b border-ctgblue pb-2 text-2xl font-medium">Our Research</h1>
		<p class="mb-6 text-gray-800">
			We catalog non-Latin-script DH projects while investigating their long-term sustainability.
			Our mixed-methods study uncovers concerning lifecycle patterns: most grant-funded projects
			vanish when funding ends, erasing valuable scholarship. We trace this “preservation gap” to
			institutional stewardship failures, inadequate archiving infrastructure, and evaluation
			metrics that favour traditional outputs. Finally, we propose a combined technical-and-policy
			framework — standardised metadata, automated pipelines, and revised incentive structures — to
			ensure enduring access to digital humanities data.
		</p>

		<!-- Upcoming Conferences -->
		<h2 class="mb-3.5 border-b border-ctgblue pb-2 text-xl font-medium">Upcoming Conferences</h2>
		{#if upcoming.length}
			<div class="mb-6 grid gap-4">
				{#each upcoming as c}
					<div class="rounded bg-white p-4 shadow">
						<p class="text-lg font-bold text-ctgblue">
							{#if c.link}
								<a href={c.link} target="_blank" rel="noopener noreferrer" class="hover:underline"
									>{c.name}</a
								>
							{:else}
								{c.name}
							{/if}
						</p>
						<p class="text-sm">{c.date} | {c.time} | {c.location}</p>
						<p class="mt-1 italic text-gray-700">{c.title}</p>
					</div>
				{/each}
			</div>
		{:else}
			<p class="mb-6 text-gray-600">No upcoming conferences.</p>
		{/if}

		<!-- Past Conferences -->
		<h2 class="mb-3.5 border-b border-ctgblue pb-2 text-xl font-medium">Past Conferences</h2>
		{#if past.length}
			<div class="mb-6 grid gap-4">
				{#each past as c}
					<div class="rounded bg-white p-4 shadow">
						<p class="text-lg font-bold text-gray-700">
							{#if c.link}
								<a href={c.link} target="_blank" rel="noopener noreferrer" class="hover:underline"
									>{c.name}</a
								>
							{:else}
								{c.name}
							{/if}
						</p>
						<p class="text-sm">{c.date} | {c.time} | {c.location}</p>
						<p class="mt-1 italic text-gray-700">{c.title}</p>
					</div>
				{/each}
			</div>
		{:else}
			<p class="mb-6 text-gray-600">No past conferences listed yet.</p>
		{/if}

		<!-- Publications -->
		<h2 class="mb-3.5 border-b border-ctgblue pb-2 text-xl font-medium">Publications</h2>
		{#if publications.length}
			<ul class="mb-6 list-disc space-y-2 pl-5">
				{#each publications as p}
					<li>
						<a href={p.link} target="_blank" class="text-ctgblue hover:underline">{p.title}</a>
						<span class="text-sm text-gray-600"> — {p.author} ({p.year})</span>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="text-gray-600">No publications to display yet.</p>
		{/if}
	</div>
</div>

<style>
	p,
	span {
		color: black;
	}
</style>
