import { Navbar } from "@/components/navbar"
import { Leaf, Heart, Sprout, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function ChiSiamo() {
  const values = [
    {
      icon: Leaf,
      title: "Sostenibilità",
      description: "Coltiviamo le nostre piante con metodi biologici e sostenibili, rispettando l'ambiente.",
    },
    {
      icon: Heart,
      title: "Passione",
      description: "Amiamo ciò che facciamo e mettiamo il cuore in ogni pianta che curiamo.",
    },
    {
      icon: Sprout,
      title: "Qualità",
      description: "Selezioniamo solo le migliori piante per garantire salute e bellezza durature.",
    },
    {
      icon: Users,
      title: "Comunità",
      description: "Creiamo una comunità di appassionati di piante per condividere conoscenze ed esperienze.",
    },
  ]
  const team = [
    {
      name: "Mario Rossi",
      role: "Fondatrice & CEO",
      image: "/team/ceo.jpg",
    },
    {
      name: "Luca Bianchi",
      role: "Esperto Botanico",
      image: "/team/botanico.jpg",
    },
    {
      name: "Sofia Verdi",
      role: "Responsabile Vendite",
      image: "/team/marketing.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Chi Siamo
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Verde Vita è nata dalla passione per la natura e il desiderio di portare il verde nelle case di tutti. Dal
              2020, aiutiamo le persone a creare spazi verdi rigogliosi e accoglienti.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">La Nostra Storia</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Tutto è iniziato in un piccolo vivaio, dove la nostra fondatrice Maria coltivava piante con cura e
                  dedizione. La sua passione per il verde era contagiosa, e presto amici e familiari iniziarono a
                  chiedere consigli e piante per le loro case.
                </p>
                <p className="leading-relaxed">
                  Oggi, Verde Vita è cresciuta fino a diventare un punto di riferimento per chi ama le piante. Offriamo
                  una vasta selezione di piante da interno ed esterno, tutte coltivate con metodi sostenibili e
                  rispettosi dell'ambiente.
                </p>
                <p className="leading-relaxed">
                  Il nostro team di esperti è sempre pronto a consigliarti la pianta perfetta per il tuo spazio e a
                  guidarti nella cura quotidiana, perché crediamo che tutti possano avere il pollice verde.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <img src="/greenhouse-with-plants.jpg" alt="Il nostro vivaio" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">I Nostri Valori</h2>
              <p className="text-pretty text-lg text-muted-foreground">
                Questi sono i principi che guidano il nostro lavoro ogni giorno
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="border-border/40 bg-card p-6">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">{value.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Il Nostro Team</h2>
              <p className="text-pretty text-lg text-muted-foreground">
                Incontra le persone che rendono possibile Verde Vita
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="mb-4 aspect-square overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="mb-1 text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Unisciti alla Nostra Comunità Verde
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Scopri la nostra collezione di piante e inizia il tuo viaggio verso una casa più verde e accogliente.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/piante"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Esplora le Piante
              </a>
              <a
                href="/contatti"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Contattaci
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
