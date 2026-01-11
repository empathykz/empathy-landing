import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

const SocialSection = () => {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
      caption: 'Разберем причины',
      description: 'Как справиться с тревожностью в современном мире',
      likes: 342,
      comments: 28
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      caption: 'Как не передать детям свои психологические травмы?',
      description: 'Полезные советы для родителей',
      likes: 567,
      comments: 45
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-8 max-w-2xl mx-auto">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg group w-full md:w-auto"
            >
              <a href="https://www.instagram.com/empathy.psy/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Instagram
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white shadow-lg group w-full md:w-auto"
            >
              <a href="https://wa.me/77715738204" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg group w-full md:w-auto"
            >
              <a href="https://t.me/Iamtaulan" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Telegram
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg group w-full md:w-auto"
            >
              <a href="mailto:Taulanamanzholov@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Email
              </a>
            </Button>
          </div>

          <div className="text-center text-primary-foreground/60 space-y-2">
            <p>© Все права защищены</p>
            <p>ИП "Психолог Аманжолов"</p>
            <p>ИИН: 990831350623</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;