# Final Proposal - Interactive Musical Buckets

## Background
My project, which I will call "Musical Buckets" for now, is a fun interactive game-like demo where the user will collect musical notes falling from the sky. The user will have control over a "bucket" of some sorts at the bottom of the screen, which they can move around to catch these notes. As they amass notes, they will show up at the bottom of the screen in sequence until they reach the limit. As they collect, they are encouraged to match a sequence of notes at the bottom, which will be random children's melodies such as Mary Had a Little Lamb, or Twinkle Twinkle.

The user can then end the game, and the musical note sequence that they have collected will play (likely with some sort of backbeat to make it funky). At the same time the little mascot guy on the left will dance (hopefully with a disco ball) to the tune that the user has created. I'll also hopefully be able to implement other ways that the user can change up the demo, such as different kinds of notes, different speeds of falling notes, and more.

## Functionality & MVPs
With "Interactive Musical Buckets", users will be able to:
- Move a bucket around at the bottom of the screen to catch notes
- Toggle different kinds of notes that they can catch
- Start, pause, and reset the demo state
- Change the volume of the music

Additionally, the project will include:
- A production README
- An ABOUT module that describes the demo and what it can do

## Wireframes

![plot](./wireframes.png)
- Controls include how to move buckets, start, stop, and restart buttons
- Toggles for volume and different demo types are on the right
- The little mascot guy on the left will not be interacted with
- The musical notes collected will be displayed at the bottom, and under it will be a recommended sequence

## Technologies, Libraries, APIs
This project will be implemented with he following technologies:
- The Canvas API to render the board
- npm and webpack
- Web Audio API

## Implementation Timeline
- Friday Afternoon and Weekend: set up the project, research necessary libraries or APIs, and figure out how to manipulate canvas on screen. Get the basic layout done.
- Monday: Implement logic of the musical notes, including the collection of notes, how they fall, and what happens when the sequence is finished. Hopefully will also be able to implement the demo controls here, like stop and start.
- Tuesday: Start on the audio portion of the demo - how musical notes will be stored and played. Additionally, I want to be able to start on the images for the little mascot guy for his dances.
- Wednesday: Hopefully focus on finishing up the audio and work on finishing touches such as a colorful and appealing site design. Also hope to implement the toggles for different types of notes and different speed of falling notes.
- Thursday: Upload final project to GitHub, and rewrite proposal as a production README.

## Bonus Features
- A colorful disco ball that appears over the screen while the music is playing
- Add more interactive portions of the site, such as interacting with little mascot guy