import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, User, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoleRevealProps {
  playerIndex: number;
  role: 'impostor' | 'player';
  word: string;
  category: string;
  onNext: () => void;
}

export const RoleReveal: React.FC<RoleRevealProps> = ({ playerIndex, role, word, category, onNext }) => {
  const [revealed, setRevealed] = useState(false);

  const handleNext = () => {
    setRevealed(false);
    onNext();
  };

  return (
    <Card className="w-full max-w-md bg-card/90 backdrop-blur-lg border-border shadow-2xl overflow-hidden">
      <CardHeader className="text-center pb-2">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="p-4 bg-secondary rounded-full">
              <User className="w-12 h-12 text-foreground" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-card">
              P{playerIndex + 1}
            </div>
          </div>
        </div>
        <CardTitle className="text-2xl font-headline">Player {playerIndex + 1}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6 flex flex-col items-center">
        <p className="text-muted-foreground text-sm text-center">
          Tap below to reveal your secret role. <br/>Keep it hidden from others!
        </p>

        <div 
          onClick={() => setRevealed(!revealed)}
          className={cn(
            "w-full h-48 rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all duration-500",
            revealed 
              ? "bg-primary/10 border-primary/50" 
              : "bg-secondary/30 border-muted-foreground/30 hover:bg-secondary/50"
          )}
        >
          {revealed ? (
            <div className="text-center animate-in fade-in zoom-in duration-300">
              {role === 'impostor' ? (
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <ShieldAlert className="w-10 h-10 text-destructive mb-2" />
                  </div>
                  <h3 className="text-xl font-bold text-destructive uppercase tracking-widest font-headline">Impostor</h3>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Category</p>
                    <p className="text-2xl font-bold text-accent font-headline">{category}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <Sparkles className="w-10 h-10 text-primary mb-2" />
                  </div>
                  <h3 className="text-xl font-bold text-primary uppercase tracking-widest font-headline">Regular Player</h3>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Secret Word</p>
                    <p className="text-2xl font-bold text-accent font-headline">{word}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center space-y-3">
              <Eye className="w-12 h-12 text-muted-foreground/50 mx-auto" />
              <p className="text-lg font-medium text-muted-foreground">Tap to Reveal</p>
            </div>
          )}
        </div>

        <Button 
          disabled={!revealed}
          onClick={handleNext}
          className="w-full h-12 text-lg font-headline transition-all"
        >
          {revealed ? "Understood" : "Reveal First"}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  );
};
