import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, RefreshCcw, ShieldAlert, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResultsScreenProps {
  impostorIndex: number;
  votes: number[];
  secretWord: string;
  category: string;
  onRestart: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ impostorIndex, votes, secretWord, category, onRestart }) => {
  const voteTallies = Array(votes.length).fill(0);
  votes.forEach(v => voteTallies[v]++);

  // Check if players won (voted for the correct impostor most often or at least found them)
  // Simply: if the player with max votes is the impostor
  const maxVotes = Math.max(...voteTallies);
  const mostVotedIndexes = voteTallies.map((v, i) => v === maxVotes ? i : -1).filter(v => v !== -1);
  const playersWon = mostVotedIndexes.includes(impostorIndex);

  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-md border-border shadow-2xl overflow-hidden">
      <div className={cn(
        "h-2 w-full",
        playersWon ? "bg-accent" : "bg-destructive"
      )} />
      
      <CardHeader className="text-center space-y-4">
        <div className="flex justify-center">
          <div className={cn(
            "p-6 rounded-full",
            playersWon ? "bg-accent/20" : "bg-destructive/20"
          )}>
            {playersWon ? (
              <Trophy className="w-16 h-16 text-accent animate-bounce" />
            ) : (
              <ShieldAlert className="w-16 h-16 text-destructive" />
            )}
          </div>
        </div>
        <div className="space-y-1">
          <CardTitle className="text-4xl font-headline tracking-tighter">
            {playersWon ? "Victory!" : "Defeat!"}
          </CardTitle>
          <p className="text-muted-foreground font-medium">
            {playersWon ? "The Impostor was caught!" : "The Impostor escaped!"}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="bg-secondary/40 p-4 rounded-xl border border-border space-y-4">
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span className="text-sm font-semibold uppercase text-muted-foreground">The Impostor</span>
            <span className="text-xl font-bold font-headline text-primary">Player {impostorIndex + 1}</span>
          </div>
          <div className="flex justify-between items-center border-b border-border pb-2">
            <span className="text-sm font-semibold uppercase text-muted-foreground">Secret Word</span>
            <span className="text-xl font-bold font-headline text-accent">{secretWord}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold uppercase text-muted-foreground">Category</span>
            <span className="text-xl font-bold font-headline text-accent/80">{category}</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase text-muted-foreground">Vote Tally</h3>
          <div className="grid grid-cols-1 gap-2">
            {voteTallies.map((count, i) => (
              <div key={i} className={cn(
                "flex items-center justify-between p-2 px-4 rounded-lg border",
                i === impostorIndex ? "bg-primary/10 border-primary/30" : "bg-muted/30 border-transparent"
              )}>
                <div className="flex items-center gap-3">
                  <span className="font-bold font-headline">Player {i + 1}</span>
                  {i === impostorIndex && <ShieldAlert className="w-4 h-4 text-primary" />}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">{count}</span>
                  <span className="text-xs text-muted-foreground">votes</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button 
          onClick={onRestart} 
          size="lg" 
          className="w-full h-14 text-lg font-headline btn-primary shadow-xl"
        >
          <RefreshCcw className="mr-2 h-5 w-5" />
          Play Again
        </Button>
      </CardContent>
    </Card>
  );
};
