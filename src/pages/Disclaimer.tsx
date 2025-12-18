import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { Info, BarChart3, TrendingUp, ShieldAlert, ArrowDown } from 'lucide-react';

const Disclaimer = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [accepted, setAccepted] = useState(false);

  const paragraphs = [
    { icon: Info, text: t('disclaimer.text1') },
    { icon: BarChart3, text: t('disclaimer.text2') },
    { icon: TrendingUp, text: t('disclaimer.text3') },
    { icon: ShieldAlert, text: t('disclaimer.text4') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex items-center justify-center p-4 pt-24">
        <Card className="w-full max-w-2xl border-2 border-gold/30 shadow-xl">
          <CardContent className="p-8 space-y-6">
            <h1 className="text-3xl font-bold text-center text-foreground">
              {t('disclaimer.title')}
            </h1>

            <div className="space-y-4">
              {paragraphs.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4">
              <input
                type="checkbox"
                id="accept"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="w-5 h-5 accent-gold"
              />
              <label htmlFor="accept" className="text-foreground cursor-pointer">
                {t('disclaimer.checkbox')}
              </label>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6 text-gold animate-bounce" />
            </div>

            <Button
              variant="gold"
              size="lg"
              className="w-full"
              disabled={!accepted}
              onClick={() => navigate('/calculator')}
            >
              {t('disclaimer.accept')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Disclaimer;
