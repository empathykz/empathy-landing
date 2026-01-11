import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Стоимость <span className="text-transparent bg-clip-text bg-gradient-primary">терапии у психологов</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Individual Sessions */}
          <Card className="p-8 bg-card border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">Посеансово</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-lg bg-muted/30">
                <div className="text-lg font-semibold text-muted-foreground mb-2">онлайн</div>
                <div className="text-3xl font-bold text-primary mb-4">12 тыс ₸</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-muted/30">
                <div className="text-lg font-semibold text-muted-foreground mb-2">оффлайн</div>
                <div className="text-3xl font-bold text-primary mb-4">13 тыс ₸</div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-xl font-bold text-foreground mb-4">4 сеанса по отдельности</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <div className="text-lg font-semibold text-muted-foreground mb-2">онлайн</div>
                  <div className="text-3xl font-bold text-primary mb-4">48 тыс ₸</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/30">
                  <div className="text-lg font-semibold text-muted-foreground mb-2">оффлайн</div>
                  <div className="text-3xl font-bold text-primary mb-4">52 тыс ₸</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Package Deal */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
              Выгодно
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Месяц терапии при оплате 4 сеансов сразу
            </h3>
            <p className="text-muted-foreground mb-6">Экономьте при оплате пакета сессий</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-lg bg-card border border-primary/20">
                <div className="text-lg font-semibold text-muted-foreground mb-2">онлайн</div>
                <div className="text-3xl font-bold text-primary mb-2">40 тыс ₸</div>
                <div className="text-sm text-muted-foreground mb-4">вместо</div>
                <div className="text-xl text-muted-foreground line-through">48 тыс ₸</div>
                <div className="mt-4 flex items-center justify-center text-sm text-green-600 dark:text-green-400 font-semibold">
                  <Check className="w-4 h-4 mr-1" />
                  Экономия 8,000 ₸
                </div>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card border border-primary/20">
                <div className="text-lg font-semibold text-muted-foreground mb-2">оффлайн</div>
                <div className="text-3xl font-bold text-primary mb-2">48 тыс ₸</div>
                <div className="text-sm text-muted-foreground mb-4">вместо</div>
                <div className="text-xl text-muted-foreground line-through">52 тыс ₸</div>
                <div className="mt-4 flex items-center justify-center text-sm text-green-600 dark:text-green-400 font-semibold">
                  <Check className="w-4 h-4 mr-1" />
                  Экономия 4,000 ₸
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

