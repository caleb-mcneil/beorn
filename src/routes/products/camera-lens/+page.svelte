<script lang="ts">
    import { products, productsById } from "$lib/products";
    import ProductDetails from "../ProductDetails.svelte";

    // TODO: Remove the ! and actually handle the undefined case
    let product = productsById.get("camera-lens")!;
</script>

<!-- TODO: seems there should be a better way to do this so we dont need to make a folder for every product -->
<!-- I think we need to use paramaterized routing -->
<ProductDetails {product} />
