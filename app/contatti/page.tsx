import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContattaciPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Contattaci
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Hai domande sulle nostre piante o hai bisogno di consigli? Siamo qui per aiutarti. Contattaci e ti
              risponderemo il prima possibile.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Invia un Messaggio</h2>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nome" className="mb-2 block text-sm font-medium text-foreground">
                        Nome
                      </label>
                      <Input id="nome" placeholder="Il tuo nome" required />
                    </div>
                    <div>
                      <label htmlFor="cognome" className="mb-2 block text-sm font-medium text-foreground">
                        Cognome
                      </label>
                      <Input id="cognome" placeholder="Il tuo cognome" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="tua@email.com" required />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="mb-2 block text-sm font-medium text-foreground">
                      Telefono (opzionale)
                    </label>
                    <Input id="telefono" type="tel" placeholder="+39 123 456 7890" />
                  </div>

                  <div>
                    <label htmlFor="oggetto" className="mb-2 block text-sm font-medium text-foreground">
                      Oggetto
                    </label>
                    <Input id="oggetto" placeholder="Di cosa vuoi parlarci?" required />
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="mb-2 block text-sm font-medium text-foreground">
                      Messaggio
                    </label>
                    <Textarea
                      id="messaggio"
                      placeholder="Scrivi qui il tuo messaggio..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">Informazioni di Contatto</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Indirizzo</h3>
                        <p className="text-muted-foreground">Via dei Giardini, 123</p>
                        <p className="text-muted-foreground">20100 Milano, Italia</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Telefono</h3>
                        <p className="text-muted-foreground">+39 02 1234 5678</p>
                        <p className="text-muted-foreground">+39 345 678 9012</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">info@verdevita.it</p>
                        <p className="text-muted-foreground">supporto@verdevita.it</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Orari di Apertura</h3>
                        <p className="text-muted-foreground">Lun - Ven: 9:00 - 18:00</p>
                        <p className="text-muted-foreground">Sab: 9:00 - 13:00</p>
                        <p className="text-muted-foreground">Dom: Chiuso</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex h-64 items-center justify-center bg-muted">
                    <p className="text-muted-foreground">Mappa (Google Maps integrazione)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Domande Frequenti</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-foreground">
                    Quanto tempo ci vuole per ricevere una risposta?
                  </h3>
                  <p className="text-muted-foreground">
                    Cerchiamo di rispondere a tutte le richieste entro 24 ore nei giorni lavorativi.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Posso visitare il vostro negozio fisico?</h3>
                  <p className="text-muted-foreground">
                    Assolutamente! Siamo aperti dal lunedì al sabato. Ti consigliamo di chiamarci prima per assicurarti
                    che la pianta che desideri sia disponibile.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Offrite consulenze personalizzate?</h3>
                  <p className="text-muted-foreground">
                    Si! I nostri esperti sono disponibili per consulenze personalizzate sia in negozio che online.
                    Contattaci per fissare un appuntamento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
