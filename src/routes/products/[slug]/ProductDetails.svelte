<script lang="ts">
    import type { Product } from "$lib/products";

    export let product: Product;
</script>

<div
    class="mx-auto gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8"
>
    <div class="flex flex-wrap gap-4">
        <img alt="primary" class="basis-1/4" src={product.image} />
        <div class="basis-1/3 grow">
            <h2
                class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
                {product.title}
            </h2>
            <h4>{product.price}</h4>

            <p class="mt-4 text-gray-500">
                {product.description}
            </p>
        </div>
        <div class="basis-1/4">
            <table>
                {#each [...product.stats] as [key, value]}
                    <tr>
                        <td class="py-2 px-4 border border-gray-300">{key}</td>
                        <td class="py-2 px-4 border border-gray-300">{value}</td
                        >
                    </tr>
                {/each}
            </table>
        </div>
    </div>

    <div class="container mx-auto px-5 py-2">
        <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex sm:1/1 md:w-1/2 flex-wrap">
                {#each product.images as image, index}
                    {#if index % 2 == 0}
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
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
                                alt="gallery"
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
