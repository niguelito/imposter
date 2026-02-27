import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Users, Play, Settings2 } from 'lucide-react';

interface SetupScreenProps {
  numPlayers: number;
  setNumPlayers: (val: number) => void;
  onStart: () => void;
}

export const SetupScreen: React.FC<SetupScreenProps> = ({ numPlayers, setNumPlayers, onStart }) => {
  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-md border-border shadow-2xl">
      <CardHeader className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-4 bg-primary/20 rounded-full">
            <Settings2 className="w-10 h-10 text-primary animate-pulse-subtle" />
          </div>
        </div>
        <div className="space-y-1">
          <CardTitle className="text-3xl font-headline tracking-tight">Game Setup</CardTitle>
          <CardDescription className="text-muted-foreground">Configure your round of Word Impostor</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="players" className="text-lg font-medium flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              Players
            </Label>
            <span className="text-2xl font-bold font-headline text-primary bg-primary/10 px-3 py-1 rounded-md">
              {numPlayers}
            </span>
          </div>
          <Slider
            id="players"
            min={3}
            max={12}
            step={1}
            value={[numPlayers]}
            onValueChange={(vals) => setNumPlayers(vals[0])}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground px-1">
            <span>3 Players</span>
            <span>12 Players</span>
          </div>
        </div>

        <Button 
          onClick={onStart} 
          size="lg" 
          className="w-full h-14 text-lg font-headline btn-primary shadow-lg shadow-primary/20"
        >
          <Play className="mr-2 h-5 w-5 fill-current" />
          Start Game
        </Button>
      </CardContent>
    </Card>
  );
};
