import { Link } from "react-router-dom";
import { 
  MapPin, 
  Key, 
  Shield, 
  Map, 
  CompassIcon as Guide, 
  UtensilsCrossed, 
  LogOut,
  Wifi,
  MessageCircle
} from "lucide-react";

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
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground font-['Dancing_Script'] tracking-wide">
              Ibirahill
            </div>
          </div>
        </div>
      </header>

      {/* Quick Info Cards */}
      <section className="px-4 sm:px-6 lg:px-8 pt-3 pb-3">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-surface border border-border shadow-sm rounded-lg p-2 text-center">
              <Wifi className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-xs font-medium text-foreground">Ibirahill Guest</p>
              <p className="text-xs text-muted-foreground">Ibironesia</p>
            </div>
            
            <div className="bg-surface border border-border shadow-sm rounded-lg p-2 text-center">
              <MapPin className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-xs font-medium text-foreground">Check-in</p>
              <p className="text-xs text-muted-foreground">15:00-20:00</p>
            </div>
            
            <div className="bg-surface border border-border shadow-sm rounded-lg p-2 text-center">
              <LogOut className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-xs font-medium text-foreground">Check-out</p>
              <p className="text-xs text-muted-foreground">Até 11:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Sections */}
      <section className="px-4 sm:px-6 lg:px-8 pb-3">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-1">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link key={section.id} to={section.route} className="group">
                  <div className="flex flex-col items-center justify-center p-1 transition-all duration-300 group-hover:scale-105">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300" 
                         style={{ backgroundColor: '#A3B18A' }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp Contact */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4 mt-2">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              const phoneNumber = "+351912345678"; // Replace with actual number
              const message = "Olá! Preciso de ajuda com a minha estadia.";
              const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="w-full shadow-md hover:shadow-lg transition-all duration-300 rounded-lg p-2 flex items-center justify-center space-x-2"
            style={{ backgroundColor: '#233133' }}
          >
            <MessageCircle className="w-3 h-3 text-white" />
            <span className="text-xs font-medium text-white">Precisa de ajuda?</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;