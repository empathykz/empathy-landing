import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const TestimonialsSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Анна К.",
      age: 28,
      problem: "Тревожность",
      text: "После нескольких месяцев работы с психологом я наконец-то научилась справляться с паническими атаками. Теперь чувствую себя намного увереннее.",
      rating: 5,
      sessions: 12,
      psychologist: "Асель Жанибекова"
    },
    {
      id: 2,
      name: "Максим Р.",
      age: 35,
      problem: "Семейные отношения",
      text: "Семейная терапия помогла нам с женой преодолеть кризис в отношениях. Мы научились лучше понимать друг друга и конструктивно решать конфликты.",
      rating: 5,
      sessions: 8,
      psychologist: "Алия Сарсенова"
    },
    {
      id: 3,
      name: "Елена М.",
      age: 42,
      problem: "Депрессия",
      text: "Благодаря профессиональной помощи смогла выйти из депрессии и вернуться к полноценной жизни. Очень благодарна за терпение и поддержку.",
      rating: 5,
      sessions: 16,
      psychologist: "Данияр Абдуллаев"
    },
    {
      id: 4,
      name: "Дарья С.",
      age: 24,
      problem: "Самооценка",
      text: "Работа над самооценкой изменила мою жизнь кардинально. Теперь я верю в себя и не боюсь ставить амбициозные цели.",
      rating: 5,
      sessions: 10,
      psychologist: "Амина Касымова"
    },
    {
      id: 5,
      name: "Александр Т.",
      age: 31,
      problem: "Профессиональное выгорание",
      text: "Терапия помогла мне понять причины выгорания и найти баланс между работой и личной жизнью. Снова получаю удовольствие от того, что делаю.",
      rating: 5,
      sessions: 14,
      psychologist: "Асель Жанибекова"
    },
    {
      id: 6,
      name: "Мария В.",
      age: 29,
      problem: "Детско-родительские отношения",
      text: "Консультации по детской психологии помогли наладить отношения с сыном-подростком. Теперь мы понимаем друг друга намного лучше.",
      rating: 5,
      sessions: 6,
      psychologist: "Данияр Абдуллаев"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Присоединяйтесь к тысячам людей, которые уже изменили свою жизнь
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Начните свой путь к психологическому благополучию уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-green"
              >
                Записаться на консультацию
              </button>
              <a
                href="#faq"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground/30 text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors font-medium"
              >
                Узнать больше
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        type="booking"
      />
    </section>
  );
};

export default TestimonialsSection; 