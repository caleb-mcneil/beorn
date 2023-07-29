<script lang="ts">
    import { Product, products } from "$lib/products";

    function getProduct(slug: string) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].slug == slug) {
                return products[i];
            }
        }
    }

    let cart = new Map<Product, number>();
    let subtotal = Number(0);
    
    function loadCart() {
        cart = new Map();
        if (typeof localStorage !== "undefined") {
            for (let i = 0; i < localStorage.length; i++) {
                let slug = localStorage.key(i);
                if (slug !== null) {
                    let product = getProduct(slug);
                    if (product) {
                        cart.set(product, Number(localStorage.getItem(slug)))
                    }
                }
            }
        }
        calculateSubtotal()
    }
    
    function calculateSubtotal() {
        subtotal = 0;
        for (let [product, quantity] of cart.entries()) {
            let price = Number(product.price.substring(1));
            subtotal += price * quantity;
        };
        subtotal = Number(subtotal.toFixed(2))
    }

    function removeFromCart(slug: string) {
        localStorage.removeItem(slug)
        loadCart()
    }

    function makeBody() {
        let bodyString = "";
        let i = 0;
        cart.forEach(function(quantity, product) {
            bodyString += "line_items[" + i + "][price]=" + product.price_id + "&line_items[" + i + "][quantity]="+ quantity + "&"
            i = i + 1
        });
        return bodyString;
    }
    ``
    function onCheckout() {
        console.log(makeBody());
        fetch("https://api.stripe.com/v1/payment_links", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + btoa("cmtfdGVzdF81MU5GNzBvS2ZqTHdhc0RlZ09FcHZCbnNoT0k1QzNvdmFSakVTbVlpdmVxUlVrVEJQRjVhVk1mU2hySDlnNzlZR3JnTjFzdGNOSW4wV1pESnNKZnNEMm5lbjAwd1BEV2hXeWw="),
            },
            body: makeBody(),
        })
        .then(response => response.json())
        .then(body => window.location.replace(body.url));
        
    }

    loadCart()

</script>

<section class= "mx-auto px-6" style="max-width:600px">
    <h1 class="text-3xl font-large text-gray-900" id="slide-over-title">Shopping cart</h1>

    <div class="my-8">
        <div class="flow-root">
          <ul class="-my-6 divide-y divide-gray-200">
            {#each [...cart] as [product, value]}
                <li class="flex py-6">
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <a href="/products/{product.slug}">
                            <img src={product.image} alt="product" class="h-full w-full object-cover object-center aspect-square">
                        </a>
                    </div>
    
                    <div class="ml-4 flex flex-1 flex-col">
                    <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="/products/{product.slug}">{product.title}</a>
                        </h3>
                        <p class="ml-4">{product.price}</p>
                        </div>
                    </div>
                    <div class="flex flex-1 items-end justify-between text-sm">
                        <p class="text-gray-500">Qty {value}</p>
    
                        <div class="flex">
                        <button on:click={() => removeFromCart(product.slug)} type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                        </div>
                    </div>
                    </div>
                </li>
            {/each}
          </ul>
        </div>
      </div>



      <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div class="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>
        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div class="mt-6">
          <button on:click={onCheckout} class="flex items-center justify-center bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded text-center">Checkout</button>
        </div>
        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <a href="/#products" class="font-medium text-yellow-700 hover:text-yellow-500">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
    



    
</section>
