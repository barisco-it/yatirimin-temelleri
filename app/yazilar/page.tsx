import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleList } from "@/components/article-list"

export const metadata = {
  title: "Yazılar | Yatırımın Temelleri",
  description: "Yatırım, birikim ve finans üzerine sade notlar",
}

export default function YazilarPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="mb-16">
            <h1 className="text-3xl font-medium tracking-tight text-foreground">
              Yazılar
            </h1>
            <p className="mt-3 text-muted-foreground">
              Yatırım, birikim ve finans üzerine sade notlar
            </p>
          </div>
          <ArticleList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
