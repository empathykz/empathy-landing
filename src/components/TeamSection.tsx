import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Calendar, MessageCircle, GraduationCap, Languages, Brain } from 'lucide-react';

const TeamSection = () => {
  const psychologists = [
    {
      name: 'Таулан Аманжолов',
      role: 'Клинический психолог',
      specialization: 'Семейная терапия, работа с парами',
      experience: '8 лет опыта',
      rating: 4.9,
      image: '/taulan.jpg',
      verified: true,
      education: 'КазНУ им. аль-Фараби, магистр психологии',
      certifications: ['Системная семейная терапия', 'EFT для пар'],
      languages: ['Казахский', 'Русский', 'Английский'],
      sessionPrice: '12,000 ₸',
      approaches: ['Системная терапия', 'Эмоционально-фокусированная терапия'],
      description: 'Специализируется на решении семейных конфликтов и укреплении отношений в паре'
    },
    {
      name: 'Салеш Айжан',
      role: 'Психолог-психотерапевт',
      specialization: 'Когнитивно-поведенческая терапия',
      experience: '6 лет опыта',
      rating: 4.8,
      image: '/aijan.jpg',
      verified: true,
      education: 'Евразийский университет, магистр клинической психологии',
      certifications: ['КПТ Level 2', 'Работа с тревожными расстройствами'],
      languages: ['Казахский', 'Русский'],
      sessionPrice: '10,000 ₸',
      approaches: ['КПТ', 'Mindfulness-терапия'],
      description: 'Помогает справиться с тревожностью, депрессией и навязчивыми мыслями'
    },
    {
      name: 'Жанна Утагиева',
      role: 'Детский психолог',
      specialization: 'Детская и подростковая психология',
      experience: '10 лет опыта',
      rating: 4.9,
      image: '/zhanna.jpg',
      verified: true,
      education: 'АГУ им. Абая, кандидат психологических наук',
      certifications: ['Игровая терапия', 'АВА-терапия', 'Песочная терапия'],
      languages: ['Казахский', 'Русский'],
      sessionPrice: '11,000 ₸',
      approaches: ['Игровая терапия', 'Арт-терапия', 'Работа с родителями'],
      description: 'Работает с детьми от 3 лет, СДВГ, аутизм, поведенческие проблемы'
    },
    {
      name: 'Хасенов Санжар',
      role: 'Гештальт-терапевт',
      specialization: 'Гештальт-терапия, личностный рост',
      experience: '7 лет опыта',
      rating: 4.7,
      image: '/sanzhar.jpg',
      verified: true,
      education: 'МГИ им. Лобачевского, магистр психологии',
      certifications: ['Гештальт-терапевт (4 года)', 'Телесно-ориентированная терапия'],
      languages: ['Русский', 'Казахский', 'Немецкий'],
      sessionPrice: '13,000 ₸',
      approaches: ['Гештальт-подход', 'Телесно-ориентированная терапия'],
      description: 'Помогает в личностном росте, работе с травмами и самопознании'
    }
  ];

  const consultants = [
    {
      name: 'Арнур Кожагапаров',
      role: 'Карьерный консультант',
      specialization: 'Карьерное развитие, профориентация',
      experience: '5 лет опыта',
      rating: 4.6,
      image: '/arnur.jpg',
      verified: false,
      education: 'КазЭУ им. Т. Рыскулова, магистр управления',
      certifications: ['Career Development Facilitator', 'Коучинг ICF'],
      languages: ['Казахский', 'Русский', 'Английский'],
      sessionPrice: '8,000 ₸',
      approaches: ['Карьерный коучинг', 'Профориентационное тестирование'],
      description: 'Помогает найти призвание, сменить профессию и построить карьеру'
    },
    {
      name: 'Дарья Тетерина',
      role: 'Лайф-коуч',
      specialization: 'Личностный рост, целеполагание',
      experience: '4 года опыта',
      rating: 4.5,
      image: '/dariya.jpg',
      verified: false,
      education: 'СПбГУ, бакалавр психологии',
      certifications: ['Life Coach Institute', 'НЛП-практик'],
      languages: ['Русский', 'Английский'],
      sessionPrice: '7,000 ₸',
      approaches: ['Лайф-коучинг', 'НЛП', 'Техники визуализации'],
      description: 'Специализируется на постановке и достижении жизненных целей'
    },
    {
      name: 'Сара Рысбекова',
      role: 'Специалист по стрессу',
      specialization: 'Стресс-менеджмент, эмоциональное выгорание',
      experience: '3 года опыта',
      rating: 4.4,
      image: '/sara.jpg',
      verified: false,
      education: 'КазНПУ им. Абая, магистр психологии',
      certifications: ['Управление стрессом', 'Mindfulness MBSR'],
      languages: ['Казахский', 'Русский'],
      sessionPrice: '6,500 ₸',
      approaches: ['Техники релаксации', 'Mindfulness', 'Дыхательные практики'],
      description: 'Помогает справиться со стрессом и предотвратить эмоциональное выгорание'
    },
    {
      name: 'Кирилл Дукарт',
      role: 'Бизнес-психолог',
      specialization: 'Корпоративная психология, лидерство',
      experience: '6 лет опыта',
      rating: 4.3,
      image: '/kirill.jpg',
      verified: true,
      education: 'МГУ, кандидат психологических наук',
      certifications: ['Executive Coach', 'Организационная психология'],
      languages: ['Русский', 'Английский', 'Казахский'],
      sessionPrice: '15,000 ₸',
      approaches: ['Системный коучинг', 'Оценка персонала', 'Team building'],
      description: 'Работает с руководителями и командами, развитие лидерских качеств'
    }
  ];

  const ProfileCard = ({ person, index }: { person: any; index: number }) => (
    <Card 
      className="group hover:shadow-green transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30 animate-fade-in overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        {person.verified && (
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            <Award className="w-3 h-3 mr-1" />
            Верифицирован
          </Badge>
        )}
        
        <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{person.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-card-foreground mb-1 pr-2">{person.name}</h3>
            <Badge variant="secondary" className="text-xs">
              {person.role}
            </Badge>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className="text-primary font-bold text-lg whitespace-nowrap">
              {person.sessionPrice}
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{person.description}</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-start text-xs text-muted-foreground">
            <GraduationCap className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
            <span className="leading-tight">{person.education}</span>
          </div>
          
          <div className="flex items-start text-xs text-muted-foreground">
            <Award className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
            <div className="leading-tight">
              {person.certifications.map((cert, idx) => (
                <Badge key={idx} variant="outline" className="mr-1 mb-1 text-xs">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center text-xs text-muted-foreground">
            <Languages className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
            <span>{person.languages.join(', ')}</span>
          </div>
          
          <div className="flex items-start text-xs text-muted-foreground">
            <Brain className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
            <div className="leading-tight">
              {person.approaches.map((approach, idx) => (
                <Badge key={idx} variant="secondary" className="mr-1 mb-1 text-xs">
                  {approach}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            {person.experience}
          </div>
        </div>

        <Button 
          className="w-full bg-gradient-primary hover:bg-primary-dark group-hover:shadow-green transition-all duration-300"
          size="sm"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Записаться
        </Button>
      </div>
    </Card>
  );

  return (
    <section id="psychologists" className="py-20 bg-section-background">
      <div className="container mx-auto px-4">
        {/* Psychologists Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Наши <span className="text-transparent bg-clip-text bg-gradient-primary">психологи</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Профессиональные специалисты с многолетним опытом работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {psychologists.map((person, index) => (
            <ProfileCard key={person.name} person={person} index={index} />
          ))}
        </div>

        <div className="text-center mb-16">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Показать еще психологов
          </Button>
        </div>

        {/* Consultants Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-primary">Консультанты</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Опытные консультанты для решения различных жизненных вопросов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {consultants.map((person, index) => (
            <ProfileCard key={person.name} person={person} index={index + 4} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Показать еще консультантов
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;