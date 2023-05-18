// Load all images. The name convention is:
// * `images/<product.slug>/0.jpg` : primary images
// * `images/<product.slug>/#.jpg` : additional images
const images = import.meta.glob("$lib/images/**/*.jpg", {
    import: "default",
    eager: true,
});

// Data to describe a product
interface ProductData {
    // Title visible in UI
    title: string;
    // Slug to lookup images and url path. Must be unique.
    slug: string;
    // Price of the product
    price: string;
    // Long form description of the product
    description: string;
    // Short form key,value stats
    stats: Map<string, string>;
}

// Enriched `Product` class that adds additional fields/methods to `ProductData`
export class Product {
    title: string;
    slug: string;
    price: string;
    description: string;
    stats: Map<string, string>;
    // TODO: what is the type of images
    image: any;
    images: Array<any>;

    constructor(product: ProductData) {
        this.title = product.title;
        this.slug = product.slug;
        this.price = product.price;
        this.description = product.description;
        this.stats = product.stats;
        this.image = images[`/src/lib/images/${this.slug}/0.jpg`];
        this.images = [];
        for (const name in images) {
            if (
                name.startsWith(`/src/lib/images/${this.slug}/`) &&
                !name.endsWith("/0.jpg")
            ) {
                this.images.push(images[name]);
            }
        }
    }
}

// List of all the products
const productsData: ProductData[] = [
    {
        title: "Camera Lens",
        slug: "camera-lens",
        description: "some description",
        stats: new Map<string, string>([
            ["horsepower", "1000"],
            ["key2", "value2"],
            ["key3", "value2"],
            ["key4", "value2"],
            ["key5", "value2"],
            ["key6", "value2"],
        ]),
        price: "$14.99",
    },
    {
        title: "Coffee",
        slug: "coffee",
        description: "some description",
        stats: new Map(),
        price: "$14.99",
    },
    {
        title: "Coffee and Cookies",
        slug: "coffee-and-cookies",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
    {
        title: "Desk",
        slug: "desk",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
    {
        title: "Dice",
        slug: "dice",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
    {
        title: "Top",
        slug: "top",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
    {
        title: "Travel Cup #1",
        slug: "travel-cup",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
    {
        title: "Type Writer",
        slug: "type-writer",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
];

// Convert from the ProductData interface to the Product class
export const products: Product[] = [];
export const productsBySlug: Map<string, Product> = new Map();
for (const product of productsData) {
    const p = new Product(product);
    products.push(p);
    productsBySlug.set(p.slug, p);
}
