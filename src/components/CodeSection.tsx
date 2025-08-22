import { Card } from '@/components/ui/card';
import { Shield, Heart, Users, Eye, Brain, HandHeart } from 'lucide-react';

const CodeSection = () => {
  const codeItems = [
    {
      icon: Shield,
      title: "Профессиональная компетентность",
      description: "Мы предоставляем услуги только в рамках нашей профессиональной компетенции, постоянно повышаем квалификацию и следим за развитием психологической науки."
    },
    {
      icon: Eye,
      title: "Конфиденциальность",
      description: "Соблюдаем строгую конфиденциальность всей информации, полученной от клиентов. Информация может быть раскрыта только с письменного согласия или в случаях, предусмотренных законом."
    },
    {
      icon: Heart,
      title: "Уважение и достоинство",
      description: "Относимся к каждому клиенту с уважением, признаем ценность и достоинство каждой личности независимо от возраста, пола, расы, национальности, религии и социального статуса."
    },
    {
      icon: Users,
      title: "Недискриминация",
      description: "Обеспечиваем равное отношение ко всем клиентам, не допускаем дискриминации по любым признакам и создаем безопасную среду для всех обращающихся за помощью."
    },
    {
      icon: Brain,
      title: "Информированное согласие",
      description: "Предоставляем клиентам полную информацию о методах работы, целях терапии, возможных рисках и получаем осознанное согласие на проведение работы."
    },
    {
      icon: HandHeart,
      title: "Благополучие клиента",
      description: "Приоритетом нашей работы является благополучие клиента. Мы не используем терапевтические отношения в личных целях и не причиняем вреда."
    }
  ];

  return (
    <section id="code" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Профессиональный <span className="text-transparent bg-clip-text bg-gradient-primary">кодекс</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Этические принципы и стандарты профессиональной деятельности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {codeItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-green transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30 animate-fade-in p-8 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border/50 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary mr-3" />
              Основные принципы работы
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4 text-lg">Принцип "Не навреди"</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Мы принимаем все необходимые меры для предотвращения вреда клиенту. 
                  В случае невозможности оказания адекватной помощи, направляем к соответствующим специалистам.
                </p>
                
                <h4 className="font-semibold text-foreground mb-4 text-lg">Принцип автономии</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Уважаем право клиента на самоопределение и принятие собственных решений. 
                  Поддерживаем способность к независимому выбору.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4 text-lg">Принцип справедливости</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Обеспечиваем справедливое распределение ресурсов и равный доступ к качественной помощи. 
                  Не допускаем дискриминации в любых формах.
                </p>
                
                <h4 className="font-semibold text-foreground mb-4 text-lg">Принцип благодеяния</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Активно способствуем благополучию клиента, применяем наиболее эффективные 
                  и научно обоснованные методы работы.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3 text-lg flex items-center">
                <Heart className="w-5 h-5 text-primary mr-2" />
                Наши обязательства
              </h4>
              <ul className="text-muted-foreground space-y-2">
                <li>• Постоянное профессиональное развитие и обучение</li>
                <li>• Соблюдение границ терапевтических отношений</li>
                <li>• Честность и прозрачность в работе с клиентами</li>
                <li>• Сотрудничество с коллегами для обеспечения качества услуг</li>
                <li>• Ответственность перед профессиональным сообществом</li>
                <li>• Содействие развитию психологической науки и практики</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Кодекс разработан в соответствии с международными стандартами 
                и требованиями Ассоциации психологов Казахстана
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeSection; 