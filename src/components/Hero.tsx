import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Users, Star, User, UserCheck, Baby, Award, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="main" className="relative min-h-screen bg-gradient-hero flex items-center justify-center pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(88 50% 53% / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, hsl(88 50% 53% / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, hsl(88 50% 53% / 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 w-24 h-24 bg-gradient-primary rounded-full opacity-20" style={{
                animation: 'slowPing 4s cubic-bezier(0, 0, 0.2, 1) infinite'
              }}></div>
              <div className="absolute inset-0 w-24 h-24 bg-gradient-primary rounded-full" style={{
                animation: 'sunGlow 6s ease-in-out infinite alternate',
                filter: 'blur(4px)',
                transform: 'scale(1.05)'
              }}></div>
              
              {/* Main logo */}
              <div className="relative w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center animate-glow" style={{
                boxShadow: '0 0 20px rgba(139, 195, 74, 0.3), 0 0 40px rgba(139, 195, 74, 0.15), 0 0 60px rgba(139, 195, 74, 0.08)'
              }}>
                <div className="w-16 h-16 bg-primary-foreground rounded-full relative">
                  <div className="absolute inset-2 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary-foreground" style={{
                      animation: 'heartPulse 1.5s ease-in-out infinite',
                      filter: 'drop-shadow(0 0 8px rgba(139, 195, 74, 0.6)) drop-shadow(0 0 16px rgba(139, 195, 74, 0.4))',
                      willChange: 'transform'
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Вы заслуживаете быть{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              счастливыми
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 font-light">
            Казахстанский сервис психологической помощи "Эмпатия"
          </p>

          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-12 font-light">
            Какую поддержку вы ищете?
          </h2>

          {/* Service Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {/* Individual Therapy */}
            <Card className="group hover:shadow-green transition-all duration-500 hover:-translate-y-2 bg-primary/10 border-primary/30 hover:border-primary/50 cursor-pointer overflow-hidden mobile-card-animation active:scale-95 touch-manipulation">
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-3 min-h-[3.5rem] flex items-center justify-center">Личная терапия</h3>
                <p className="text-primary-foreground/80 mb-4">Для работы с собой</p>
                <Badge className="bg-primary text-primary-foreground">
                  <ArrowRight className="w-3 h-3 mr-1" />
                  Начать
                </Badge>
              </div>
            </Card>

            {/* Psychodiagnostic Tests */}
            <Card className="group hover:shadow-green transition-all duration-500 hover:-translate-y-2 bg-primary/10 border-primary/30 hover:border-primary/50 cursor-pointer overflow-hidden mobile-card-animation active:scale-95 touch-manipulation">
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-3 leading-tight min-h-[3.5rem] flex items-center justify-center">Диагностические тесты</h3>
                <p className="text-primary-foreground/80 mb-4">Проверьте свой уровень тревоги, депрессии и т.д.</p>
                <Badge className="bg-primary text-primary-foreground">
                  <ArrowRight className="w-3 h-3 mr-1" />
                  Начать
                </Badge>
              </div>
            </Card>

            {/* Child/Teen Therapy */}
            <Card className="group hover:shadow-green transition-all duration-500 hover:-translate-y-2 bg-primary/10 border-primary/30 hover:border-primary/50 cursor-pointer overflow-hidden mobile-card-animation active:scale-95 touch-manipulation">
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Baby className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-3 min-h-[3.5rem] flex items-center justify-center">Детская терапия</h3>
                <p className="text-primary-foreground/80 mb-4">Для детей и подростков</p>
                <Badge className="bg-primary text-primary-foreground">
                  <ArrowRight className="w-3 h-3 mr-1" />
                  Начать
                </Badge>
              </div>
            </Card>
          </div>

          {/* Trust Message */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-primary-foreground/20">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary mr-2" />
              <span className="text-lg font-semibold text-primary-foreground">Этичные, понимающие специалисты с профильным образованием</span>
            </div>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Выбирайте психолога для работы с жизненными кризисами, депрессией, тревогой, насилием, отношениями, травмами, нейроотличиями и многими другими запросами
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground shadow-green text-lg px-8 py-4 group mobile-button-animation touch-manipulation"
              onClick={() => document.getElementById('psychologists')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Найти психолога
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <UserCheck className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">16+</div>
              <div className="text-primary-foreground/70 text-sm leading-relaxed">Психологов и психотерапевтов - от бакалавров до кандидатов наук</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">1,500+</div>
              <div className="text-primary-foreground/70 text-sm leading-relaxed">Заявок на терапию</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground mb-2">100%</div>
              <div className="text-primary-foreground/70 text-sm leading-relaxed">Этика и конфиденциальность - не выкладываем и не требуем отзывы</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground mb-2">Научные методы</div>
              <div className="text-primary-foreground/70 text-sm leading-relaxed">Только научно-доказательные методы, признанные мировым сообществом, никакой эзотерики</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;