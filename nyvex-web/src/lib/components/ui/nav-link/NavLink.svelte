<script lang="ts">
	interface Props {
		href: string;
		label: string;
		active?: boolean;
	}

	let { href, label, active = false }: Props = $props();
</script>

<a
	href={href}
	class="{active
		? 'text-nyvex-text-primary'
		: 'text-nyvex-text-secondary'} text-sm hover:text-nyvex-primary transition-colors sm:text-base"
>
	{label}
</a>
