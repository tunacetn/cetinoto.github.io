import doorGate from "@/assets/door-gate.jpg";
import productRemote from "@/assets/product-remote.jpg";
import productShutterMotor from "@/assets/product-shutter-motor.jpg";
import productControlCard from "@/assets/product-control-card.jpg";
import gateMotorDetail from "@/assets/gate-motor-detail.jpg";
import remoteDetail from "@/assets/remote-detail.jpg";
import shutterMotorDetail from "@/assets/shutter-motor-detail.jpg";
import controlCardDetail from "@/assets/control-card-detail.jpg";
import doorShutter from "@/assets/door-shutter.jpg";
import doorSliding from "@/assets/door-sliding.jpg";

export type Product = {
  slug: string;
  title: string;
  short: string;
  brands: string[];
  image: string;
  gallery: { src: string; alt: string }[];
  description: string[];
  specs: { label: string; value: string }[];
  includes: string[];
};

export const products: Product[] = [
  {
    slug: "bahce-kapisi-motoru",
    title: "Bahçe Kapısı Motoru",
    short:
      "Raylı (sürgülü) ve kanatlı bahçe kapıları için orijinal motor setleri. Kapı ağırlığına göre uygun model önerisi yapıyoruz.",
    brands: ["LCF", "BFT", "Nice"],
    image: doorGate,
    gallery: [
      { src: gateMotorDetail, alt: "Sürgülü bahçe kapısı motoru beton kaide üzerinde" },
      { src: doorGate, alt: "Otomatik bahçe kapısı uygulaması" },
    ],
    description: [
      "LCF, BFT ve Nice marka bahçe kapısı motorları; hem sürgülü (raylı) hem de kanatlı kapılar için stoklarımızda mevcuttur. Motor seçimi kapı ağırlığı, kapı genişliği ve günlük kullanım sıklığına göre yapılır — yanlış tork seçimi motorun ömrünü kısaltır.",
      "Set içeriğine kontrol kartı, fotosel takımı ve kumanda dahildir. Antalya içinde yerinde montaj, Türkiye geneli kargo ile gönderim yapıyoruz.",
    ],
    specs: [
      { label: "Kapı tipi", value: "Sürgülü (raylı) / kanatlı" },
      { label: "Kapı ağırlığı", value: "400 kg – 1800 kg model seçeneği" },
      { label: "Besleme", value: "220V AC / 24V DC modeller" },
      { label: "Hız", value: "Yaklaşık 10–12 m/dk" },
      { label: "Kumanda", value: "433 MHz değişken kod" },
      { label: "Manuel açma", value: "Anahtarlı kurtarma sistemi" },
      { label: "Garanti", value: "2 yıl" },
    ],
    includes: ["Motor gövdesi", "Kontrol kartı", "Fotosel takımı", "2 adet kumanda", "Kremayer dişli"],
  },
  {
    slug: "uzaktan-kumanda",
    title: "Uzaktan Kumanda",
    short:
      "Sabit ve değişken kodlu kumandalar. Mevcut motorunuza uyumlu kumanda temini ve kod kopyalama.",
    brands: ["LCF", "BFT", "Nice"],
    image: productRemote,
    gallery: [
      { src: remoteDetail, alt: "Çeşitli otomatik kapı uzaktan kumandaları" },
      { src: productRemote, alt: "Otomatik kapı kumandası" },
    ],
    description: [
      "Bahçe kapısı, garaj kapısı ve kepenk sistemleri için 2 ve 4 tuşlu uzaktan kumandalar. Elinizdeki kumandanın markasını bilmiyorsanız fotoğrafını WhatsApp'tan gönderin, uyumlu modeli biz bulalım.",
      "Değişken kodlu (rolling code) kumandalarda kopyalama motor kartından yapılır; sabit kodlu kumandalar dükkânda anında kopyalanır.",
    ],
    specs: [
      { label: "Frekans", value: "433,92 MHz / 868 MHz" },
      { label: "Kod tipi", value: "Sabit kod ve değişken kod (rolling code)" },
      { label: "Tuş sayısı", value: "2 / 4 kanal" },
      { label: "Pil", value: "12V A23 veya CR2032" },
      { label: "Menzil", value: "Açık alanda 30–80 m" },
      { label: "Kopyalama", value: "Uyumlu modellerde ücretsiz" },
      { label: "Garanti", value: "1 yıl" },
    ],
    includes: ["Kumanda", "Pil takılı", "Anahtarlık askısı"],
  },
  {
    slug: "kepenk-motoru",
    title: "Kepenk Motoru",
    short:
      "Mağaza ve garaj kepenkleri için farklı tork seçenekleriyle motorlar, manuel kurtarma aparatı dahil.",
    brands: ["Tüp tip", "Yan motor"],
    image: productShutterMotor,
    gallery: [
      { src: shutterMotorDetail, alt: "Tüp tip kepenk motoru yakın çekim" },
      { src: productShutterMotor, alt: "Kepenk motoru" },
      { src: doorShutter, alt: "Otomatik kepenk uygulaması" },
    ],
    description: [
      "Mağaza kepenkleri için tüp tip (boru içi) motorlar ve ağır kepenkler için yan (zincirli) motorlar. Tork seçimi kepenk ağırlığı ve genişliğine göre hesaplanır; ölçüleri iletmeniz yeterli, uygun modeli biz belirleriz.",
      "Elektrik kesintisinde kepengi açabilmeniz için manuel kurtarma aparatı her motorla birlikte verilir. Arızalı motor değişimi için Antalya içinde aynı gün servis yapıyoruz.",
    ],
    specs: [
      { label: "Motor tipi", value: "Tüp tip (boru içi) / yan motor" },
      { label: "Tork", value: "100 Nm – 600 Nm seçenekleri" },
      { label: "Besleme", value: "220V AC" },
      { label: "Boru çapı", value: "60 mm / 70 mm / 102 mm" },
      { label: "Limit ayarı", value: "Mekanik limit switch" },
      { label: "Manuel kurtarma", value: "Zincir veya kollu aparat" },
      { label: "Garanti", value: "2 yıl" },
    ],
    includes: ["Motor", "Manuel kurtarma aparatı", "Anahtarlı buton", "Montaj braketleri"],
  },
  {
    slug: "fotoselli-kapi-karti",
    title: "Fotoselli Kapı Kartı",
    short:
      "Otomatik cam kapı kontrol kartları, fotosel takımları ve sensör yedek parçaları.",
    brands: ["Kontrol kartı", "Yedek parça"],
    image: productControlCard,
    gallery: [
      { src: controlCardDetail, alt: "Fotoselli kapı kontrol kartı ve klemensler" },
      { src: productControlCard, alt: "Otomatik kapı kontrol kartı" },
      { src: doorSliding, alt: "Fotoselli otomatik cam kapı" },
    ],
    description: [
      "Otomatik cam kapılarda kapı açılmıyor, sürekli açık kalıyor veya sensör algılamıyorsa sorun çoğunlukla kontrol kartı ya da radar/fotosel sensöründedir. Yaygın marka ve modellere uyumlu kartları stokta tutuyoruz.",
      "Mevcut kartınızın fotoğrafını WhatsApp'tan gönderin; model tespiti yapıp uyumlu kart veya sensörü aynı gün gönderelim. Arıza tespiti için yerinde servis de veriyoruz.",
    ],
    specs: [
      { label: "Ürün", value: "Kontrol kartı, radar sensör, fotosel takımı" },
      { label: "Besleme", value: "220V AC" },
      { label: "Çalışma modu", value: "Otomatik / açık kal / kışlık dar açılım" },
      { label: "Ayarlar", value: "Açılma hızı, bekleme süresi, açılma genişliği" },
      { label: "Ek girişler", value: "Yangın alarmı, kilit, buton girişi" },
      { label: "Uyumluluk", value: "Yaygın cam kapı sistemleri" },
      { label: "Garanti", value: "1 yıl" },
    ],
    includes: ["Kontrol kartı", "Bağlantı klemensleri", "Program şeması"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
