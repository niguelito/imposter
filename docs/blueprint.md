# **App Name**: Word Impostor

## Core Features:

- Game Setup & Configuration: Allow players to configure game parameters such as the number of participants (3-12) and choose between a built-in or custom word/category dataset for gameplay.
- Impostor Role Assignment: Randomly assign one player as the impostor, showing them only the category, while regular players are shown the specific secret word.
- Private Role Viewing: Facilitate a secure, private role reveal sequence for each player, ensuring no accidental re-viewing before passing the device.
- Discussion Phase Timer: Display a timed discussion screen for players to deliberate and identify the impostor.
- Player Voting System: Enable all players to cast their vote for who they suspect is the impostor from a list of player numbers.
- Results & Outcome Display: Clearly reveal the impostor's identity, the secret word, and whether the players successfully identified the impostor, along with the vote tally.
- New Game & Restart: Provide a simple interface option to restart the current game or begin an entirely new one.

## Style Guidelines:

- The application employs a sophisticated dark mode palette, inspired by themes of mystery and digital interfaces. The primary color, a medium purple (`#9370FF`), is vibrant and engaging against a very dark, subtly violet background (`#151318`). An accent of bright sky blue (`#8EDAFF`) provides clear visual contrast for interactive elements and highlights, ensuring readability and a modern aesthetic.
- Headlines and prominent text will use 'Space Grotesk', a sans-serif font with a techy, contemporary feel, providing visual punch. Body text and longer content will utilize 'Inter', a neutral and highly readable sans-serif, ensuring clarity and legibility across various screen sizes and text lengths.
- Clean, minimalistic line icons will be used for navigation, actions (like 'reveal role', 'pass device', 'vote'), and player identification to maintain a sleek, modern game interface.
- A mobile-first, single-column layout optimized for small screens using CSS Flexbox and Grid. Core game phases are presented within centered, card-style UI elements, expanding adaptively for larger displays without horizontal scrolling, maintaining large tap targets.
- Subtle, smooth transition animations will be used when moving between game phases (e.g., from role reveal to discussion) and when passing the device between players to enhance the user experience and create a fluid feel.