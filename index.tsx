import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Wrench,
  Zap,
  ChevronRight,
} from "lucide-react";

import heroDoor from "@/assets/hero-door.jpg";
import doorSliding from "@/assets/door-sliding.jpg";
import doorSectional from "@/assets/door-sectional.jpg";
import doorShutter from "@/assets/door-shutter.jpg";
import doorGate from "@/assets/door-gate.jpg";

const PHONE_DISPLAY = "0543 503 20 07";
const PHONE_TEL = "+905435032007";
const WHATSAPP = "https://wa.me/905435032007";
const ADDRESS =
  "Esentepe Mahallesi, Şehit Turgut Burkay Korkmaz Cad. No: 56, 07080 Kepez / Antalya";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Çetin Otomatik Kapı Kepez Antalya");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Çetin Otomatik Kapı | Antalya Otomatik Kapı Servisi 7/24" },
      {
        name: "description",
        content:
          "Antalya Kepez'de otomatik kapı üretimi, montajı ve 7/24 arıza servisi. Fotoselli kapı, seksiyonel garaj kapısı, kepenk ve bahçe kapısı. 0543 503 20 07",
      },
      { property: "og:title", content: "Çetin Otomatik Kapı | Antalya" },
      {
        property: "og:description",
        content:
          "Otomatik kapı üretimi, montaj ve 7/24 acil arıza servisi. Antalya ve tüm ilçeleri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Fotoselli Otomatik Kapı",
    image: doorSliding,
    text: "Mağaza, otel, hastane ve iş yerleri için sürgülü cam otomatik kapı sistemleri.",
  },
  {
    title: "Seksiyonel Garaj Kapısı",
    image: doorSectional,
    text: "Isı yalıtımlı panel garaj kapıları, uzaktan kumandalı motor sistemleri ile.",
  },
  {
    title: "Otomatik Kepenk",
    image: doorShutter,
    text: "Çelik ve alüminyum kepenk üretimi, motor değişimi ve acil kepenk açma.",
  },
  {
    title: "Bahçe & Site Kapısı",
    image: doorGate,
    text: "Raylı ve kanatlı bahçe kapıları, bariyer ve site giriş otomasyonu.",
  },
];

const features = [
  {
    icon: Zap,
    title: "7/24 Acil Servis",
    text: "Kapınız açılmıyorsa gece gündüz fark etmez, aynı gün müdahale ediyoruz.",
  },
  {
    icon: Wrench,
    title: "Kendi Üretimimiz",
    text: "Kapıyı biz üretiyoruz, biz monte ediyoruz. Aracı yok, fiyat net.",
  },
  {
    icon: ShieldCheck,
    title: "2 Yıl Garanti",
    text: "Montaj ve motor sistemlerinde yazılı garanti, ücretsiz periyodik bakım.",
  },
];

const areas = [
  "Kepez",
  "Muratpaşa",
  "Konyaaltı",
  "Döşemealtı",
  "Aksu",
  "Serik",
  "Manavgat",
  "Kemer",
];

function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border bg-border md:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex items-center justify-center gap-2 bg-primary py-4 text-base font-bold text-primary-foreground"
      >
        <Phone className="h-5 w-5" /> Hemen Ara
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-whatsapp py-4 text-base font-bold text-whatsapp-foreground"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#top" className="leading-none">
            <span className="block font-display text-2xl tracking-wide">
              ÇETİN OTOMATİK KAPI
            </span>
            <span className="block text-xs font-medium text-muted-foreground">
              Antalya · Üretim & Servis
            </span>
          </a>
          <div className="flex items-center gap-2">
            <Link
              to="/urunler"
              className="rounded-md border border-border px-3 py-2 text-sm font-bold"
            >
              Ürünler
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground md:inline-flex"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate">
          <img
            src={heroDoor}
            alt="Antalya'da monte edilmiş fotoselli otomatik cam kapı"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-steel/80" />
          <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-28">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-steel-foreground/10 px-3 py-1 text-xs font-semibold text-steel-foreground">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              5,0 puan · 22 değerlendirme
            </p>
            <h1 className="max-w-2xl text-5xl text-steel-foreground md:text-7xl">
              ANTALYA'DA OTOMATİK KAPI ÜRETİMİ VE 7/24 ARIZA SERVİSİ
            </h1>
            <p className="mt-4 max-w-xl text-base text-steel-foreground/80 md:text-lg">
              Fotoselli kapı, seksiyonel garaj kapısı, kepenk ve bahçe kapısı. Kendi
              atölyemizde üretiyor, Antalya'nın her ilçesine montaj ve bakım hizmeti
              veriyoruz.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-bold text-primary-foreground"
              >
                <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-steel-foreground/30 px-6 py-3 text-base font-bold text-steel-foreground"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp'tan yaz
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-steel-foreground/70">
              <Clock className="h-4 w-4" /> 24 saat açık · Aynı gün keşif ve fiyat
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-border bg-card p-5 panel-shadow"
              >
                <f.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-2xl">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="hizmetler" className="mx-auto max-w-5xl px-4 pb-12 md:pb-16">
          <h2 className="text-4xl md:text-5xl">HİZMETLERİMİZ</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Üretim, montaj, motor değişimi, arıza onarımı ve yıllık bakım.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className="overflow-hidden rounded-lg border border-border bg-card panel-shadow"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary"
                  >
                    Fiyat al <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Areas */}
        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <h2 className="text-3xl md:text-4xl">HİZMET BÖLGELERİ</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="iletisim" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-4xl md:text-5xl">İLETİŞİM</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a href={`tel:${PHONE_TEL}`} className="text-lg font-bold">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                    {ADDRESS}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>24 saat açık — hafta sonu dahil</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-bold text-whatsapp-foreground"
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-bold"
                >
                  <MapPin className="h-5 w-5" /> Yol tarifi
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-border panel-shadow">
              <iframe
                title="Çetin Otomatik Kapı konumu"
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                className="h-72 w-full md:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-steel py-8 text-steel-foreground">
        <div className="mx-auto max-w-5xl px-4">
          <p className="font-display text-2xl">ÇETİN OTOMATİK KAPI</p>
          <p className="mt-1 text-sm text-steel-foreground/70">
            Otomatik kapı üretimi ve servisi · Kepez / Antalya · {PHONE_DISPLAY}
          </p>
        </div>
      </footer>

      <CallBar />
    </div>
  );
}
