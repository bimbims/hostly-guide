import { ArrowLeft, Map, Car, Bus, Plane, MapPin, Clock, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Directions = () => {
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
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <Map className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-foreground font-['Playfair_Display']">
                Como chegar
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Address */}
          <Card className="bg-gradient-primary text-white shadow-warm mb-8">
            <CardContent className="p-6">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <h2 className="text-xl font-semibold mb-2 font-['Playfair_Display']">
                  Nosso endereço
                </h2>
                <p className="text-lg mb-1">Rua das Flores, 123</p>
                <p className="text-white/90 mb-4">Vila Madalena - São Paulo, SP - CEP 05435-040</p>
                <Button variant="secondary" size="sm" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Navigation className="w-4 h-4 mr-2" />
                  Abrir no Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Transportation Options */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6 font-['Playfair_Display']">
              Opções de transporte
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* From Airport */}
              <Card className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
                      <Plane className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Do Aeroporto</h3>
                      <Badge variant="secondary" className="text-xs">40-60 min</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="font-medium text-foreground">Uber/99/Táxi</h4>
                      <p className="text-sm text-muted-foreground">R$ 60-90 | Mais conveniente</p>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-medium text-foreground">Airport Bus Service</h4>
                      <p className="text-sm text-muted-foreground">R$ 35 | Sai a cada 30 min</p>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-medium text-foreground">Metrô + Uber</h4>
                      <p className="text-sm text-muted-foreground">R$ 25-40 | Mais econômico</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* By Car */}
              <Card className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center">
                      <Car className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">De carro</h3>
                      <Badge variant="secondary" className="text-xs">Estacionamento gratuito</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="font-medium text-foreground">Vaga na garagem</h4>
                      <p className="text-sm text-muted-foreground">Inclusa na diária</p>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-medium text-foreground">Acesso pela Marginal</h4>
                      <p className="text-sm text-muted-foreground">Saída Sumaré/Vila Madalena</p>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-medium text-foreground">Evite rush</h4>
                      <p className="text-sm text-muted-foreground">7h-9h e 17h-20h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Public Transport */}
              <Card className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-light to-secondary rounded-lg flex items-center justify-center">
                      <Bus className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Transporte público</h3>
                      <Badge variant="secondary" className="text-xs">Mais econômico</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="font-medium text-foreground">Metrô Sumaré</h4>
                      <p className="text-sm text-muted-foreground">Linha 2-Verde | 800m caminhando</p>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-medium text-foreground">Ônibus na porta</h4>
                      <p className="text-sm text-muted-foreground">Linhas: 107M, 809M, 177A</p>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-medium text-foreground">Bilhete Único</h4>
                      <p className="text-sm text-muted-foreground">R$ 4,40 | Compre nos terminais</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ride Apps */}
              <Card className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-dark to-secondary rounded-lg flex items-center justify-center">
                      <Navigation className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Apps recomendados</h3>
                      <Badge variant="secondary" className="text-xs">Mais prático</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="font-medium text-foreground">Uber</h4>
                      <p className="text-sm text-muted-foreground">Mais usado | Várias categorias</p>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-medium text-foreground">99</h4>
                      <p className="text-sm text-muted-foreground">Alternativa brasileira</p>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-medium text-foreground">InDriver</h4>
                      <p className="text-sm text-muted-foreground">Negocie o preço</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Important Info */}
          <Card className="bg-surface border-subtle shadow-md mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Informações importantes</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Horários de pico</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Manhã: 7h às 9h</li>
                    <li>• Tarde: 17h às 20h</li>
                    <li>• Trânsito mais intenso</li>
                    <li>• Transporte público lotado</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Dicas úteis</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Use Waze para trânsito em tempo real</li>
                    <li>• Vila Madalena tem muito trânsito aos finais de semana</li>
                    <li>• Metrô funciona das 4h40 à meia-noite</li>
                    <li>• Domingos: horário reduzido do transporte</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4 font-['Playfair_Display']">
              Já sabe como chegar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Agora descubra os melhores lugares da região para visitar
            </p>
            <Link to="/guides">
              <Button size="lg" className="bg-gradient-primary text-white shadow-warm hover:shadow-lg transition-all">
                Explorar a região →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;