<script lang="ts">
    import type { Product } from "$lib/products";

    export let product: Product;
</script>

<section>
    <div class="relative mx-auto max-w-screen-xl px-4 py-8">
        <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img
                    alt="primary"
                    src={product.image}
                    class="aspect-square w-full rounded-xl object-cover"
                />

                <div class="grid grid-cols-2 gap-4 lg:mt-4">
                    {#each product.images as image}
                        <img
                            alt="additional"
                            src={image}
                            class="aspect-square w-full rounded-xl object-cover"
                        />
                    {/each}
                </div>
            </div>

            <div class="sticky top-0">
                <div class="mt-8 flex justify-between">
                    <div class="max-w-[35ch] space-y-2">
                        <h1 class="text-xl font-bold sm:text-2xl">
                            {product.title}
                        </h1>
                    </div>

                    <p class="text-lg font-bold">{product.price}</p>
                </div>

                <div class="mt-4 mb-6">
                    <div class="prose max-w-none">
                        <p>{product.description}</p>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="">
                        <tbody>
                            {#each [...product.stats] as [key, value]}
                                <tr>
                                    <td
                                        class="border whitespace-nowrap px-4 py-2 text-gray-700"
                                    >
                                        {key}
                                    </td>
                                    <td
                                        class="border whitespace-nowrap px-4 py-2 text-gray-700"
                                        >{value}</td
                                    >
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
