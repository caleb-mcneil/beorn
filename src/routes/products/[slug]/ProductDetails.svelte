<script lang="ts">
    import type { Product } from "$lib/products";

    export let product: Product;
</script>

<section>
    <div
        class="mx-auto gap-x-8 px-4 pb-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8"
    >
        <div class="flex flex-wrap gap-4 mb-4">
            <img alt="primary" class="basis-1/4" src={product.image} />
            <div class="basis-1/3 grow">
                <div class="max-w-[35ch] space-y-2">
                    <h1 class="text-xl font-bold sm:text-2xl">
                        {product.title}
                    </h1>
                </div>
                <p class="text-lg font-bold">{product.price}</p>
                <p class="mt-4 text-gray-500">{product.description}</p>
            </div>
            <div class="basis-1/4 grow-1/2">
                <table>
                    {#each [...product.stats] as [key, value]}
                        <tr>
                            <td class="py-2 px-4 border border-gray-300"
                                >{key}</td
                            >
                            <td class="py-2 px-4 border border-gray-300"
                                >{value}</td
                            >
                        </tr>
                    {/each}
                </table>
            </div>
        </div>

        <div class="container mx-auto px-5 py-2 mt-8">
            <div class="-m-1 flex flex-wrap md:-m-2">
                <div class="flex sm:1/1 md:w-1/2 flex-wrap">
                    {#each product.images as image, index}
                        {#if index % 2 == 0}
                            <div class="w-full p-1 md:p-2">
                                <img
                                    alt="additional"
                                    class="block h-full w-full rounded-sm object-cover object-center"
                                    src={image}
                                />
                            </div>
                        {/if}
                    {/each}
                </div>
                <div class="flex sm:1/1 md:w-1/2 flex-wrap">
                    {#each product.images as image, index}
                        {#if index % 2 == 1}
                            <div class="w-full p-1 md:p-2">
                                <img
                                    alt="additional"
                                    class="block h-full w-full rounded-sm object-cover object-center"
                                    src={image}
                                />
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
