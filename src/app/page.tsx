"use client"

import React, { useState, useCallback } from 'react';
import { SetupScreen } from '@/components/game/SetupScreen';
import { NamingScreen } from '@/components/game/NamingScreen';
import { RoleReveal } from '@/components/game/RoleReveal';
import { DiscussionScreen } from '@/components/game/DiscussionScreen';
import { VotingScreen } from '@/components/game/VotingScreen';
import { ResultsScreen } from '@/components/game/ResultsScreen';
import { GameCategories, getRandomWord } from '@/app/lib/game-data';

type GamePhase = 'setup' | 'naming' | 'reveal' | 'discussion' | 'voting' | 'results';

export default function Home() {
  const [phase, setPhase] = useState<GamePhase>('setup');
  const [numPlayers, setNumPlayers] = useState(3);
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [impostorIndex, setImpostorIndex] = useState(-1);
  const [gameCategory, setGameCategory] = useState(GameCategories.Regular);
  const [secretWord, setSecretWord] = useState('');
  const [category, setCategory] = useState('');
  const [revealPlayerIndex, setRevealPlayerIndex] = useState(0);
  const [votes, setVotes] = useState<number[]>([]);

  const goToNaming = () => {
    setPhase('naming');
  };

  const startNewGame = useCallback((names: string[]) => {
    setPlayerNames(names);
    const { word, category } = getRandomWord(gameCategory);
    const impIndex = Math.floor(Math.random() * numPlayers);
    
    setSecretWord(word);
    setCategory(category);
    setImpostorIndex(impIndex);
    setRevealPlayerIndex(0);
    setPhase('reveal');
  }, [numPlayers, gameCategory]);

  const handleNextReveal = () => {
    if (revealPlayerIndex < numPlayers - 1) {
      setRevealPlayerIndex(revealPlayerIndex + 1);
    } else {
      setPhase('discussion');
    }
  };

  const finishDiscussion = () => {
    setPhase('voting');
  };

  const handleVoting = (allVotes: number[]) => {
    setVotes(allVotes);
    setPhase('results');
  };

  const restart = () => {
    setPhase('setup');
    setPlayerNames([]);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
        {phase === 'setup' && (
          <SetupScreen 
            numPlayers={numPlayers} 
            setNumPlayers={setNumPlayers} 
            gameCategory={gameCategory}
            setGameCategory={setGameCategory}
            onStart={goToNaming}
          />
        )}

        {phase === 'naming' && (
          <NamingScreen 
            numPlayers={numPlayers} 
            onConfirm={startNewGame}
            onBack={() => setPhase('setup')}
          />
        )}

        {phase === 'reveal' && (
          <RoleReveal 
            playerIndex={revealPlayerIndex}
            playerName={playerNames[revealPlayerIndex]}
            role={revealPlayerIndex === impostorIndex ? 'impostor' : 'player'}
            word={secretWord}
            category={category}
            onNext={handleNextReveal}
          />
        )}

        {phase === 'discussion' && (
          <DiscussionScreen onFinishDiscussion={finishDiscussion} />
        )}

        {phase === 'voting' && (
          <VotingScreen 
            numPlayers={numPlayers} 
            playerNames={playerNames}
            onVote={handleVoting} 
          />
        )}

        {phase === 'results' && (
          <ResultsScreen 
            impostorIndex={impostorIndex}
            playerNames={playerNames}
            votes={votes}
            secretWord={secretWord}
            category={category}
            onRestart={restart}
          />
        )}
      </div>
    </main>
  );
}
