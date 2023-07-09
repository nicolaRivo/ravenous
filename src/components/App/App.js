import styles from './App.module.css'
//import Business from './components/Business.js'
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import businessArray from './businessArray';

const App = () => {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businessArray={businessArray}/>
    </div>
  );
};


export default App;
