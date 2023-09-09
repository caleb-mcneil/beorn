<script lang="ts">
    import { products } from "$lib/products";
    import ProductLink from "./ProductLink.svelte";
    const images = import.meta.glob("$lib/images/lineup/*.webp", {
        import: "default",
        eager: true,
    });
    const lineupImage: any = images[`/src/lib/images/lineup/002.webp`];
</script>

<title>Beorn LLC</title>

<!-- hero image -->
<section
    class="w-full mx-auto flex py-6 md:py-6 md:items-center bg-amber-200"
    style="max-width:1600px;"
>
    <div class="flex flex-wrap px-6">
        <div
            class="flex flex-col w-full md:w-1/2 justify-center items-center tracking-wide"
        >
            <h1 class="text-black text-3xl">Excavators and More</h1>
            <div>
                <a
                    class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#products">Products</a
                >
                <span class="text-xl">|</span>
                <a
                    class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="videos">See them in action</a
                >
            </div>
        </div>
        <img
            class="py-6 md:w-1/2 h-auto w-full"
            src={lineupImage}
            alt={"line up of equipment"}
        />
    </div>
</section>

<!-- products -->
<section id="products" class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        {#each products as product}
            <ProductLink {product} />
        {/each}
    </div>
</section>
