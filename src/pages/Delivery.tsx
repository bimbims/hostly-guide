import { ArrowLeft, UtensilsCrossed, Pizza, Coffee, ShoppingCart, Clock, Star, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Delivery = () => {
  const deliveryApps = [
    {
      name: "iFood",
      icon: "🍽️",
      description: "Maior variedade de restaurantes",
      features: ["Entrega rápida", "Cupons frequentes", "Programa de fidelidade"],
      color: "from-red-500 to-red-600"
    },
    {
      name: "Rappi",
      icon: "🛵",
      description: "Delivery de tudo, não só comida",
      features: ["Farmácia", "Mercado", "Bebidas"],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Uber Eats",
      icon: "🚗",
      description: "Integrado com Uber",
      features: ["Interface familiar", "Rastreamento preciso", "Sem taxa de entrega*"],
      color: "from-green-500 to-green-600"
    }
  ];

  const foodCategories = [
    {
      icon: Pizza,
      title: "Pizza & Italiana",
      restaurants: ["Bráz Pizzaria", "Famiglia Mancini", "La Casserole"],
      avgTime: "25-35 min",
      avgPrice: "R$ 25-45"
    },
    {
      icon: Coffee,
      title: "Lanche & Café",
      restaurants: ["McDonald's", "Burger King", "Starbucks"],
      avgTime: "15-25 min",
      avgPrice: "R$ 15-30"
    },
    {
      icon: UtensilsCrossed,
      title: "Brasileira",
      restaurants: ["Consulado Mineiro", "Fogo de Chão", "Dona Lucinha"],
      avgTime: "30-45 min",
      avgPrice: "R$ 20-40"
    },
    {
      icon: ShoppingCart,
      title: "Asiática",
      restaurants: ["Sushi Yassu", "China in Box", "Ramen Yashima"],
      avgTime: "25-40 min",
      avgPrice: "R$ 25-50"
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
              <div className="w-8 h-8 bg-gradient-to-r from-primary-light to-primary rounded-lg flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-foreground font-['Playfair_Display']">
                Delivery de comida
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
              Comida na palma da mão
            </h1>
            <p className="text-muted-foreground text-lg">
              Centenas de opções de delivery chegam rapidinho até você
            </p>
          </div>

          {/* Quick Info */}
          <Card className="bg-gradient-primary text-white shadow-warm mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <Clock className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold">Entrega rápida</h3>
                  <p className="text-white/90 text-sm">15-45 minutos</p>
                </div>
                <div>
                  <Star className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold">Melhor região</h3>
                  <p className="text-white/90 text-sm">Vila Madalena tem tudo</p>
                </div>
                <div>
                  <Smartphone className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold">Apps grátis</h3>
                  <p className="text-white/90 text-sm">Download fácil</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Apps */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6 font-['Playfair_Display']">
              Apps de delivery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliveryApps.map((app, index) => (
                <Card key={index} className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{app.icon}</div>
                      <h3 className="text-lg font-semibold text-foreground">{app.name}</h3>
                      <p className="text-sm text-muted-foreground">{app.description}</p>
                    </div>
                    
                    <ul className="space-y-2">
                      {app.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full mt-4 bg-gradient-primary text-white">
                      Baixar app
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Food Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6 font-['Playfair_Display']">
              Categorias populares
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {foodCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {category.title}
                          </h3>
                          
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            <div>
                              <p className="text-xs text-muted-foreground">Tempo médio</p>
                              <p className="text-sm font-medium text-foreground">{category.avgTime}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Preço médio</p>
                              <p className="text-sm font-medium text-foreground">{category.avgPrice}</p>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Restaurantes populares:</p>
                            <div className="flex flex-wrap gap-1">
                              {category.restaurants.map((restaurant, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {restaurant}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Tips */}
          <Card className="bg-surface border-subtle shadow-md mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                💡 Dicas para economizar
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Cupons e promoções</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Primeira compra: até 50% off</li>
                    <li>• Cupons de fidelidade</li>
                    <li>• Promoções de terça e quinta</li>
                    <li>• Cashback em apps de banco</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Horários estratégicos</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Evite horário de pico (12h-14h, 19h-21h)</li>
                    <li>• Fim de semana: entregas mais caras</li>
                    <li>• Peça antes das 11h ou após 14h</li>
                    <li>• Combine pedidos com vizinhos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Food */}
          <Card className="bg-gradient-warm text-white shadow-warm mb-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                🚨 Opções 24 horas
              </h3>
              <p className="text-white/90 mb-4">
                Para aqueles momentos de fome de madrugada
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <h4 className="font-medium">McDonald's</h4>
                  <p className="text-sm text-white/90">24h - Vila Madalena</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <h4 className="font-medium">Posto Ipiranga</h4>
                  <p className="text-sm text-white/90">Conveniência 24h</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <h4 className="font-medium">Padaria Real</h4>
                  <p className="text-sm text-white/90">Pães frescos 24h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4 font-['Playfair_Display']">
              Já pensando na partida?
            </h3>
            <p className="text-muted-foreground mb-6">
              Veja como fazer um check-out sem complicações
            </p>
            <Link to="/checkout">
              <Button size="lg" className="bg-gradient-primary text-white shadow-warm hover:shadow-lg transition-all">
                Processo de check-out →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;