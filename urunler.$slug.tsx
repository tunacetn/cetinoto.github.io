import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  ChevronLeft,
  ShieldCheck,
  Truck,
  Package,
} from "lucide-react";

import { products, getProduct, type Product } from "@/data/products";
import { QuoteForm } from "@/components/QuoteForm";

const PHONE_DISPLAY = "0543 503 20 07";
const PHONE_TEL = "+905435032007";
const WA_BASE = "https://wa.me/905435032007?text=";

const waLink = (product: string) =>
  WA_BASE +
  encodeURIComponent(`Merhaba, "${product}" için fiyat ve stok bilgisi alabilir miyim?`);

export const Route = createFileRoute("/urunler/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Ürün bulunamadı | Çetin Otomatik Kapı" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.product;
    const title = `${p.title} | Çetin Otomatik Kapı Antalya`;
    return {
      meta: [
        { title },
        { name: "description", content: p.short },
        { property: "og:title", content: title },
        { property: "og:description", content: p.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-24 text-center">
      <h1 className="text-4xl">ÜRÜN BULUNAMADI</h1>
      <Link to="/urunler" className="mt-4 inline-block font-bold text-primary">
        Tüm ürünlere dön
      </Link>
    </div>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [active, setActive] = useState(0);
  const current = product.gallery[active] ?? product.gallery[0]!;
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/" className="leading-none">
            <span className="block font-display text-2xl tracking-wide">
              ÇETİN OTOMATİK KAPI
            </span>
            <span className="block text-xs font-medium text-muted-foreground">
              Antalya · Üretim & Servis
            </span>
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground md:inline-flex"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        <Link
          to="/urunler"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground"
        >
          <ChevronLeft className="h-4 w-4" /> Ürünler
        </Link>

        <div className="mt-4 grid gap-8 md:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-lg border border-border bg-card panel-shadow">
              <img
                src={current.src}
                alt={current.alt}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            {product.gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-3">
                {product.gallery.map((g, i) => (
                  <button
                    key={g.src}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`${product.title} fotoğraf ${i + 1}`}
                    aria-current={i === active}
                    className={`overflow-hidden rounded-md border-2 ${
                      i === active ? "border-primary" : "border-border"
                    }`}
                  >
                    <img
                      src={g.src}
                      alt={g.alt}
                      width={300}
                      height={225}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl md:text-5xl">{product.title}</h1>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {product.brands.map((b) => (
                <li
                  key={b}
                  className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground"
                >
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              {product.description.map((d) => (
                <p key={d.slice(0, 24)}>{d}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(product.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-bold text-whatsapp-foreground"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp'tan sipariş ver
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-border px-5 py-3 font-bold"
              >
                <Phone className="h-5 w-5" /> Ara
              </a>
              <a
                href="#teklif"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground"
              >
                Teklif iste
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Sepet yok — fiyat ve stok bilgisi için doğrudan bize ulaşın, aynı gün dönüş
              yapıyoruz.
            </p>
          </div>
        </div>

        {/* Specs */}
        <section className="mt-12">
          <h2 className="text-3xl md:text-4xl">TEKNİK BİLGİLER</h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-border bg-card panel-shadow">
            <dl>
              {product.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4 ${
                    i > 0 ? "border-t border-border" : ""
                  }`}
                >
                  <dt className="text-sm font-bold sm:w-52 sm:shrink-0">{s.label}</dt>
                  <dd className="text-sm text-muted-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Includes + guarantees */}
        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-5 panel-shadow">
            <Package className="h-6 w-6 text-primary" />
            <h3 className="mt-3 text-2xl">Set içeriği</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {product.includes.map((it) => (
                <li key={it}>• {it}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-5 panel-shadow">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <h3 className="mt-3 text-2xl">Orijinal & garantili</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Faturalı, orijinal ürün. Montaj ve motorlarda yazılı garanti.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5 panel-shadow">
            <Truck className="h-6 w-6 text-primary" />
            <h3 className="mt-3 text-2xl">Kargo & montaj</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Türkiye geneli kargo, Antalya içinde yerinde montaj imkânı.
            </p>
          </div>
        </section>

        <QuoteForm productTitle={product.title} />

        {/* Other products */}
        <section className="mt-12">
          <h2 className="text-3xl md:text-4xl">DİĞER ÜRÜNLER</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/urunler/$slug"
                params={{ slug: o.slug }}
                className="overflow-hidden rounded-lg border border-border bg-card panel-shadow"
              >
                <img
                  src={o.image}
                  alt={o.title}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-32 w-full object-cover"
                />
                <p className="p-4 text-lg font-bold">{o.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-steel py-8 text-steel-foreground">
        <div className="mx-auto max-w-5xl px-4">
          <p className="font-display text-2xl">ÇETİN OTOMATİK KAPI</p>
          <p className="mt-1 text-sm text-steel-foreground/70">
            Otomatik kapı üretimi, servisi ve yedek parça satışı · Kepez / Antalya
          </p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border bg-border md:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex items-center justify-center gap-2 bg-primary py-4 text-base font-bold text-primary-foreground"
        >
          <Phone className="h-5 w-5" /> Hemen Ara
        </a>
        <a
          href={waLink(product.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-whatsapp py-4 text-base font-bold text-whatsapp-foreground"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
