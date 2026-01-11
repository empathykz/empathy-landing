import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormModal from './ContactFormModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const menuItems = [
    { label: 'Главное', href: '#main' },
    { label: 'Психологи', href: '#psychologists' },
    { label: 'События', href: '#events' },
    { label: 'Оферта', href: '#offer' },
    { label: 'Кодекс', href: '#code' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-section-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
              <div className="w-8 h-8 bg-primary-foreground rounded-full relative">
                                 <div className="absolute inset-1 bg-primary rounded-full flex items-center justify-center">
                   <Heart className="w-4 h-4 text-primary-foreground" />
                 </div>
              </div>
            </div>
            <span className="text-2xl font-bold text-foreground">Эмпатия</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsContactModalOpen(true)}
            >
              Войти
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-primary hover:bg-primary-dark transition-all duration-300 shadow-green"
              onClick={() => setIsContactModalOpen(true)}
            >
              Заявка
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-section-background border-t border-border animate-slide-up">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Войти
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gradient-primary hover:bg-primary-dark"
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Заявка
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        type="general"
      />
    </header>
  );
};

export default Header;