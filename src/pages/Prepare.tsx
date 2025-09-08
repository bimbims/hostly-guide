import { ArrowLeft, MapPin, Car, Umbrella, Shirt, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Prepare = () => {
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
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-foreground font-['Playfair_Display']">
                Prepare para sua viagem
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
              Sua viagem começa aqui
            </h1>
            <p className="text-muted-foreground text-lg">
              Algumas dicas essenciais para que você aproveite ao máximo sua estadia
            </p>
          </div>

          {/* Preparation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Documents */}
            <Card className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Documentos</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Documento de identidade com foto</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Comprovante de reserva do Airbnb</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Telefone de contato ativo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Weather */}
            <Card className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center">
                    <Umbrella className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Clima</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Consulte sempre a previsão do tempo para os dias da sua estadia:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Traga roupas adequadas para a estação</li>
                  <li>• Guarda-chuva se houver previsão de chuva</li>
                  <li>• Protetor solar sempre recomendado</li>
                </ul>
              </CardContent>
            </Card>

            {/* Transport */}
            <Card className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-light to-secondary rounded-lg flex items-center justify-center">
                    <Car className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Transporte</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Apps recomendados: Uber, 99, táxi</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Transporte público disponível</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Estacionamento gratuito no local</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* What to Bring */}
            <Card className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-dark to-primary rounded-lg flex items-center justify-center">
                    <Shirt className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">O que trazer</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Produtos de higiene pessoal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Medicamentos pessoais</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Carregadores de dispositivos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Provided Items */}
          <Card className="bg-gradient-primary text-white shadow-warm mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 font-['Playfair_Display']">
                Itens disponíveis na acomodação
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Quarto & Banho</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• Roupa de cama e toalhas</li>
                    <li>• Sabonete e shampoo</li>
                    <li>• Secador de cabelo</li>
                    <li>• Papel higiênico</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cozinha & Geral</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• Utensílios básicos de cozinha</li>
                    <li>• Café, açúcar, sal</li>
                    <li>• Wi-Fi gratuito</li>
                    <li>• TV com streaming</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4 font-['Playfair_Display']">
              Próximo passo
            </h3>
            <p className="text-muted-foreground mb-6">
              Agora que você está preparado, vamos às instruções de check-in
            </p>
            <Link to="/checkin">
              <Button size="lg" className="bg-gradient-primary text-white shadow-warm hover:shadow-lg transition-all">
                Como fazer check-in →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prepare;