import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqData = [
    {
      question: "Как проходит первая консультация?",
      answer: "Первая консультация длится 50-60 минут. Психолог проведет диагностическую беседу, выяснит ваши потребности и цели, объяснит принципы работы и составит предварительный план терапии. Это безопасное пространство для знакомства."
    },
    {
      question: "Сколько стоят сеансы?",
      answer: "Стоимость индивидуальной консультации составляет от 8,000 до 15,000 тенге за сеанс, в зависимости от специалиста и формата (онлайн/офлайн). Семейная терапия стоит от 12,000 до 20,000 тенге. Первичная консультация может иметь скидку."
    },
    {
      question: "Как часто нужно посещать психолога?",
      answer: "Частота встреч зависит от ваших потребностей и рекомендаций специалиста. Обычно это 1 раз в неделю или 1 раз в 2 недели. На начальном этапе встречи могут быть чаще, затем интервалы могут увеличиваться."
    },
    {
      question: "Конфиденциальность: будет ли кто-то знать о моих сеансах?",
      answer: "Абсолютная конфиденциальность - основа нашей работы. Информация о ваших сеансах защищена психологической тайной. Мы не передаем данные третьим лицам без вашего письменного согласия, за исключением случаев, предусмотренных законом."
    },
    {
      question: "Можно ли проводить сеансы онлайн?",
      answer: "Да, мы предлагаем онлайн-консультации через защищенные платформы видеосвязи. Онлайн-терапия так же эффективна, как и очные встречи, и подходит для большинства запросов. Это удобно для людей с ограниченным временем или живущих в других городах."
    },
    {
      question: "С какими проблемами можно обратиться?",
      answer: "Мы работаем с широким спектром вопросов: тревожность, депрессия, отношения, самооценка, стресс, травмы, семейные конфликты, профессиональное выгорание, трудности в воспитании детей, личностный рост и многое другое."
    },
    {
      question: "Как выбрать подходящего психолога?",
      answer: "При выборе специалиста обратите внимание на его специализацию, опыт работы, образование и отзывы. Важно ваше личное ощущение комфорта и доверия. Мы поможем вам подобрать специалиста под ваши конкретные потребности."
    },
    {
      question: "Есть ли возрастные ограничения?",
      answer: "Мы работаем с людьми всех возрастов. У нас есть специалисты по детской психологии (от 3 лет), подростковой психологии, взрослой и геронтопсихологии. Для несовершеннолетних требуется согласие родителей."
    },
    {
      question: "Что делать в кризисной ситуации?",
      answer: "При острых кризисных состояниях обращайтесь на горячую линию экстренной психологической помощи: 150. Наши специалисты также доступны для экстренных консультаций. В случае угрозы жизни немедленно обращайтесь в службу скорой помощи."
    },
    {
      question: "Можно ли получить справку или заключение?",
      answer: "Психологи не выдают медицинские справки - это компетенция врачей-психиатров. Однако мы можем предоставить психологическое заключение для личного пользования или рекомендации для дальнейшей работы с другими специалистами."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in">
              Часто задаваемые <span className="text-transparent bg-clip-text bg-gradient-primary">вопросы</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Ответы на популярные вопросы о психологических услугах
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Не нашли ответ на свой вопрос?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+77777777777"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              Позвонить нам
            </a>
            <a
              href="mailto:info@empathy.kz"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
            >
              Написать email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 