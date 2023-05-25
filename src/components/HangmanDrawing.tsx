import classes from './HangmanDrawing.module.css';

const HEAD = <div key="head" className={classes.head}></div>;
const BODY = <div key="body" className={classes.body}></div>;
const RIGHT_ARM = <div key="right_arm" className={classes.right_arm}></div>;
const LEFT_ARM = <div key="left_arm" className={classes.left_arm}></div>;
const RIGHT_LEG = <div key="right_leg" className={classes.right_leg}></div>;
const LEFT_LEG = <div key="left_leg" className={classes.left_leg}></div>;

type HangmanDrawingProps = {
  numberOfGuesses: number;
};
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className={classes.container}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={classes.down}></div>
      <div className={classes.right}></div>
      <div className={classes.middle}></div>
      <div className={classes.bottom}></div>
    </div>
  );
};
export default HangmanDrawing;
