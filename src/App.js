import logo from './logo.svg';
import './App.css';
import ButtonList from './components/butonList';

const leftMenu = [
                  {children: <a target='_blank' href='https://github.com/Finrael/Nexus'>Home Repo</a>, classN:'standarButton'},
                  {children: <a target= '_self' href='https://www.google.com'>Placeholder Buton</a>, classN:'standarButton'}

                 ]

const App = ()=> {

  return (
    <div className="App">
      <ButtonList list={leftMenu}/>
    </div>
  );
}

export default App;
