import classes from './App.module.scss';
import { Hello } from 'rc-datatable';

function App() {
  return (
    <div className={classes['App']}>
      <header className={classes["App-header"]}>
        <Hello />
      </header>
    </div>
  );
}

export default App;