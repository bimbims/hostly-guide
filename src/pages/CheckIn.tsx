import { ArrowLeft, Key, MapPin, Clock, Smartphone, Shield, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CheckIn = () => {
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
              <div className="w-8 h-8 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center">
                <Key className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-foreground font-['Playfair_Display']">
                Como fazer check-in
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
              Sua chegada é muito simples
            </h1>
            <p className="text-muted-foreground text-lg">
              Siga estes passos para um check-in tranquilo e rápido
            </p>
          </div>

          {/* Check-in Hours */}
          <Card className="bg-gradient-primary text-white shadow-warm mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-semibold">Horário de Check-in</h3>
                    <p className="text-white/90">15:00 às 20:00</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Chegada confirmada para hoje
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Step by Step */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-semibold text-foreground font-['Playfair_Display']">
              Passo a passo
            </h2>

            {/* Step 1 */}
            <Card className="bg-surface border-subtle shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Chegue no horário combinado
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Entre 15:00 e 20:00. Se precisar chegar fora deste horário, entre em contato conosco.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Rua das Flores, 123 - Apartamento 45</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-surface border-subtle shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Entre em contato
                    </h3>
                    <p className="text-muted-foreigner mb-3">
                      Quando chegar no prédio, envie uma mensagem pelo WhatsApp.
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Smartphone className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">WhatsApp</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">(11) 99999-9999</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Envie: "Oi! Cheguei para o check-in"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-surface border-subtle shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-light to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Acesso ao apartamento
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Iremos até você para entregar as chaves e fazer uma breve apresentação do espaço.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Key className="w-5 h-5 text-primary" />
                        <span className="text-sm text-foreground">2 chaves do apartamento</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-primary" />
                        <span className="text-sm text-foreground">Cartão do portão</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Info */}
          <Card className="bg-gradient-to-r from-warning/10 to-warning/5 border-warning/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Informações importantes
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Se chegar após 20:00, será cobrada taxa adicional de R$ 50</li>
                    <li>• Mantenha sempre o WhatsApp ativo durante sua estadia</li>
                    <li>• Documento de identidade será solicitado no check-in</li>
                    <li>• Não perca as chaves - reposição custa R$ 150</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="bg-surface border-subtle shadow-md mb-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Problemas na chegada?
              </h3>
              <p className="text-muted-foreground mb-4">
                Estamos disponíveis para ajudar no WhatsApp
              </p>
              <Button className="bg-gradient-primary text-white">
                Entrar em contato
              </Button>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4 font-['Playfair_Display']">
              Após o check-in
            </h3>
            <p className="text-muted-foreground mb-6">
              Conheça as regras da casa para uma convivência harmoniosa
            </p>
            <Link to="/rules">
              <Button size="lg" className="bg-gradient-primary text-white shadow-warm hover:shadow-lg transition-all">
                Ver regras da casa →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;