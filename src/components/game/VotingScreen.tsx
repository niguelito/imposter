import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, CheckCircle2, ShieldQuestion } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VotingScreenProps {
  numPlayers: number;
  onVote: (votes: number[]) => void;
}

export const VotingScreen: React.FC<VotingScreenProps> = ({ numPlayers, onVote }) => {
  const [currentPlayerVoter, setCurrentPlayerVoter] = useState(0);
  const [votes, setVotes] = useState<number[]>([]);

  const handlePlayerVote = (votedPlayerIndex: number) => {
    const newVotes = [...votes, votedPlayerIndex];
    if (currentPlayerVoter < numPlayers - 1) {
      setVotes(newVotes);
      setCurrentPlayerVoter(currentPlayerVoter + 1);
    } else {
      onVote(newVotes);
    }
  };

  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-md border-border shadow-2xl">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-primary/20 rounded-full">
            <ShieldQuestion className="w-10 h-10 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl font-headline">Player {currentPlayerVoter + 1}, cast your vote!</CardTitle>
        <p className="text-muted-foreground text-sm">Who do you think is the impostor?</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: numPlayers }).map((_, i) => (
            <Button
              key={i}
              variant="outline"
              disabled={i === currentPlayerVoter}
              onClick={() => handlePlayerVote(i)}
              className={cn(
                "h-16 flex items-center justify-start gap-3 text-lg font-headline border-muted hover:border-primary transition-all group",
                i === currentPlayerVoter && "opacity-50 cursor-not-allowed"
              )}
            >
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground">
                {i + 1}
              </div>
              <span>Player {i + 1}</span>
            </Button>
          ))}
        </div>
        
        <div className="pt-4 flex justify-center items-center gap-1">
          {Array.from({ length: numPlayers }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                i < currentPlayerVoter ? "bg-primary scale-110" : "bg-muted"
              )} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
