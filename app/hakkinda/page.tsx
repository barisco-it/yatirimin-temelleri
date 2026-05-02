import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Hakkında – Yatırımın Temelleri",
  description: "Yatırım, birikim ve finans üzerine sade notlar tuttuğum kişisel bir yayın alanı.",
}

export default function HakkindaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-normal text-foreground mb-16">
            Hakkında
          </h1>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Yatırımın Temelleri; yatırım, birikim ve finans üzerine sade notlar tuttuğum kişisel bir yayın alanı.
            </p>
            <p>
              Burada amacım bir &quot;para gurusu&quot; gibi konuşmak değil. Öğrendiklerimi yazıya dökerek hem kendim için pekiştirmek hem de finansal okuryazarlık yolculuğunda sade ve anlaşılır içerikler üretmek.
            </p>
            <p>
              Para kazanıyoruz; ama çoğu zaman onu nasıl koruyacağımızı, nasıl yöneteceğimizi ve uzun vadede nasıl büyüteceğimizi yeterince konuşmuyoruz. Bu blog, bu konuları daha sakin, basit ve anlaşılır şekilde düşünmek için var.
            </p>
          </div>

          <section className="mt-20">
            <h2 className="text-lg font-normal text-foreground mb-8">
              Bu blogda ne var?
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-foreground/30">—</span>
                <span>Eğitim notları</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/30">—</span>
                <span>Kişisel görüşler</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/30">—</span>
                <span>Makro ekonomi ve piyasa yorumları</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/30">—</span>
                <span>Uzun vadeli yatırım düşünceleri</span>
              </li>
            </ul>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-normal text-foreground mb-8">
              Ne değildir?
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-foreground/30">—</span>
                <span>Yatırım tavsiyesi değildir</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/30">—</span>
                <span>Hızlı zengin olma rehberi değildir</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/30">—</span>
                <span>Kesin doğrular listesi değildir</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
