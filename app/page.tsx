import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Benvenuti nel Mondo delle Piante
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Scopri la bellezza della natura con la nostra collezione curata di piante per ogni ambiente. Dalla cura alle
            migliori pratiche, siamo qui per aiutarti a far crescere il tuo giardino verde.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Esplora le Piante
            </button>
            <button className="rounded-lg border border-border bg-background px-8 py-3 font-medium text-foreground transition-colors hover:bg-secondary">
              Guida alla Cura
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
