// Load all images. The name convention is:
// * `images/<product.slug>/0.png` : primary images
// * `images/<product.slug>/#.png` : additional images
const images = import.meta.glob("$lib/images/**/*.png", {
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
  // Short form key,value stats
  stats: Map<string, string>;
  // Stripe link
  stripe_link: string;
  // id to make custom links
  price_id: string;
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
  stripe_link: string;
  price_id: string;

  constructor(product: ProductData) {
    this.title = product.title;
    this.slug = product.slug;
    this.price = product.price;
    this.description = product.description;
    this.stats = product.stats;
    this.image = images[`/src/lib/images/${this.slug}/0.png`];
    this.images = [];
    for (const name in images) {
      if (
        name.startsWith(`/src/lib/images/${this.slug}/`) &&
        !name.endsWith("/0.png")
      ) {
        this.images.push(images[name]);
      }
    }
    this.stripe_link = product.stripe_link;
    this.price_id = product.price_id;
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
