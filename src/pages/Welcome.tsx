import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex items-center justify-center p-4 pt-24">
        <Card className="w-full max-w-2xl border-2 border-gold/30 shadow-xl">
          <CardContent className="p-8 space-y-6 text-center">
            <h1 className="text-3xl font-bold text-foreground">
              {t('welcome.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('welcome.description')}
            </p>
            <Button
              variant="gold"
              size="lg"
              className="w-full max-w-xs"
              onClick={() => navigate('/disclaimer')}
            >
              {t('welcome.continue')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Welcome;
