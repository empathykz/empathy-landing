import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  GraduationCap, 
  Languages, 
  Brain, 
  Calendar,
  MapPin,
  MessageCircle
} from 'lucide-react';

interface Psychologist {
  name: string;
  role: string;
  image: string;
  verified: boolean;
  sessionPrice: string;
  shortRequests: string;
  fullRequests: string[];
  disorders: string[];
  education: string;
  approach: string;
  languages: string[];
  experience: string;
  formats: string[];
  fullDescription: string;
  specialization: string;
}

interface PsychologistDetailModalProps {
  psychologist: Psychologist | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PsychologistDetailModal = ({ 
  psychologist, 
  open, 
  onOpenChange 
}: PsychologistDetailModalProps) => {
  if (!psychologist) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{psychologist.name}</DialogTitle>
        </DialogHeader>

        {/* Header with Photo */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="relative w-48 h-48 mx-auto md:mx-0 flex-shrink-0">
            <img
              src={psychologist.image}
              alt={`${psychologist.name} - ${psychologist.role}, ${psychologist.experience}`}
              className="w-full h-full object-cover rounded-lg"
            />
            {psychologist.verified && (
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                <Award className="w-3 h-3 mr-1" />
                Верифицирован
              </Badge>
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-2">{psychologist.name}</h2>
            <Badge variant="secondary" className="mb-3">{psychologist.role}</Badge>
            <p className="text-muted-foreground mb-4">{psychologist.specialization}</p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                {psychologist.experience}
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                {psychologist.formats.join(', ')}
              </div>
              <div className="flex items-center font-bold text-primary text-lg">
                {psychologist.sessionPrice}
              </div>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
            О специалисте
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {psychologist.fullDescription}
          </p>
        </div>

        {/* Short Requests */}
        <div className="mb-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/50 rounded-lg p-4">
          <h3 className="text-lg font-bold text-foreground mb-2">
            С чем работает
          </h3>
          <p className="text-foreground leading-relaxed">{psychologist.shortRequests}</p>
        </div>

        {/* Full Requests List */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-3">
            Запросы (полный список)
          </h3>
          <ul className="space-y-2">
            {psychologist.fullRequests.map((request, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span className="text-muted-foreground leading-relaxed">{request}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disorders */}
        {psychologist.disorders && psychologist.disorders.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Расстройства, с которыми работает
            </h3>
            <ul className="space-y-2">
              {psychologist.disorders.map((disorder, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span className="text-muted-foreground leading-relaxed">{disorder}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Education */}
        <div className="mb-6 bg-muted/30 rounded-lg p-4">
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center">
            <GraduationCap className="w-5 h-5 mr-2 text-primary" />
            Образование
          </h3>
          <p className="text-muted-foreground leading-relaxed">{psychologist.education}</p>
        </div>

        {/* Approach */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-primary" />
            Подход/Метод
          </h3>
          <Badge variant="outline" className="text-sm">
            {psychologist.approach}
          </Badge>
        </div>

        {/* Languages */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center">
            <Languages className="w-5 h-5 mr-2 text-primary" />
            Языки
          </h3>
          <p className="text-muted-foreground">{psychologist.languages.join(', ')}</p>
        </div>

        {/* Book Button */}
        <div className="sticky bottom-0 bg-card pt-4 border-t border-border mt-6">
          <Button 
            asChild
            className="w-full bg-gradient-primary hover:bg-primary-dark transition-all duration-300"
            size="lg"
          >
            <a href="https://wa.me/77715738204" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Записаться на консультацию
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PsychologistDetailModal;

