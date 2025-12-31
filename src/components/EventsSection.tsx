import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: 'Мастер-класс: Работа с тревожностью',
      description: 'Практические техники для работы с тревожными расстройствами',
      date: '2024-02-15',
      time: '18:00',
      duration: '2 часа',
      location: 'Онлайн',
      maxParticipants: 25,
      currentParticipants: 18,
      price: '5000 ₸',
      category: 'Мастер-класс',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
      instructor: 'Асель Жанибекова'
    },
    {
      id: 2,
      title: 'Семинар: Детская психология',
      description: 'Основы работы с детьми и подростками',
      date: '2024-02-20',
      time: '15:00',
      duration: '3 часа',
      location: 'Алматы, ул. Абая 150',
      maxParticipants: 15,
      currentParticipants: 12,
      price: '8000 ₸',
      category: 'Семинар',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop',
      instructor: 'Данияр Абдуллаев'
    },
    {
      id: 3,
      title: 'Групповая терапия: Отношения',
      description: 'Работа с парами и семейными конфликтами',
      date: '2024-02-25',
      time: '19:00',
      duration: '1.5 часа',
      location: 'Нур-Султан, ул. Кунаева 12',
      maxParticipants: 20,
      currentParticipants: 8,
      price: '6000 ₸',
      category: 'Групповая терапия',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
      instructor: 'Алия Сарсенова'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Мастер-класс':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Семинар':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Групповая терапия':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="events" className="py-20 bg-section-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Предстоящие <span className="text-transparent bg-clip-text bg-gradient-primary">события</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Семинары, мастер-классы и групповые сессии для профессионального роста
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <Card 
              key={event.id}
              className="group hover:shadow-green transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30 animate-fade-in overflow-hidden mobile-card-animation active:scale-95 touch-manipulation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(event.category)} border`}>
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {event.price}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {event.time} ({event.duration})
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {event.currentParticipants}/{event.maxParticipants} участников
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    Ведущий: <span className="font-medium text-foreground">{event.instructor}</span>
                  </p>
                  
                  <Button 
                    className="w-full bg-gradient-primary hover:bg-primary-dark text-primary-foreground group"
                    disabled={event.currentParticipants >= event.maxParticipants}
                  >
                    {event.currentParticipants >= event.maxParticipants ? 'Места закончились' : 'Записаться'}
                    {event.currentParticipants < event.maxParticipants && (
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Показать все события
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection; 