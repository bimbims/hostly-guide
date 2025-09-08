import { ArrowLeft, CompassIcon as Guide, Coffee, ShoppingBag, Camera, Utensils, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Guides = () => {
  const categories = [
    {
      icon: Coffee,
      title: "Cafés & Brunches",
      color: "from-primary to-primary-light",
      places: [
        { name: "Café Girondino", distance: "200m", rating: "4.8", specialty: "Brunch famoso" },
        { name: "The Coffee", distance: "350m", rating: "4.6", specialty: "Café especial" },
        { name: "Padoca do Maní", distance: "400m", rating: "4.7", specialty: "Pães artesanais" }
      ]
    },
    {
      icon: Utensils,
      title: "Restaurantes",
      color: "from-secondary to-primary",
      places: [
        { name: "Consulado Mineiro", distance: "300m", rating: "4.9", specialty: "Comida mineira" },
        { name: "Jun Sakamoto", distance: "800m", rating: "4.8", specialty: "Culinária japonesa" },
        { name: "A Casa do Porco Bar", distance: "1.2km", rating: "4.7", specialty: "Bar moderno" }
      ]
    },
    {
      icon: ShoppingBag,
      title: "Compras",
      color: "from-primary-light to-secondary",
      places: [
        { name: "Vila Madalena Market", distance: "150m", rating: "4.5", specialty: "Supermercado" },
        { name: "Galeria Ouro Fino", distance: "600m", rating: "4.4", specialty: "Lojas locais" },
        { name: "Shopping Eldorado", distance: "3km", rating: "4.6", specialty: "Shopping center" }
      ]
    },
    {
      icon: Camera,
      title: "Pontos turísticos",
      color: "from-primary to-primary-dark",
      places: [
        { name: "Beco do Batman", distance: "800m", rating: "4.7", specialty: "Arte urbana" },
        { name: "Largo da Batata", distance: "1km", rating: "4.3", specialty: "Centro cultural" },
        { name: "Instituto Tomie Ohtake", distance: "2km", rating: "4.8", specialty: "Arte contemporânea" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-surface shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-secondary to-primary-light rounded-lg flex items-center justify-center">
                <Guide className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-foreground font-['Playfair_Display']">
                Guias da região
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              Descubra a Vila Madalena
            </h1>
            <p className="text-muted-foreground text-lg">
              Os melhores lugares para comer, beber e se divertir pertinho de você
            </p>
          </div>

          {/* Welcome Card */}
          <Card className="bg-gradient-primary text-white shadow-warm mb-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                🎨 Você está no coração cultural de SP!
              </h3>
              <p className="text-white/90">
                A Vila Madalena é famosa por sua vida noturna, arte de rua, 
                gastronomia e atmosfera boêmia. Tudo a poucos passos de casa!
              </p>
            </CardContent>
          </Card>

          {/* Categories */}
          <div className="space-y-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground font-['Playfair_Display']">
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {category.places.map((place, placeIndex) => (
                      <Card key={placeIndex} className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300 hover:scale-[1.02]">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-foreground text-sm">
                              {place.name}
                            </h3>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-primary" />
                              <span className="text-xs text-muted-foreground">{place.rating}</span>
                            </div>
                          </div>
                          
                          <p className="text-xs text-muted-foreground mb-2">
                            {place.specialty}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3 text-primary" />
                              <span className="text-xs text-muted-foreground">{place.distance}</span>
                            </div>
                            <Badge variant="secondary" className="text-xs px-2 py-1">
                              A pé
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special Recommendations */}
          <Card className="bg-surface border-subtle shadow-md mt-8 mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                🌟 Recomendações especiais do anfitrião
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Para o final de semana</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Sábado:</strong> Feira da Vila Madalena (manhã)</li>
                    <li>• <strong>Domingo:</strong> Brunch no Café Girondino</li>
                    <li>• <strong>Noite:</strong> Bares da Rua Aspicuelta</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Experiências únicas</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Arte:</strong> Tour pelos grafites do Beco do Batman</li>
                    <li>• <strong>Música:</strong> Shows no Bourbon Street</li>
                    <li>• <strong>Gastronomia:</strong> Food tour pela região</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Help */}
          <Card className="bg-gradient-warm text-white shadow-warm mb-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                📱 Apps recomendados para explorar
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-3 mb-2">
                    <span className="text-white text-sm font-medium">Google Maps</span>
                  </div>
                  <p className="text-xs text-white/90">Navegação</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-3 mb-2">
                    <span className="text-white text-sm font-medium">iFood</span>
                  </div>
                  <p className="text-xs text-white/90">Delivery</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-3 mb-2">
                    <span className="text-white text-sm font-medium">Uber</span>
                  </div>
                  <p className="text-xs text-white/90">Transporte</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg p-3 mb-2">
                    <span className="text-white text-sm font-medium">TripAdvisor</span>
                  </div>
                  <p className="text-xs text-white/90">Avaliações</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4 font-['Playfair_Display']">
              Com fome?
            </h3>
            <p className="text-muted-foreground mb-6">
              Veja as opções de delivery disponíveis na região
            </p>
            <Link to="/delivery">
              <Button size="lg" className="bg-gradient-primary text-white shadow-warm hover:shadow-lg transition-all">
                Ver opções de delivery →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;