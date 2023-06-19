import logo from './logo.svg';
import './App.module.css';
import classes from './App.module.css';

function App() {
  return (
      <div >
    <div className={classes.App} >
        <div className={classes.title}>
            <div className={classes.text}> это учебный </div>
            <div className={classes.text}> сайт без логики </div>
        </div>
        <div className={classes.buttons}>
        <div className={classes.button}>
      <button> кнопка1 </button>
        </div>
        <div className={classes.button}>
            <button> кнопка2 </button>
        </div>
    </div>
    </div>
      </div>
  );
}

export default App;
