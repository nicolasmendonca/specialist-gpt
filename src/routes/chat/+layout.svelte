<script>
	import { page } from '$app/stores';
</script>

<!-- Force re-mounting the route if the role changes -->
<!-- This forces resetting the initial messages given to ai -->
{#key $page.params.role}
    <slot />
{/key}