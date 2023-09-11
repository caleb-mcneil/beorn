<script lang="ts">
    import { productsBySlug, type Product } from "$lib/products";
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

                <div class="mt-4 mb-4">
                    <div class="prose max-w-none text-justify">
                        <p>{product.description}</p>
                    </div>
                </div>
                <div class="mt-4 mb-4">
                    <div class="prose max-w-none text-justify">
                        <p>
                            <b>Disclaimer:</b> All excavators come with a single
                            toothed bucket. The thumb, quick connect adapter, or
                            other attachments that are shown are only for display
                            purposes. All custom ordered and back order equipment
                            has a lead time of 60 days or more.
                        </p>
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
                {#if product.compatibleProducts}
                    <h1 class="text-xl font-bold sm:text-2xl py-4">
                        Compatible Products
                    </h1>
                    <div>
                        <table>
                            {#each product.compatibleProducts as compatibleProduct}
                                <tr>
                                    <a
                                        target="_self"
                                        href={`${compatibleProduct}`}
                                        ><div
                                            class="border px-4 py-2 text-blue-600 hover:underline hover:text-blue-800"
                                        >
                                            {productsBySlug.get(
                                                compatibleProduct
                                            )?.title}
                                        </div></a
                                    >
                                </tr>
                            {/each}
                        </table>
                    </div>
                {/if}
            </div>
        </div>
        {#if product.video}
            <div class="h-96 w-full md:w-1/1 xl:w-1/2 py-6">
                <p class="text-xl font-bold sm:text-2xl">Video Demo</p>
                <iframe
                    class="w-full h-full object-cover"
                    title="Video Demo"
                    src={product.video}
                    frameborder="0"
                    allowfullscreen
                />
            </div>
        {/if}
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
        <div class="prose max-w-none text-justify text-xs mt-8">
            <p>
                <b>Safety Warning:</b> Improper use of the equipment can lead to
                severe injury and death. Equipment is to be operated exclusively
                by a trained individual over the age of 18. Personal protective equipment
                such as hard hats, high visibility safety vests, eye protection,
                hearing protection, and steel toe boots are required. The purchaser
                or any operator of any equipment sold, rented, or in any other capacity
                associated with Beorn LLC. or its members is responsible for any
                property damage, individual harm, burns, electrocution, or other
                physical injury that results from the use of said equipment in any
                way shape or form. Before any digging is performed on a site a survey
                must be done by all relevant utility companies to ensure that all
                utilities are clearly marked and proper steps are taken to prevent
                the damage of said utilities or underground structures.
            </p>
        </div>
    </div>
</section>
