import { ArrowLeft, Shield, Volume2, Cigarette, Users, Clock, Trash2, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Rules = () => {
  const rules = [
    {
      icon: Volume2,
      title: "Respeite o silêncio",
      description: "Evite ruídos excessivos, especialmente após 22h e antes das 8h",
      details: ["Música em volume baixo", "Conversas em tom normal", "Evite arrastar móveis"]
    },
    {
      icon: Cigarette,
      title: "Proibido fumar",
      description: "É totalmente proibido fumar dentro do apartamento",
      details: ["Área externa disponível", "Multa de R$ 500 se descumprida", "Detector de fumaça ativo"]
    },
    {
      icon: Users,
      title: "Limite de pessoas",
      description: "Máximo de 4 pessoas no apartamento",
      details: ["Apenas hóspedes registrados", "Visitas até 22h", "Informe visitantes ao anfitrião"]
    },
    {
      icon: Clock,
      title: "Horários de entrada",
      description: "Portaria fechada entre 00h e 6h",
      details: ["Entrada restrita neste período", "Avisar chegadas tardias", "Interfone disponível"]
    },
    {
      icon: Trash2,
      title: "Lixo e limpeza",
      description: "Mantenha o apartamento organizado",
      details: ["Separe o lixo corretamente", "Lave louças após uso", "Lixo sai terças e sextas"]
    },
    {
      icon: Wifi,
      title: "Internet responsável",
      description: "Use com consciência e responsabilidade",
      details: ["Não compartilhe a senha", "Evite downloads pesados", "Respeite os termos de uso"]
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
              <div className="w-8 h-8 bg-gradient-to-r from-primary-light to-secondary rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-foreground font-['Playfair_Display']">
                Regras da casa
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
              Para uma convivência harmoniosa
            </h1>
            <p className="text-muted-foreground text-lg">
              Algumas diretrizes simples para garantir que todos tenham uma excelente experiência
            </p>
          </div>

          {/* Welcome Message */}
          <Card className="bg-gradient-primary text-white shadow-warm mb-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Bem-vindos ao nosso lar! 🏠
              </h3>
              <p className="text-white/90">
                Estas regras existem para garantir o conforto de todos os hóspedes e vizinhos. 
                Contamos com seu respeito e colaboração.
              </p>
            </CardContent>
          </Card>

          {/* Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <Card key={index} className="bg-surface border-subtle shadow-md hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {rule.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {rule.description}
                        </p>
                        <ul className="space-y-1">
                          {rule.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
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

          {/* Emergency & Contact */}
          <Card className="bg-surface border-subtle shadow-md mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Em caso de problemas ou emergências
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Anfitrião</h4>
                  <p className="text-sm text-muted-foreground">WhatsApp: (11) 99999-9999</p>
                  <p className="text-sm text-muted-foreground">Disponível 24h para emergências</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Emergências</h4>
                  <p className="text-sm text-muted-foreground">Bombeiros: 193</p>
                  <p className="text-sm text-muted-foreground">Polícia: 190</p>
                  <p className="text-sm text-muted-foreground">SAMU: 192</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Penalties */}
          <Card className="bg-gradient-to-r from-warning/10 to-warning/5 border-warning/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                ⚠️ Multas por descumprimento
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Fumar no apartamento: <span className="font-semibold text-foreground">R$ 500</span></p>
                <p>• Excesso de ruído/reclamações: <span className="font-semibold text-foreground">R$ 200</span></p>
                <p>• Perda de chaves: <span className="font-semibold text-foreground">R$ 150</span></p>
                <p>• Danos ao imóvel: <span className="font-semibold text-foreground">Valor do reparo</span></p>
              </div>
            </CardContent>
          </Card>

          {/* Thank You */}
          <Card className="bg-gradient-warm text-white shadow-warm mb-8">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Obrigado pela colaboração! ❤️
              </h3>
              <p className="text-white/90">
                Seu respeito às regras garante que possamos continuar oferecendo 
                uma experiência excepcional para todos nossos hóspedes.
              </p>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4 font-['Playfair_Display']">
              Agora vamos explorar
            </h3>
            <p className="text-muted-foreground mb-6">
              Descubra como chegar ao apartamento e conhecer a região
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/directions">
                <Button size="lg" className="bg-gradient-primary text-white shadow-warm hover:shadow-lg transition-all">
                  Como chegar →
                </Button>
              </Link>
              <Link to="/guides">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  Guias da região
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;