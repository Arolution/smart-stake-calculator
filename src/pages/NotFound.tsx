import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-gold">404</h1>
        <p className="text-xl text-muted-foreground">Page not found</p>
        <Button variant="gold" onClick={() => navigate('/')}>
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
