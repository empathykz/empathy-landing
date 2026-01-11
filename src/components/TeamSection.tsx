import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Calendar, MessageCircle, Info } from 'lucide-react';
import psychologistsData from '@/data/psychologists.json';
import PsychologistDetailModal from './PsychologistDetailModal';

const TeamSection = () => {
  const [selectedPsychologist, setSelectedPsychologist] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const psychologists = psychologistsData.filter(p => p.type === 'therapist');

  const handleViewDetails = (person: any) => {
    setSelectedPsychologist(person);
    setIsModalOpen(true);
  };

  const ProfileCard = ({ person, index }: { person: any; index: number }) => (
    <Card 
      className="group hover:shadow-green transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/30 animate-fade-in overflow-hidden mobile-card-animation active:scale-95 touch-manipulation"
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
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-card-foreground mb-1">{person.name}</h3>
          <Badge variant="secondary" className="text-xs">
            {person.role}
          </Badge>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
          {person.shortRequests}
        </p>
        
        <div className="space-y-2 mb-4 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
            {person.experience}
          </div>
          <div className="flex items-center">
            <Award className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
            {person.approach}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button 
            onClick={() => handleViewDetails(person)}
            variant="outline"
            className="w-full hover:bg-muted transition-all duration-300"
            size="sm"
          >
            <Info className="w-4 h-4 mr-2" />
            Подробнее
          </Button>
          <Button 
            asChild
            className="w-full bg-gradient-primary hover:bg-primary-dark group-hover:shadow-green transition-all duration-300 mobile-button-animation touch-manipulation"
            size="sm"
          >
            <a href="https://wa.me/77715738204" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Записаться
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="psychologists" className="py-20 bg-section-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Наши <span className="text-transparent bg-clip-text bg-gradient-primary">психологи</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Опытные КПТ-психологи, работающие с широким профилем запросов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {psychologists.map((person, index) => (
            <ProfileCard key={person.name} person={person} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Показать еще психологов
          </Button>
        </div>
      </div>

      <PsychologistDetailModal
        psychologist={selectedPsychologist}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export default TeamSection;