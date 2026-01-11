import { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import ContactForm, { FormType } from './ContactForm';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: FormType;
  contextData?: {
    psychologist?: string;
    eventName?: string;
  };
}

const ContactFormModal = ({ open, onOpenChange, type, contextData }: ContactFormModalProps) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSuccess = () => {
    setFormStatus('success');
  };

  const handleError = () => {
    setFormStatus('error');
  };

  const handleClose = () => {
    // Reset status when closing
    setTimeout(() => setFormStatus('idle'), 300);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        {formStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Заявка отправлена!
            </h3>
            <p className="text-muted-foreground mb-6">
              Спасибо за вашу заявку. Мы свяжемся с вами в ближайшее время.
            </p>
            <Button
              onClick={handleClose}
              className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground"
            >
              Закрыть
            </Button>
          </div>
        ) : formStatus === 'error' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Ошибка отправки
            </h3>
            <p className="text-muted-foreground mb-6">
              К сожалению, произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                onClick={handleClose}
              >
                Закрыть
              </Button>
              <Button
                onClick={() => setFormStatus('idle')}
                className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground"
              >
                Попробовать снова
              </Button>
            </div>
          </div>
        ) : (
          <ContactForm
            type={type}
            contextData={contextData}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;

