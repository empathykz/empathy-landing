import { Card } from '@/components/ui/card';
import { ScrollText, Shield, Clock, UserCheck } from 'lucide-react';

const OfferSection = () => {
  const offerItems = [
    {
      icon: UserCheck,
      title: "Квалифицированные специалисты",
      description: "Все наши психологи имеют высшее профильное образование, лицензии и регулярно проходят повышение квалификации. 16 психологов и немедицинских психотерапевтов - от бакалавров до кандидатов наук, работающих в КПТ 3-4 волны, с обязательной супервизией и интервизией."
    },
    {
      icon: Shield,
      title: "Конфиденциальность",
            description: "Гарантируем полную конфиденциальность ваших данных и содержания сессий в соответствии с профессиональным кодексом, этическим кодексом психологов и законом РК «О психологической деятельности». Мы не просим и не выкладываем нигде ваши отзывы и кейсы."
    },
    {
      icon: Clock,
      title: "Гибкий график",
      description: "Предлагаем удобное время для сессий, включая вечерние часы и выходные дни. Возможность онлайн-консультаций и оффлайн в Астане, Алматы, Караганде."
    },
    {
      icon: ScrollText,
      title: "Индивидуальный подход",
      description: "Мы работаем по протоколам метода КПТ (когнитивно-поведенческой терапии) и поднаправлений (таких как схема-терапия, диалектико-поведенческая терапия и др.) и всегда учитываем, что каждый клиент уникален - у вас свои ценности, чувства, переживания, диагнозы, жизненный опыт, и мы адаптируем терапию под вас и ваши потребности."
    }
  ];

  return (
    <section id="offer" className="py-20 bg-section-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Наша <span className="text-transparent bg-clip-text bg-gradient-primary">оферта</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
          Подробнее о терапии здесь. Условия предоставления психологических услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {offerItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-green transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30 animate-fade-in p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border/50 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <ScrollText className="w-6 h-6 text-primary mr-3" />
              Условия предоставления услуг
            </h3>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">1. Общие положения</h4>
                <p className="leading-relaxed">
                  Настоящая оферта определяет условия предоставления психологических услуг 
                  ИП "Психолог Аманжолов" (ИИН: 990831350623). Заказ услуги означает полное согласие с условиями оферты.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">2. Услуги</h4>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Индивидуальное психологическое консультирование</li>
                  <li>Семейная и парная терапия</li>
                  <li>Детская психология</li>
                  <li>Групповые программы и тренинги</li>
                  <li>Онлайн-консультации</li>
                  <li>Оффлайн-консультации</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">3. Стоимость и оплата</h4>
                <p className="leading-relaxed">
                  Стоимость услуг указана на сайте и может изменяться. Оплата производится 
                  до начала сессии или по индивидуальной договоренности. Возможна оплата через 
                  удаленный счет каспи, банковские платежи на счет ИП.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">4. Отмена и перенос</h4>
                <p className="leading-relaxed">
                  Отмена или перенос сессии возможны не позднее чем за 24 часа. 
                  При отмене менее чем за 24 часа сессия оплачивается в полном объеме.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">5. Конфиденциальность</h4>
                <p className="leading-relaxed">
                  Вся информация, полученная в ходе консультаций, является строго конфиденциальной 
                  и не передается третьим лицам без письменного согласия клиента, за исключением 
                  случаев, предусмотренных законодательством РК.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">6. Ответственность</h4>
                <p className="leading-relaxed">
                  Психолог несет ответственность за качество предоставляемых услуг в рамках 
                  профессиональной компетенции. Клиент несет ответственность за предоставление 
                  достоверной информации и соблюдение рекомендаций и своевременной оплаты услуг, 
                  посещения сессий.
                </p>
                <p className="leading-relaxed mt-2">
                  Возврат средств возможен полный или частичный в течение 4 (четырех) месяцев от фактической оплаты.
                  Если клиент сделал предоплату одной и более сессий, и ни одной сессии не было 
                  проведено, то делается полный возврат за исключением случаев не присутствия на 
                  сессиях клиента в установленное время.
                  Если клиент сделал предоплату за несколько сессий вперед, прошел часть сессий, то 
                  производится перерасчет и возвращается стоимость не проведенных сессий.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">7. Контакты</h4>
                <div className="leading-relaxed">
                  <p>Email: <a href="mailto:empathy.kz@gmail.com" className="text-primary hover:underline">empathy.kz@gmail.com</a></p>
                  <p>WhatsApp: <a href="https://wa.me/77715738204" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Написать в WhatsApp</a></p>
                  <p>Адрес: г. Астана, ул. Кайрата Рыскулбекова, д. 16</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfferSection; 
