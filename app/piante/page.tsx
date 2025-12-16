import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Droplets, Sun, Thermometer, ShoppingCart } from "lucide-react"

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: "29.99",
    image: "/piante/monstera-deliciosa-pot.png",
    description: "Pianta tropicale dalle foglie grandi e caratteristiche con fori naturali",
    light: "Luce indiretta",
    water: "Media",
    difficulty: "Facile",
  },
  {
    id: 2,
    name: "Pothos",
    price: "19.99",
    image: "/piante/pothos-plant-in-hanging-pot.jpg",
    description: "Pianta rampicante perfetta per principianti, resistente e decorativa",
    light: "Luce bassa-media",
    water: "Bassa",
    difficulty: "Molto facile",
  },
  {
    id: 3,
    name: "Ficus Lyrata",
    price: "49.99",
    image: "/piante/fiddle-leaf-fig-plant-in-pot.jpg",
    description: "Albero da interno con grandi foglie a forma di violino",
    light: "Luce brillante indiretta",
    water: "Media",
    difficulty: "Intermedia",
  },
  {
    id: 4,
    name: "Sansevieria",
    price: "24.99",
    image: "/piante/snake-plant-sansevieria-in-pot.jpg",
    description: "Conosciuta come lingua di suocera, purifica l'aria ed è quasi indistruttibile",
    light: "Qualsiasi luce",
    water: "Bassa",
    difficulty: "Molto facile",
  },
  {
    id: 5,
    name: "Calathea",
    price: "34.99",
    image: "/piante/calathea-plant-with-patterned-leaves.jpg",
    description: "Pianta dalle foglie decorative con disegni unici e colori vivaci",
    light: "Luce indiretta",
    water: "Alta",
    difficulty: "Intermedia",
  },
  {
    id: 6,
    name: "Pilea Peperomioides",
    price: "22.99",
    image: "/piante/pilea-chinese-money-plant-in-pot.jpg",
    description: "Chiamata pianta delle monete cinesi, dalle foglie rotonde e decorative",
    light: "Luce brillante indiretta",
    water: "Media",
    difficulty: "Facile",
  },
  {
    id: 7,
    name: "Aloe Vera",
    price: "16.99",
    image: "/piante/aloe-vera-plant-in-terracotta-pot.jpg",
    description: "Pianta succulenta con proprietà curative, ideale per principianti",
    light: "Luce brillante diretta",
    water: "Bassa",
    difficulty: "Molto facile",
  },
  {
    id: 8,
    name: "Orchidea Phalaenopsis",
    price: "39.99",
    image: "/piante/white-phalaenopsis-orchid-in-pot.jpg",
    description: "Orchidea elegante con fiori durevoli, perfetta per regali",
    light: "Luce indiretta",
    water: "Media",
    difficulty: "Intermedia",
  },
  {
    id: 9,
    name: "Zamioculcas",
    price: "27.99",
    image: "/piante/zz-plant-zamioculcas-in-white-pot.jpg",
    description: "Pianta ZZ resistente alla siccità con foglie lucide verde scuro",
    light: "Luce bassa-media",
    water: "Bassa",
    difficulty: "Molto facile",
  },
]

const filters = [
  { name: "Tutte", active: true },
  { name: "Facili da curare", active: false },
  { name: "Purificatrici d'aria", active: false },
  { name: "Poca luce", active: false },
  { name: "Pet-friendly", active: false },
]

export default function PiantePage() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-balance text-foreground md:text-5xl">
              La Nostra Collezione di Piante
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Scopri la nostra selezione curata di piante da interno, perfette per ogni ambiente e livello di esperienza
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.name}
                variant={filter.active ? "default" : "outline"}
                className={filter.active ? "" : "bg-transparent"}
              >
                {filter.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Plants Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plants.map((plant) => (
              <Card
                key={plant.id}
                className="group overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={plant.image || "/placeholder.svg"}
                    alt={plant.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-card-foreground">{plant.name}</h3>
                    <span className="text-lg font-bold text-primary">€{plant.price}</span>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">{plant.description}</p>

                  {/* Plant Info */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sun className="h-4 w-4 text-accent" />
                      <span>{plant.light}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Droplets className="h-4 w-4 text-accent" />
                      <span>Acqua: {plant.water}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Thermometer className="h-4 w-4 text-accent" />
                      <span>Difficoltà: {plant.difficulty}</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Aggiungi al Carrello
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Non trovi la pianta perfetta?</h2>
            <p className="mb-6 text-muted-foreground">
              Contattaci e ti aiuteremo a trovare la pianta ideale per il tuo spazio
            </p>
            <Button size="lg">Contattaci</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
