import Link from "next/link"

export function Header() {
  return (
    <header className="w-full border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-lg font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity">
          Yatırımın Temelleri
        </Link>
        <nav className="flex items-center gap-8">
          <Link 
            href="/yazilar" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Yazılar
          </Link>
          <Link 
            href="/hakkinda" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Hakkında
          </Link>
        </nav>
      </div>
    </header>
  )
}
