import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Check, ArrowLeft } from 'lucide-react';

interface NamingScreenProps {
  numPlayers: number;
  onConfirm: (names: string[]) => void;
  onBack: () => void;
}

export const NamingScreen: React.FC<NamingScreenProps> = ({ numPlayers, onConfirm, onBack }) => {
  const [names, setNames] = useState<string[]>(Array(numPlayers).fill(''));

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fill in default names for any empty fields
    const finalNames = names.map((name, i) => name.trim() || `Player ${i + 1}`);
    onConfirm(finalNames);
  };

  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-md border-border shadow-2xl">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" size="icon" onClick={onBack} className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl font-headline">Player Names</CardTitle>
        </div>
        <CardDescription>Enter the name of each player participating.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
            {Array.from({ length: numPlayers }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Label htmlFor={`player-${i}`} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-3 h-3" />
                  Player {i + 1}
                </Label>
                <Input
                  id={`player-${i}`}
                  placeholder={`Name for Player ${i + 1}`}
                  value={names[i]}
                  onChange={(e) => handleNameChange(i, e.target.value)}
                  className="bg-secondary/20 border-border focus:border-primary transition-colors h-11"
                  autoComplete="off"
                />
              </div>
            ))}
          </div>
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full h-14 text-lg font-headline btn-primary mt-6"
          >
            <Check className="mr-2 h-5 w-5" />
            Start Game
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
