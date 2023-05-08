<script lang="ts">
    export let title: string;
    export let image: string;
    export let price: string;
    export let description: string;
    export let stats: Map<string, string>;
    export let images: Array<string>;
</script>

<!-- TODO: make this look nice -->
<div class="container mx-auto">
    <p>{title}</p>
    <p>{image}</p>
    <p>{price}</p>
    <p>{description}</p>
    <p>{stats}</p>
    <p>{images}</p>
</div>

<div class="container mx-auto px-5 py-2">
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
</div>

<div class="container mx-auto px-5 py-2">
    <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex sm:w-1/2 md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
            </div>
        </div>
        <div class="flex sm:w-1/2 md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
            </div>
        </div>
        <div class="flex sm:w-1/2 md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
            </div>
        </div>
        <div class="flex sm:w-1/2 md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
            </div>
        </div>
        <div class="flex sm:w-1/2 md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
                />
            </div>
        </div>
        <div class="flex sm:w-1/2 md:w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-sm object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
            </div>
        </div>
    </div>
</div>
