import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UserSearch, HelpCircle, ArrowRight } from 'lucide-react';

const PsychologistSelectionSection = () => {
  return (
    <section id="selection" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Как выбрать <span className="text-transparent bg-clip-text bg-gradient-primary">психолога?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Вы можете выбрать психолога или психотерапевта самостоятельно или мы можем помочь вам, 
            показав подходящего по вашему анамнезу, запросу, предпочтениям и комфортному формату терапии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Self Selection Card */}
          <Card className="group hover:shadow-green transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30 animate-fade-in p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <UserSearch className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                Выбрать самостоятельно
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Просмотрите профили наших специалистов, ознакомьтесь с их образованием, 
                опытом и подходами к терапии. Выберите того, кто вам больше всего подходит.
              </p>
              <Button 
                className="w-full bg-gradient-primary hover:bg-primary-dark text-primary-foreground group-hover:shadow-green transition-all duration-300"
                onClick={() => document.getElementById('psychologists')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Посмотреть специалистов
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Assisted Selection Card */}
          <Card className="group hover:shadow-green transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30 animate-fade-in p-8" style={{ animationDelay: '0.1s' }}>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <HelpCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                Не знаю кого выбрать
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Мы поможем вам подобрать подходящего специалиста на основе вашего запроса, 
                предпочтений по формату работы и комфортному стилю общения.
              </p>
              <Button 
                className="w-full bg-gradient-primary hover:bg-primary-dark text-primary-foreground group-hover:shadow-green transition-all duration-300"
              >
                Помочь с выбором
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            Все наши специалисты проходят тщательный отбор. Вы можете быть уверены 
            в их профессионализме, образовании и квалификации. Важно найти того психолога, 
            с которым вам будет комфортно работать.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PsychologistSelectionSection;

