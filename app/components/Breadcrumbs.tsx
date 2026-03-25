import Link from "next/link";
import { generateBreadcrumbSchema } from "./SchemaMarkup";

const baseUrl = "https://roof-insulation-dublin-dublin.vercel.app";

export default function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const schemaItems = [{ name: "Home", url: baseUrl }, ...items.map((i) => ({ name: i.name, url: `${baseUrl}${i.href}` }))];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(schemaItems)) }} />
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 py-4 text-sm text-on-surface-variant">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              {i === items.length - 1 ? (
                <span className="text-on-surface font-medium">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors">{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
