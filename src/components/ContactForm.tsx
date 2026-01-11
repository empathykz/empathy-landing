import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

export type FormType = 'general' | 'booking' | 'selection' | 'event';

interface ContactFormProps {
  type: FormType;
  contextData?: {
    psychologist?: string;
    eventName?: string;
  };
  onSuccess: () => void;
  onError: () => void;
}

const ContactForm = ({ type, contextData, onSuccess, onError }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const getFormTitle = () => {
    switch (type) {
      case 'booking':
        return 'Записаться на консультацию';
      case 'selection':
        return 'Помощь в выборе психолога';
      case 'event':
        return 'Регистрация на событие';
      default:
        return 'Связаться с нами';
    }
  };

  const getMessagePlaceholder = () => {
    switch (type) {
      case 'booking':
        return 'Расскажите кратко о вашем запросе (необязательно)';
      case 'selection':
        return 'Опишите вашу ситуацию, чтобы мы могли подобрать подходящего специалиста';
      case 'event':
        return 'Дополнительная информация (необязательно)';
      default:
        return 'Ваше сообщение';
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData(event.currentTarget);
      formDataToSend.append("access_key", "1dca06a5-9a33-4288-b55a-f3fa2b07b237");
      
      // Add form type
      formDataToSend.append("form_type", type);
      
      // Add context data if available
      if (contextData?.psychologist) {
        formDataToSend.append("psychologist", contextData.psychologist);
      }
      if (contextData?.eventName) {
        formDataToSend.append("event_name", contextData.eventName);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        onSuccess();
        setFormData({ name: '', phone: '', message: '' });
      } else {
        onError();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      onError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{getFormTitle()}</h3>
        <p className="text-muted-foreground text-sm">
          Заполните форму, и мы свяжемся с вами в ближайшее время
        </p>
      </div>

      {/* Show context info if available */}
      {contextData?.psychologist && (
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Психолог:</span> {contextData.psychologist}
          </p>
        </div>
      )}

      {contextData?.eventName && (
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Событие:</span> {contextData.eventName}
          </p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-foreground">
            Ваше имя <span className="text-destructive">*</span>
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Введите ваше имя"
            className="mt-1"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-foreground">
            Номер телефона <span className="text-destructive">*</span>
          </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+7 (___) ___-__-__"
            className="mt-1"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-foreground">
            Сообщение {type === 'selection' ? <span className="text-destructive">*</span> : '(необязательно)'}
          </Label>
          <Textarea
            id="message"
            name="message"
            required={type === 'selection'}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={getMessagePlaceholder()}
            rows={4}
            className="mt-1"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-primary hover:bg-primary-dark text-primary-foreground"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Отправка...
          </>
        ) : (
          'Отправить заявку'
        )}
      </Button>
    </form>
  );
};

export default ContactForm;

