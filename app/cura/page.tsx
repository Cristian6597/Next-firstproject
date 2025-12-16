import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Sun, Thermometer, Sprout, Bug, Scissors, AlertCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CuraPage() {
  const careTopics = [
    {
      icon: Droplets,
      title: "Annaffiatura",
      description: "Come e quando innaffiare le tue piante",
      tips: [
        "Controlla sempre l'umidità del terreno prima di annaffiare",
        "Annaffia al mattino presto per permettere l'evaporazione",
        "Usa acqua a temperatura ambiente, mai troppo fredda",
        "Evita ristagni d'acqua nel sottovaso per prevenire marciume radicale",
      ],
      frequency: "La frequenza varia da 1-3 volte a settimana in estate, 1 volta ogni 2 settimane in inverno",
    },
    {
      icon: Sun,
      title: "Luce",
      description: "Requisiti di illuminazione per piante sane",
      tips: [
        "Piante da pieno sole: 6+ ore di luce diretta (es. succulente, cactus)",
        "Piante da luce indiretta: luce brillante ma filtrata (es. Monstera, Pothos)",
        "Piante da ombra: tollerano ambienti poco luminosi (es. Sansevieria)",
        "Ruota le piante ogni 2-3 settimane per una crescita uniforme",
      ],
      frequency: "Posiziona le piante in base alle loro esigenze di luce specifiche",
    },
    {
      icon: Thermometer,
      title: "Temperatura e Umidità",
      description: "Condizioni ambientali ideali",
      tips: [
        "Temperatura ideale: 18-24°C per la maggior parte delle piante tropicali",
        "Evita correnti d'aria fredde e sbalzi di temperatura",
        "Aumenta l'umidità con nebulizzazioni regolari o un umidificatore",
        "Raggruppa le piante per creare un microclima più umido",
      ],
      frequency: "Mantieni condizioni stabili tutto l'anno",
    },
    {
      icon: Sprout,
      title: "Fertilizzazione",
      description: "Nutrire le piante per una crescita ottimale",
      tips: [
        "Fertilizza durante la stagione di crescita (primavera-estate)",
        "Usa fertilizzanti bilanciati NPK (es. 10-10-10)",
        "Diluisci sempre il fertilizzante seguendo le istruzioni",
        "Non fertilizzare piante malate o appena rinvasate",
      ],
      frequency: "Ogni 2-4 settimane in primavera-estate, sospendi in inverno",
    },
    {
      icon: Scissors,
      title: "Potatura",
      description: "Mantenere le piante in forma",
      tips: [
        "Rimuovi foglie gialle, secche o danneggiate regolarmente",
        "Taglia rami morti per favorire nuova crescita",
        "Pota in primavera prima del periodo di crescita attiva",
        "Usa sempre strumenti puliti e affilati per tagli netti",
      ],
      frequency: "Potatura di manutenzione mensile, potatura drastica una volta l'anno",
    },
    {
      icon: Bug,
      title: "Parassiti e Malattie",
      description: "Prevenzione e trattamento",
      tips: [
        "Ispeziona regolarmente foglie e steli per segni di parassiti",
        "Isola immediatamente piante infette",
        "Usa sapone insetticida naturale o olio di neem per trattamenti",
        "Mantieni buona circolazione d'aria tra le piante",
      ],
      frequency: "Controlli settimanali per individuare problemi precocemente",
    },
    {
      icon: Calendar,
      title: "Rinvaso",
      description: "Quando e come rinvasare",
      tips: [
        "Rinvasa quando le radici escono dai fori di drenaggio",
        "Usa un vaso 2-3 cm più grande del precedente",
        "Scegli terriccio appropriato per il tipo di pianta",
        "Rinvasa in primavera per ridurre lo stress sulla pianta",
      ],
      frequency: "Ogni 1-2 anni per piante giovani, ogni 3-4 anni per piante mature",
    },
    {
      icon: AlertCircle,
      title: "Segnali di Malessere",
      description: "Riconoscere i problemi comuni",
      tips: [
        "Foglie gialle: eccesso o carenza d'acqua, scarsa luce",
        "Foglie marroni alle punte: bassa umidità o eccesso di sali",
        "Foglie cadenti: sottoannaffiatura o stress termico",
        "Crescita stentata: carenza nutrizionale o vaso troppo piccolo",
      ],
      frequency: "Osserva le tue piante quotidianamente per interventi tempestivi",
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Guida alla Cura delle Piante
            </h1>
            <p className="text-balance text-lg text-muted-foreground md:text-xl">
              Tutto quello che devi sapere per mantenere le tue piante sane e rigogliose. Scopri i segreti per diventare
              un esperto giardiniere domestico.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips Banner */}
      <section className="border-b border-border bg-accent/20 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">3 Regole d'Oro</p>
              <p className="text-sm text-muted-foreground">Per piante felici</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="font-semibold text-foreground">Luce Giusta</p>
              <p className="text-sm text-muted-foreground">Posizionamento corretto</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Acqua Adeguata</p>
              <p className="text-sm text-muted-foreground">Mai troppa o poca</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Cura Costante</p>
              <p className="text-sm text-muted-foreground">Attenzione regolare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Topics Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {careTopics.map((topic, index) => {
              const Icon = topic.icon
              return (
                <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-bold text-foreground">{topic.title}</h3>
                        <p className="text-sm text-muted-foreground">{topic.description}</p>
                      </div>
                    </div>

                    <div className="mb-4 space-y-2">
                      {topic.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <p className="text-sm text-foreground">{tip}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-lg bg-accent/30 p-3">
                      <p className="text-xs font-semibold text-accent-foreground">
                        Frequenza: <span className="font-normal">{topic.frequency}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Seasonal Care Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Cura Stagionale</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-3 text-4xl">🌸</div>
                <h3 className="mb-2 font-bold text-foreground">Primavera</h3>
                <p className="text-sm text-muted-foreground">
                  Rinvasa, fertilizza e aumenta gradualmente l'acqua. Periodo di crescita attiva.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-3 text-4xl">☀️</div>
                <h3 className="mb-2 font-bold text-foreground">Estate</h3>
                <p className="text-sm text-muted-foreground">
                  Annaffia più frequentemente, proteggi dal sole diretto, mantieni umidità alta.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-3 text-4xl">🍂</div>
                <h3 className="mb-2 font-bold text-foreground">Autunno</h3>
                <p className="text-sm text-muted-foreground">
                  Riduci gradualmente acqua e fertilizzante. Prepara le piante per il riposo invernale.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-3 text-4xl">❄️</div>
                <h3 className="mb-2 font-bold text-foreground">Inverno</h3>
                <p className="text-sm text-muted-foreground">
                  Annaffia raramente, sospendi fertilizzante. Proteggi da correnti fredde.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Errori Comuni da Evitare</h2>
            <Card className="bg-destructive/5">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {[
                    {
                      error: "Annaffiare troppo",
                      solution:
                        "Lascia asciugare il terreno tra un'annaffiatura e l'altra. Il marciume radicale è la causa numero uno di morte delle piante.",
                    },
                    {
                      error: "Posizionamento sbagliato",
                      solution:
                        "Studia le esigenze di luce di ogni pianta. Non tutte prosperano vicino a una finestra luminosa.",
                    },
                    {
                      error: "Ignorare i parassiti",
                      solution:
                        "Controlla regolarmente le tue piante. Prima individui un problema, più facile sarà risolverlo.",
                    },
                    {
                      error: "Fertilizzare in eccesso",
                      solution:
                        "Più non è meglio. L'eccesso di fertilizzante può bruciare le radici e danneggiare la pianta.",
                    },
                    {
                      error: "Trascurare l'umidità",
                      solution:
                        "Molte piante d'appartamento sono tropicali e necessitano di umidità elevata, soprattutto in inverno con il riscaldamento.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                      <div>
                        <p className="font-semibold text-foreground">{item.error}</p>
                        <p className="text-sm text-muted-foreground">{item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary/5 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Hai Bisogno di Aiuto?</h2>
            <p className="mb-8 text-balance text-muted-foreground">
              Il nostro team di esperti è qui per aiutarti. Contattaci per consulenze personalizzate sulla cura delle
              tue piante.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contatti">Contatta un Esperto</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/piante">Esplora le Piante</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
