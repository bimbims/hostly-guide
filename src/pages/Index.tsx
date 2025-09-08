import { Link } from "react-router-dom";
import { 
  MapPin, 
  Key, 
  Shield, 
  Map, 
  CompassIcon as Guide, 
  UtensilsCrossed, 
  LogOut,
  Heart,
  Star,
  Wifi
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = [
  {
    id: "prepare",
    title: "Prepare para sua viagem",
    description: "Tudo que você precisa saber antes de chegar",
    icon: MapPin,
    route: "/prepare",
    color: "from-primary to-primary-light"
  },
  {
    id: "checkin",
    title: "Como fazer o check-in",
    description: "Instruções passo a passo para sua chegada",
    icon: Key,
    route: "/checkin",
    color: "from-secondary to-primary"
  },
  {
    id: "rules",
    title: "Regras da casa",
    description: "Diretrizes para uma estadia harmoniosa",
    icon: Shield,
    route: "/rules",
    color: "from-primary-light to-secondary"
  },
  {
    id: "directions",
    title: "Como chegar",
    description: "Rotas e informações de transporte",
    icon: Map,
    route: "/directions",
    color: "from-primary to-primary-dark"
  },
  {
    id: "guides",
    title: "Guias da região",
    description: "Descubra os melhores locais e experiências",
    icon: Guide,
    route: "/guides",
    color: "from-secondary to-primary-light"
  },
  {
    id: "delivery",
    title: "Delivery de comida",
    description: "Restaurantes e serviços de entrega",
    icon: UtensilsCrossed,
    route: "/delivery",
    color: "from-primary-light to-primary"
  },
  {
    id: "checkout",
    title: "Como fazer check-out",
    description: "Procedimentos para sua partida",
    icon: LogOut,
    route: "/checkout",
    color: "from-primary-dark to-secondary"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-surface shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-foreground font-['Playfair_Display']">
                Bem-vindos
              </h1>
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-primary" />
              <span>5.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-['Playfair_Display']">
            Bem-vindos ao seu <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              lar temporário
            </span>
          </h1>
          
          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Card className="bg-surface border-border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-3 text-center">
                <Wifi className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-medium text-foreground">WiFi Gratuito</p>
                <p className="text-xs text-muted-foreground">Casa@2024</p>
              </CardContent>
            </Card>
            
            <Card className="bg-surface border-border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-3 text-center">
                <MapPin className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-medium text-foreground">Check-in</p>
                <p className="text-xs text-muted-foreground">15:00 - 20:00</p>
              </CardContent>
            </Card>
            
            <Card className="bg-surface border-border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-3 text-center">
                <LogOut className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-medium text-foreground">Check-out</p>
                <p className="text-xs text-muted-foreground">Até 11:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation Sections */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link key={section.id} to={section.route} className="group">
                  <Card className="bg-surface border-border shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105 overflow-hidden aspect-square">
                    <CardContent className="p-0 h-full flex flex-col items-center justify-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center shadow-md mb-3`}>
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <p className="text-xs text-center text-foreground font-medium px-2 leading-tight">
                        {section.title}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-primary text-primary-foreground shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Precisa de ajuda?</h3>
              <p className="text-primary-foreground/80 mb-4">
                Estamos aqui para tornar sua estadia inesquecível
              </p>
              <Button variant="secondary" size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Entre em contato
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;