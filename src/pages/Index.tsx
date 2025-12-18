import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg border-2 border-gold/30 shadow-xl">
        <CardContent className="p-8 space-y-8">
          <h1 className="text-3xl font-bold text-center text-foreground">
            {t('landing.title')}
          </h1>

          {/* Theme Selection */}
          <div className="space-y-3">
            <h2 className="text-lg font-medium text-center text-muted-foreground">
              {t('landing.theme')}
            </h2>
            <div className="flex gap-4 justify-center">
              <Button
                variant={theme === 'light' ? 'gold' : 'outline'}
                size="lg"
                onClick={() => setTheme('light')}
                className="flex-1 max-w-32"
              >
                <Sun className="w-5 h-5 mr-2" />
                {t('landing.day')}
              </Button>
              <Button
                variant={theme === 'dark' ? 'gold' : 'outline'}
                size="lg"
                onClick={() => setTheme('dark')}
                className="flex-1 max-w-32"
              >
                <Moon className="w-5 h-5 mr-2" />
                {t('landing.night')}
              </Button>
            </div>
          </div>

          {/* Language Selection */}
          <div className="space-y-3">
            <h2 className="text-lg font-medium text-center text-muted-foreground">
              {t('landing.language')}
            </h2>
            <div className="flex gap-4 justify-center">
              <Button
                variant={language === 'de' ? 'gold' : 'outline'}
                size="lg"
                onClick={() => setLanguage('de')}
                className="flex-1 max-w-32"
              >
                🇩🇪 Deutsch
              </Button>
              <Button
                variant={language === 'en' ? 'gold' : 'outline'}
                size="lg"
                onClick={() => setLanguage('en')}
                className="flex-1 max-w-32"
              >
                🇬🇧 English
              </Button>
            </div>
          </div>

          {/* Continue Button */}
          <Button
            variant="gold"
            size="lg"
            className="w-full"
            onClick={() => navigate('/welcome')}
          >
            {t('landing.continue')}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
