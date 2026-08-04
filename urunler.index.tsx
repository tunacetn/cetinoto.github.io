import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ChevronLeft, ShieldCheck, Truck } from "lucide-react";

import { products } from "@/data/products";

const PHONE_DISPLAY = "0543 503 20 07";
const PHONE_TEL = "+905435032007";
const WA_BASE = "https://wa.me/905435032007?text=";

const waLink = (product: string) =>
  WA_BASE + encodeURIComponent(`Merhaba, "${product}" için fiyat ve stok bilgisi alabilir miyim?`);

export const Route = createFileRoute("/urunler/")({
  head: () => ({
    meta: [
      { title: "Ürünler | LCF, BFT, Nice Motor ve Kumanda Satışı - Antalya" },
      {
        name: "description",
        content:
          "Antalya'da LCF, BFT ve Nice bahçe kapısı motoru, uzaktan kumanda, kepenk motoru ve fotoselli kapı kartı satışı. Sipariş için WhatsApp: 0543 503 20 07",
      },
      { property: "og:title", content: "Ürünler | Çetin Otomatik Kapı" },
      {
        property: "og:description",
        content:
          "LCF, BFT, Nice motorlar, kumandalar, kepenk motorları ve fotoselli kapı kartları. WhatsApp'tan sipariş verin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

function Products() {
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

      <main>
        <section className="border-b border-border bg-steel py-12 text-steel-foreground md:py-16">
          <div className="mx-auto max-w-5xl px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm text-steel-foreground/70"
            >
              <ChevronLeft className="h-4 w-4" /> Ana sayfa
            </Link>
            <h1 className="mt-3 text-5xl md:text-6xl">ÜRÜN SATIŞI</h1>
            <p className="mt-3 max-w-xl text-steel-foreground/80">
              LCF, BFT ve Nice marka bahçe kapısı motorları, kumandalar, kepenk
              motorları ve fotoselli kapı kartları. Sepet yok — sipariş ve fiyat için
              doğrudan WhatsApp'tan ulaşın, aynı gün dönüş yapıyoruz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink("Ürün satışı")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-6 py-3 font-bold text-whatsapp-foreground"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp'tan ulaşın
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-md border border-steel-foreground/30 px-6 py-3 font-bold text-steel-foreground"
              >
                <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <div className="grid gap-5 sm:grid-cols-2">
            {products.map((p) => (
              <article
                key={p.title}
                className="flex flex-col overflow-hidden rounded-lg border border-border bg-card panel-shadow"
              >
                <img
                  src={p.image}
                  alt={`${p.title} - ${p.brands.join(", ")}`}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-2xl">{p.title}</h2>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {p.brands.map((b) => (
                      <li
                        key={b}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.short}</p>
                  <Link
                    to="/urunler/$slug"
                    params={{ slug: p.slug }}
                    className="mt-3 inline-flex items-center justify-center rounded-md border border-border px-4 py-2.5 text-sm font-bold"
                  >
                    Detaylar ve teknik bilgiler
                  </Link>
                  <a
                    href={waLink(p.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 font-bold text-whatsapp-foreground"
                  >
                    <MessageCircle className="h-5 w-5" /> WhatsApp'tan sipariş ver
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5 panel-shadow">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-2xl">Orijinal ürün, garantili</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tüm motor ve kartlar orijinaldir, faturalı ve garantilidir.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 panel-shadow">
              <Truck className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-2xl">Kargo & montaj</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Türkiye geneli kargo, Antalya içinde yerinde montaj imkânı.
              </p>
            </div>
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
          href={waLink("Ürün satışı")}
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
