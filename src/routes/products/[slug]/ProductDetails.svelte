<script lang="ts">
    import type { Product } from "$lib/products";
    import Video from "../../videos/Video.svelte";

    export let product: Product;
</script>

<section>
    <div class="relative mx-auto max-w-screen-xl px-4 py-8">
        <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
                <img
                    alt="primary"
                    src={product.image}
                    class="aspect-square w-full object-cover bg-slate-100"
                />
                <a
                    href="tel:314-514-5969"
                    class="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded text-center"
                >
                    Call or Text to Buy: 314-514-5969
                </a>

                <a
                    href="mailto:beornllc@gmail.com"
                    class="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded text-center"
                >
                    Email to Buy: beornllc@gmail.com
                </a>
            </div>

            <div>
                <div class="mt-0 md:flex justify-between">
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
        <Video title="Video Demo" link={product.video} />
        <div
            class="grid gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
            {#each product.images as image}
                <img
                    alt="additional"
                    src={image}
                    class=" w-full object-cover bg-slate-100"
                />
            {/each}
        </div>
    </div>
</section>
