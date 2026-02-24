import fs from "fs";
import path from "path";

export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  status: string;
  date: string;
  logoPath: string | null;
  capturePath: string | null;
  problem: string;
  description: string;
  happyCaseSteps: string[];
  videoUrl: string;
  accessUrl: string;
  price?: string;
  priceCurrency?: string;
}

const productsDir = path.join(process.cwd(), "src/products");

function parseDetailMd(content: string): Omit<Product, "slug" | "logoPath" | "capturePath"> {
  const sections: Record<string, string> = {};
  let currentKey = "";

  for (const line of content.split("\n")) {
    const heading = line.match(/^## (.+)/);
    if (heading) {
      currentKey = heading[1].trim();
      sections[currentKey] = "";
    } else if (currentKey) {
      sections[currentKey] += line + "\n";
    }
  }

  const trim = (key: string) => (sections[key] || "").trim();

  const happyCase = trim("Happy Case Scenario") || trim("Happy Case Senario");
  const steps = happyCase
    .split("\n")
    .map((l) => l.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);

  return {
    name: trim("Name"),
    subtitle: trim("Subtitle"),
    status: trim("Status"),
    date: trim("Date"),
    problem: trim("Problem"),
    description: trim("Description"),
    happyCaseSteps: steps,
    videoUrl: trim("Video"),
    accessUrl: trim("Access"),
    price: trim("Price") || undefined,
    priceCurrency: trim("Price Currency") || undefined,
  };
}

function resolveImagePath(slug: string, filename: string): string | null {
  const srcPath = path.join(productsDir, slug, filename);
  if (fs.existsSync(srcPath)) {
    return `/products/${slug}/${filename}`;
  }
  return null;
}

export function getAllProducts(): Product[] {
  const dirs = fs
    .readdirSync(productsDir)
    .filter((d) => fs.statSync(path.join(productsDir, d)).isDirectory())
    .sort();

  return dirs.map((slug) => {
    const content = fs.readFileSync(path.join(productsDir, slug, "detail.md"), "utf-8");
    const parsed = parseDetailMd(content);
    return {
      slug,
      ...parsed,
      logoPath: resolveImagePath(slug, "logo.png"),
      capturePath: resolveImagePath(slug, "capture.png"),
    };
  });
}

export function getProductBySlug(slug: string): Product | null {
  const detailPath = path.join(productsDir, slug, "detail.md");
  if (!fs.existsSync(detailPath)) return null;

  const content = fs.readFileSync(detailPath, "utf-8");
  const parsed = parseDetailMd(content);
  return {
    slug,
    ...parsed,
    logoPath: resolveImagePath(slug, "logo.png"),
    capturePath: resolveImagePath(slug, "capture.png"),
  };
}
