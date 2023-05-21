<script lang="ts">
    import type { Product } from "$lib/products";

    export let product: Product;
</script>

<section>
    <div class="relative mx-auto max-w-screen-xl px-4 py-8">
        <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
                <img
                    alt="primary"
                    src={product.image}
                    class="aspect-square w-full object-cover"
                />
            </div>

            <div>
                <div class="mt-8 flex justify-between">
                    <div class="max-w-[35ch] space-y-2">
                        <h1 class="text-xl font-bold sm:text-2xl">
                            {product.title}
                        </h1>
                    </div>

                    <p class="text-lg font-bold">{product.price}</p>
                </div>

                <div class="mt-4 mb-6">
                    <div class="prose max-w-none text-justify">
                        <p>{product.description}</p>
                    </div>
                </div>
                <div>
                    <table>
                        {#each [...product.stats] as [key, value]}
                            <tr>
                                <td class="border px-4 py-2 text-gray-700"
                                    >{key}</td
                                >
                                <td class="border px-4 py-2 text-gray-700"
                                    >{value}</td
                                >
                            </tr>
                        {/each}
                    </table>
                </div>
            </div>
        </div>
        <div
            class="grid gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
            {#each product.images as image}
                <img
                    alt="additional"
                    src={image}
                    class=" w-full object-cover"
                />
            {/each}
        </div>
    </div>
</section>
