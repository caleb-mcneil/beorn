<script lang="ts">
    import { products } from "$lib/products";
    import Video from "./Video.svelte";
</script>

<title>Beorn LLC: Videos</title>

<section id="products" class="bg-white">
    <div class="container mx-auto flex flex-wrap pb-12">
        {#each products as product}
            {#if product.video}
                <Video title="{product.title} Demo" link={product.video} />
            {/if}
        {/each}
    </div>
</section>
