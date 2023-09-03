// Load all images. The name convention is:
// * `images/<product.slug>/0.png` : primary images
// * `images/<product.slug>/#.png` : additional images
const images = import.meta.glob("$lib/images/**/*.png", {
  import: "default",
  eager: true,
});
const data = import.meta.glob("$lib/table_data/*.csv", {
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
const productsData: ProductData[] = [
  {
    title: "DC08",
    slug: "dc08",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "SE08",
    slug: "se08",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "SE10",
    slug: "se10",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "SE10P",
    slug: "se10p",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "SE17",
    slug: "se17",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "SE17P",
    slug: "se17p",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "R14",
    slug: "r14",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "RSB30",
    slug: "rsb30",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "SB24",
    slug: "sb24",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "SQC01",
    slug: "sqc01",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "TB06",
    slug: "tb06",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "TB08",
    slug: "tb08",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "SP25MM01",
    slug: "sp25mm01",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
  {
    title: "TP25MM01",
    slug: "tp25mm01",
    description: "some description",
    stats: new Map<string, string>([
      ["Brand", "Sigma"],
      ["Focal Length Description", "Standard Zoom"],
      ["Lens Type", "Standard"],
      ["Compatible Mountings", "Sony E"],
      ["Camera Lens Description", "70 mm"],
    ]),
    price: "$7999.99",
    stripe_link: "https://buy.stripe.com/test_4gwaET12p1nZ6kM5kk",
    price_id: "",
  },
];

function returnStats(slug: string) {
  const map = new Map();
  let text = data[`/src/lib/table_data/${slug}.csv`];
  let lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const [key, value] = lines[i].split(",");
    map.set(key, value);
  }
  return map;
}

// Convert from the ProductData interface to the Product class
export const products: Product[] = [];
export const productsBySlug: Map<string, Product> = new Map();
for (const product of productsData) {
  const p = new Product(product);
  products.push(p);
  productsBySlug.set(p.slug, p);
}
