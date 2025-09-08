import { ArrowLeft, LogOut, Clock, Key, CheckCircle, Camera, Trash2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CheckOut = () => {
  const checkoutSteps = [
    {
      number: 1,
      title: "Organize o apartamento",
      icon: Trash2,
      description: "Deixe tudo arrumado para o próximo hóspede",
      details: [
        "Coloque o lixo no local indicado",
        "Lave e guarde louças utilizadas",
        "Recoloque móveis no lugar original",
        "Feche todas as janelas"
      ]
    },
    {
      number: 2,
      title: "Vistoria final",
      icon: Camera,
      description: "Verifique se está tudo em ordem",
      details: [
        "Confira se não esqueceu nada",
        "Verifique equipamentos funcionando",
        "Desligue todos os aparelhos",
        "Feche as torneiras bem"
      ]
    },
    {
      number: 3,
      title: "Entrega das chaves",
      icon: Key,
      description: "Devolva as chaves e cartão de acesso",
      details: [
        "2 chaves do apartamento",
        "1 cartão do portão",
        "Controle remoto (se aplicável)",
        "Manual de instruções"
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
              <div className="w-8 h-8 bg-gradient-to-r from-primary-dark to-secondary rounded-lg flex items-center justify-center">
                <LogOut className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-foreground font-['Playfair_Display']">
                Como fazer check-out
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
              Esperamos que tenha aproveitado!
            </h1>
            <p className="text-muted-foreground text-lg">
              Seu check-out é simples e rápido. Siga estes passos para uma saída tranquila
            </p>
          </div>

          {/* Check-out Time */}
          <Card className="bg-gradient-primary text-white shadow-warm mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-semibold">Horário de Check-out</h3>
                    <p className="text-white/90">Até às 11:00</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Checkout flexível disponível
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Step by Step */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-semibold text-foreground font-['Playfair_Display']">
              Processo de check-out
            </h2>

            {checkoutSteps.map((step, index) => {
              const Icon = step.icon;
              const colors = [
                "from-primary to-primary-light",
                "from-secondary to-primary", 
                "from-primary-light to-secondary"
              ];
              
              return (
                <Card key={index} className="bg-surface border-subtle shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colors[index]} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                        {step.number}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-3 mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                          <h3 className="text-lg font-semibold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Self Check-out */}
          <Card className="bg-surface border-subtle shadow-md mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                🔑 Check-out Express (Self Service)
              </h3>
              <p className="text-muted-foreground mb-4">
                Se preferir sair sem nos encontrar, você pode fazer o check-out express:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Como funciona</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Deixe as chaves sobre a mesa da cozinha</li>
                    <li>• Envie foto por WhatsApp confirmando</li>
                    <li>• Feche a porta ao sair (trava automática)</li>
                    <li>• Deixe o cartão do portão no apartamento</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Disponível quando</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Check-out muito cedo (antes das 8h)</li>
                    <li>• Emergências ou imprevistos</li>
                    <li>• Viagem de trabalho rápida</li>
                    <li>• Mediante acordo prévio</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="bg-gradient-to-r from-warning/10 to-warning/5 border-warning/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Importante lembrar
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Check-out tardio:</strong> Taxa de R$ 100 após 14h (sujeito à disponibilidade)</li>
                    <li>• <strong>Objetos esquecidos:</strong> Guarded por 30 dias, envio com taxa postal</li>
                    <li>• <strong>Avaliação:</strong> Sua review é muito importante para nós!</li>
                    <li>• <strong>Problemas:</strong> Comunicar imediatamente via WhatsApp</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Checkout */}
          <Card className="bg-surface border-subtle shadow-md mb-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                📱 Confirme sua saída
              </h3>
              <p className="text-muted-foreground mb-4">
                Envie uma mensagem quando estiver saindo
              </p>
              
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground">WhatsApp: (11) 99999-9999</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Envie: "Check-out realizado. Obrigado pela hospedagem!"
                </p>
              </div>
              
              <Button className="bg-gradient-primary text-white">
                Enviar mensagem de check-out
              </Button>
            </CardContent>
          </Card>

          {/* Thank You */}
          <Card className="bg-gradient-primary text-white shadow-warm mb-8">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4 font-['Playfair_Display']">
                Muito obrigado pela sua estadia! ❤️
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Esperamos que tenha tido uma experiência maravilhosa na Vila Madalena. 
                Sua presença foi um prazer e você sempre será bem-vindo de volta!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">⭐ Deixe sua avaliação</h3>
                  <p className="text-sm text-white/90">
                    Sua opinião nos ajuda a melhorar sempre
                  </p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🔄 Volte sempre</h3>
                  <p className="text-sm text-white/90">
                    Desconto especial para próximas reservas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return Home */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4 font-['Playfair_Display']">
              Precisa revisar alguma informação?
            </h3>
            <p className="text-muted-foreground mb-6">
              Volte ao início para acessar todas as seções do guia
            </p>
            <Link to="/">
              <Button size="lg" className="bg-gradient-primary text-white shadow-warm hover:shadow-lg transition-all">
                ← Voltar ao início
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;