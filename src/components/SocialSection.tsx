import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, Mail, ExternalLink } from 'lucide-react';

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Наш <span className="text-transparent bg-clip-text bg-gradient-primary">Instagram</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Полезные советы, психологические инсайты и актуальная информация
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {instagramPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="group hover:shadow-green transition-all duration-500 hover:-translate-y-2 bg-card/10 backdrop-blur-sm border-primary-foreground/20 hover:border-primary/50 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">{post.caption}</h3>
                  <p className="text-white/80 text-sm">{post.description}</p>
                </div>
                <Button
                  size="sm"
                  className="absolute top-4 right-4 bg-primary/20 hover:bg-primary text-primary-foreground backdrop-blur-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-primary-foreground/60">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">❤️ {post.likes}</span>
                    <span className="text-sm">💬 {post.comments}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-foreground hover:bg-primary/20"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg group"
            >
              <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Instagram
            </Button>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Telegram
            </Button>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Email
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