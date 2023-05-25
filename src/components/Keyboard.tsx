import classes from './Keyboard.module.css';
const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  disabled: boolean;
  addGuessedLetter(letter: string): void;
};
const Keyboard = ({
  activeLetters,
  inactiveLetters,
  disabled,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.subContainer}>
        {KEYS.map((letter) => {
          const isActive = activeLetters.includes(letter);
          const isInactive = inactiveLetters.includes(letter);
          return (
            <button
              onClick={() => addGuessedLetter(letter)}
              className={`${classes.btn} ${isActive && classes.active} ${
                isInactive && classes.inactive
              }`}
              key={letter}
              disabled={isActive || isInactive || disabled}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Keyboard;
