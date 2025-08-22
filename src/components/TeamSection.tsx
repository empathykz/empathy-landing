import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Calendar, MessageCircle } from 'lucide-react';

const TeamSection = () => {
  const psychologists = [
    {
      name: 'Таулан Аманжолов',
      role: 'Психолог',
      specialization: 'Семейная терапия',
      experience: '8 лет опыта',
      rating: 4.9,
      image: '/taulan.jpg',
      verified: true
    },
    {
      name: 'Салеш Айжан',
      role: 'Психолог',
      specialization: 'Когнитивно-поведенческая терапия',
      experience: '6 лет опыта',
      rating: 4.8,
      image: '/aijan.jpg',
      verified: true
    },
    {
      name: 'Жанна Утагиева',
      role: 'Психолог',
      specialization: 'Детская психология',
      experience: '10 лет опыта',
      rating: 4.9,
      image: '/zhanna.jpg',
      verified: true
    },
    {
      name: 'Хасенов Санжар',
      role: 'Психолог',
      specialization: 'Гештальт-терапия',
      experience: '7 лет опыта',
      rating: 4.7,
      image: '/sanzhar.jpg',
      verified: true
    }
  ];

  const consultants = [
    {
      name: 'Арнур Кожагапаров',
      role: 'Консультант',
      specialization: 'Карьерное консультирование',
      experience: '5 лет опыта',
      rating: 4.6,
      image: '/arnur.jpg',
      verified: false
    },
    {
      name: 'Дарья Тетерина',
      role: 'Консультант',
      specialization: 'Личностный рост',
      experience: '4 года опыта',
      rating: 4.5,
      image: '/dariya.jpg',
      verified: false
    },
    {
      name: 'Сара Рысбекова',
      role: 'Консультант',
      specialization: 'Стресс-менеджмент',
      experience: '3 года опыта',
      rating: 4.4,
      image: '/sara.jpg',
      verified: false
    },
    {
      name: 'Кирилл Дукарт',
      role: 'Консультант',
      specialization: 'Бизнес-психология',
      experience: '6 лет опыта',
      rating: 4.3,
      image: '/kirill.jpg',
      verified: true
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
        <h3 className="text-xl font-semibold text-card-foreground mb-2">{person.name}</h3>
        <Badge variant="secondary" className="mb-3">
          {person.role}
        </Badge>
        
        <p className="text-muted-foreground mb-2">{person.specialization}</p>
        
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          {person.experience}
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