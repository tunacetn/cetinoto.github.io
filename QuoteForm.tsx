import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WA_BASE = "https://wa.me/905435032007?text=";

type Props = { productTitle: string };

export function QuoteForm({ productTitle }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [service, setService] = useState("Sadece ürün");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Merhaba, "${productTitle}" için teklif istiyorum.`,
      "",
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      district ? `İlçe / Şehir: ${district}` : "",
      `Adet: ${quantity}`,
      `Talep: ${service}`,
      note ? `Not: ${note}` : "",
    ].filter(Boolean);
    window.open(WA_BASE + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  };

  const field =
    "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary";

  return (
    <section id="teklif" className="mt-12">
      <h2 className="text-3xl md:text-4xl">TEKLİF İSTE</h2>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Bilgileri doldurun, WhatsApp hazır mesaj olarak açılsın. Aynı gün fiyat dönüşü
        yapıyoruz.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-4 rounded-lg border border-border bg-card p-5 panel-shadow"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-bold">
            Ad Soyad
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={field}
              placeholder="Adınız"
            />
          </label>
          <label className="block text-sm font-bold">
            Telefon
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={field}
              placeholder="05xx xxx xx xx"
            />
          </label>
          <label className="block text-sm font-bold">
            İlçe / Şehir
            <input
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className={field}
              placeholder="Kepez / Antalya"
            />
          </label>
          <label className="block text-sm font-bold">
            Adet
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={field}
            />
          </label>
          <label className="block text-sm font-bold">
            Talep
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={field}
            >
              <option>Sadece ürün</option>
              <option>Ürün + montaj</option>
              <option>Arıza / servis desteği</option>
              <option>Kargo ile gönderim</option>
            </select>
          </label>
          <label className="block text-sm font-bold sm:col-span-2">
            Not
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className={field}
              placeholder="Kapı ölçüsü, mevcut motor markası, model vb."
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-bold text-whatsapp-foreground sm:w-auto"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp'tan teklif iste
        </button>
      </form>
    </section>
  );
}
