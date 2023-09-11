// Load all images. The name convention is:
// * `images/<product.slug>/00.webp` : primary images
// * `images/<product.slug>/##.webp` : additional images
const images = import.meta.glob("$lib/images/**/*.webp", {
  import: "default",
  eager: true,
});
const json_file = import.meta.glob("$lib/json_data/products.json", {
  as: "raw",
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
  // Link to an embedded video
  video: string;
  // Short form key,value stats
  stats: Map<string, string>;
  // Array of compatible product slugs
  compatibleProducts: string[];
}

// Enriched `Product` class that adds additional fields/methods to `ProductData`
export class Product {
  title: string;
  slug: string;
  price: string;
  description: string;
  disclaimer: string;
  safety_warning: string;
  video: string;
  stats: Map<string, string>;
  compatibleProducts: string[];
  // TODO: what is the type of images
  image: any;
  images: Array<any>;

  constructor(product: ProductData) {
    this.title = product.title;
    this.slug = product.slug;
    this.price = product.price;
    this.description = product.description;
    this.disclaimer = product.disclaimer;
    this.safety_warning = product.safety_warning;
    this.video = product.video;
    this.stats = product.stats;
    this.compatibleProducts = product.compatibleProducts;
    this.image = images[`/src/lib/images/${this.slug}/00.webp`];
    this.images = [];
    for (const name in images) {
      if (
        name.startsWith(`/src/lib/images/${this.slug}/`) &&
        !name.endsWith("/00.webp")
      ) {
        this.images.push(images[name]);
      }
    }
  }
}

// List of all the products
const productsData: ProductData[] = JSON.parse(json_file[`/src/lib/json_data/products.json`]);
productsData.forEach(product => {
  product.stats = new Map(Object.entries(product.stats));
});

// Convert from the ProductData interface to the Product class
export const products: Product[] = [];
export const productsBySlug: Map<string, Product> = new Map();
for (const product of productsData) {
  const p = new Product(product);
  products.push(p);
  productsBySlug.set(p.slug, p);
}
