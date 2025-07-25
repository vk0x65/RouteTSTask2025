import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ErrorMessage = ({ 
  title = 'Something went wrong', 
  message = 'We encountered an error while loading the data.',
  onRetry = null 
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
        <AlertCircle className="w-8 h-8 text-destructive" />
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground max-w-md">{message}</p>
      </div>

      {onRetry && (
        <Button onClick={onRetry} variant="outline" className="mt-4">
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorMessage;

