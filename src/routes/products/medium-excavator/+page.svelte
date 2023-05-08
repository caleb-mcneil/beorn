<script lang="ts">
    import Product from "../Product.svelte";

    const product = {
        title: "Medium Excavator",
        src: "https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
        price: "$14.99",
        image: "https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
        description: "Some description",
        stats: new Map<string, string>([
            ["one", "1"],
            ["two", "2"],
            ["three", "3"],
        ]),
        images: ["image1"],
    };
</script>

<!-- TODO: seems there should be a better way to do this so we dont need to make a folder for every product -->
<Product {...product} />
