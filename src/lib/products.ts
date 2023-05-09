// Load all images. The name convention is:
// * `images/<product.id>/0.jpg` : primary images
// * `images/<product.id>/#.jpg` : additional images
const images = import.meta.glob('$lib/images/**/*.jpg', {
    import: 'default',
    eager: true
});

// Data to describe a product
interface ProductData {
    // Title visible in UI
    title: string,
    // ID to lookup images and url path. Must be unique.
    id: string,
    // Price of the product
    price: string,
    // Long form description of the product
    description: string,
    // Short form key,value stats 
    stats: Map<string, string>,
}

// List of all the products
const productsData: ProductData[] = [
    {
        title: "Camera Lens",
        id: "camera-lens",
        description: "some description",
        stats: new Map(),
        price: "$14.99",
    },
    {
        title: "Coffee",
        id: "coffee",
        description: "some description",
        stats: new Map(),
        price: "$14.99",
    },
    {
        title: "Coffee and Cookies",
        id: "coffee-and-cookies",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
    {
        title: "Desk",
        id: "desk",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
    {
        title: "Dice",
        id: "dice",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
    {
        title: "top",
        id: "top",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
    {
        title: "Travel Cup #1",
        id: "travel-cup",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
    {
        title: "Type Writer",
        id: "type-writer",
        description: "some description",
        stats: new Map(),
        price: "$9.99",
    },
]

// Enriched `Product` class that adds additional fields/methods to `ProductData`
export class Product {
    title: string;
    id: string;
    price: string;
    description: string;
    stats: Map<string, string>;
    // TODO: what is the type of images
    image: any;
    images: Array<any>;

    constructor(product: ProductData) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.description = product.description;
        this.stats = product.stats;
        this.image = images[`/src/lib/images/${this.id}/0.jpg`];
        // TODO: populate this with all the images
        this.images = [];
    }
}

// Convert from the ProductData interface to the Product class
export const products: Product[] = [];
export const productsById: Map<string, Product> = new Map();
for (const product of productsData) {
    const p = new Product(product);
    products.push(p);
    productsById.set(p.id, p)
}
