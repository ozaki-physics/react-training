import classes from "./cssModule.module.scss";

export const CssModule = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Module</p>
      <button className={classes.button}>ボタン</button>
    </div>
  );
};
