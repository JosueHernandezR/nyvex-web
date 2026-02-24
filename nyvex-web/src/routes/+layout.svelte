<script lang="ts">
	import './layout.css';
	import { AppLayout } from '$lib/components';

	let { children } = $props();
</script>

<AppLayout>{@render children()}</AppLayout>
