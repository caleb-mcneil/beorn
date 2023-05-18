<script lang="ts">
import type {
    Product
} from "$lib/products";

export let product: Product;
</script>

<!-- TODO: make this look nice -->
<div class="bg-white">
    <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.title}</h2>
            <p class="mt-4 text-gray-500">{product.description}</p>
            <dl class="mt-16 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-y-16 lg:gap-x-8">
                <div class="border-t border-gray-200 pt-4">
                    <dt class="font-medium text-gray-900">Price</dt>
                    <dd class="mt-2 text-sm text-gray-500">{product.price}</dd>
                </div>
                {#each [...product.stats] as [key, value]}
                <div class="border-t border-gray-200 pt-4">
                    <dt class="font-medium text-gray-900">{key}</dt>
                    <dd class="mt-2 text-sm text-gray-500">{value}</dd>
                </div>
                {/each}
            </dl>
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
</div>

<!-- <div class="container mx-auto px-5 py-2">
    <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex sm:1/1 md:w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                    />
            </div>
            <div class="w-1/2 p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                    />
            </div>
            <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    />
            </div>
        </div>
        <div class="flex sm:1/1 md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                    />
            </div>
            <div class="w-1/2 p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                    />
            </div>
            <div class="w-1/2 p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                    />
            </div>
        </div>
    </div>
</div> -->

<!-- <div class="container mx-auto">
    <div class="px-4 sm:px-0">
      <h3 class="text-base font-semibold leading-7 text-gray-900">Vehicle Information</h3>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
        </div>

      </dl>
    </div>
</div> -->
<!--
  <div class="container mx-auto">
    <p>{product.title}</p>
    <p>{product.slug}</p>
    <p>{product.image}</p>
    <p>{product.price}</p>
    <p>{product.description}</p>
    <p>{product.stats}</p>
    <p>{product.images}</p>
</div>
-->
