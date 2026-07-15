import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/seo/schemas";
import { SITE_URL } from "@/lib/seo/constants";

interface BreadcrumbsProps {
  items: { label: string; href: string }[];
}

/**
 * Renders visual breadcrumb navigation with BreadcrumbList schema.
 * The "Home" crumb is added automatically.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems: BreadcrumbItem[] = [
    { name: "Home", url: SITE_URL },
    ...items.map((item) => ({
      name: item.label,
      url: `${SITE_URL}${item.href}`,
    })),
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm text-on-surface-variant">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <span className="text-gray-400">/</span>
              {index === items.length - 1 ? (
                <span className="text-on-surface font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-accent transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
