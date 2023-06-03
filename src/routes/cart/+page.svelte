<script lang="ts">
    // function printCart() {
    //     console.log(localStorage)
    // }

    function loadLocalStorage() {
        // let cart = new Map();
        // for (let i = 0; i < localStorage.length; i++) {
        //     let key = localStorage.key(i);
        //     cart.set(key, localStorage.getItem(key))
        // }
        // return cart;
        if (localStorage != null) {
            return Object.entries(localStorage);
        }
        else {
            return [];
        }
    }
</script>

<section>
    <h1>
        Cart
    </h1>
    {#each loadLocalStorage() as [key, value]}
        <p>
            {key}{value}
        </p>
    {/each}
</section>
