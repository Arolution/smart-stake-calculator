import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';

const Calculator = () => {
  const { t } = useLanguage();
  const [stake, setStake] = useState('1000');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-4 pt-24">
        <Card className="w-full max-w-4xl mx-auto border-2 border-gold/30 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              {t('calculator.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {t('calculator.stake')}
              </label>
              <Input
                type="number"
                value={stake}
                onChange={(e) => setStake(e.target.value)}
                placeholder="1000"
                className="text-lg"
              />
            </div>
            <Button variant="gold" size="lg" className="w-full">
              {t('calculator.calculate')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calculator;
