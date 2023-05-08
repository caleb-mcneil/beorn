<script lang="ts">
    export let title: string;
    export let image: string;
    export let price: string;
</script>

<div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
    <!-- TODO: this needs to be generated from the title -->
    <a href="/products/medium-excavator">
        <img class="hover:grow hover:shadow-lg" src={image} alt={title} />
        <div class="pt-3 flex items-center justify-between">
            <p class="">{title}</p>
            <p class="pt-1 text-gray-900">{price}</p>
        </div>
    </a>
</div>

<style lang="postcss">
    .hover\:grow {
        transition: all 0.3s;
        transform: scale(1);
    }

    .hover\:grow:hover {
        transform: scale(1.02);
    }
</style>
