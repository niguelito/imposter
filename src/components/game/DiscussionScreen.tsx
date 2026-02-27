import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Timer, MessageSquare, Vote, ArrowRight } from 'lucide-react';

interface DiscussionScreenProps {
  onFinishDiscussion: () => void;
}

export const DiscussionScreen: React.FC<DiscussionScreenProps> = ({ onFinishDiscussion }) => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes default

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="w-full max-w-md bg-card/80 backdrop-blur-md border-border shadow-2xl">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-accent/20 rounded-full">
            <MessageSquare className="w-10 h-10 text-accent animate-bounce" />
          </div>
        </div>
        <CardTitle className="text-3xl font-headline tracking-tight">Time to Discuss</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 text-center">
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-primary font-headline text-5xl tabular-nums">
            <Timer className="w-8 h-8" />
            {formatTime(timeLeft)}
          </div>
          <p className="text-muted-foreground text-sm">Question each other carefully!</p>
        </div>

        <div className="p-4 bg-secondary/30 rounded-lg text-left text-sm space-y-2">
          <p className="font-semibold text-accent">Tips for players:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Don't be too specific with your clues.</li>
            <li>The Impostor is trying to blend in!</li>
            <li>Watch for hesitant or vague answers.</li>
          </ul>
        </div>

        <Button 
          onClick={onFinishDiscussion} 
          size="lg" 
          className="w-full h-14 text-lg font-headline btn-primary"
        >
          Go to Voting
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  );
};
