<script lang="ts">
    export let title: string;
    export let image: string;
    export let price: string;
    export let description: string;
    export let stats: Map<string, string>;
    export let images: Array<string>;
</script>

<!-- TODO: make this look nice -->
<div class="container mx-auto">
    <p>{title}</p>
    <p>{image}</p>
    <p>{price}</p>
    <p>{description}</p>
    <p>{stats}</p>
    <p>{images}</p>
</div>
