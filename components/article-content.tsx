export function ArticleContent() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      {/* Meta */}
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
        <span>Eğitim</span>
        <span className="text-border">—</span>
        <span>2026</span>
        <span className="text-border">—</span>
        <span>6 dk okuma</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight text-foreground mb-8">
        Yatırım nedir? Gerçekten ne yapıyoruz?
      </h1>

      {/* Intro */}
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        Yatırım kavramı günlük hayatta sıkça duyduğumuz ama nadiren derinlemesine 
        düşündüğümüz bir konu. Peki gerçekten yatırım yaparken ne yapıyoruz?
      </p>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-xl font-normal tracking-tight text-foreground mt-12 mb-4">
          Temel tanım
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Yatırım, en basit haliyle bugünkü kaynakları gelecekte daha fazla değer 
          elde etmek amacıyla kullanmaktır. Bu tanım kulağa basit gelse de, içinde 
          birçok önemli kavram barındırır: zaman, risk ve getiri.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Her yatırım kararı aslında bir tercih: Bugün harcamak yerine yarına 
          ertelemek. Bu ertelemenin bir bedeli olduğu gibi, potansiyel bir ödülü 
          de vardır.
        </p>

        <h2 className="text-xl font-normal tracking-tight text-foreground mt-12 mb-4">
          Neden yatırım yapıyoruz?
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          İnsanların yatırım yapma motivasyonları farklı olabilir. Bazıları için 
          emeklilik güvencesi, bazıları için finansal özgürlük, bazıları için ise 
          belirli bir hedefe ulaşmak.
        </p>
        <ul className="space-y-3 my-6 text-foreground/80">
          <li className="flex gap-3">
            <span className="text-muted-foreground">—</span>
            <span>Enflasyona karşı korunmak</span>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">—</span>
            <span>Gelecek için birikim oluşturmak</span>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">—</span>
            <span>Pasif gelir elde etmek</span>
          </li>
          <li className="flex gap-3">
            <span className="text-muted-foreground">—</span>
            <span>Finansal hedeflere ulaşmak</span>
          </li>
        </ul>

        {/* Callout */}
        <blockquote className="my-10 pl-6 border-l border-border">
          <p className="text-foreground/70 italic leading-relaxed">
            Yatırım, sabır ve disiplin gerektiren uzun vadeli bir süreçtir. 
            Kısa vadeli dalgalanmalar yerine büyük resme odaklanmak gerekir.
          </p>
        </blockquote>

        <h2 className="text-xl font-normal tracking-tight text-foreground mt-12 mb-4">
          Risk ve getiri dengesi
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Her yatırımın bir riski vardır. Genel kural olarak, potansiyel getiri 
          arttıkça risk de artar. Bu dengeyi anlamak, bilinçli yatırım kararları 
          almanın temelidir.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Önemli olan kendi risk toleransınızı tanımak ve buna uygun bir strateji 
          belirlemektir. Herkesin risk algısı farklıdır ve bu tamamen normaldir.
        </p>

        <h2 className="text-xl font-normal tracking-tight text-foreground mt-12 mb-4">
          Sonuç
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Yatırım yapmak, aslında geleceğinize güvenmek demektir. Her küçük adım, 
          zamanla büyük farklar yaratabilir. Önemli olan başlamak ve tutarlı olmaktır.
        </p>
      </div>
    </article>
  )
}
