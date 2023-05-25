import classes from './HangmanWord.module.css';
type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};
const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className={classes.container}>
      {wordToGuess.split('').map((letter, index) => (
        <span className={classes.border} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color:
                !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
export default HangmanWord;
