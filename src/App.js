import Congrats from './componets/Congrats/Congrats'
import GuessedWords from './componets/GuessedWords/GuessedWords'


function App() {
  return (
    <div data-test='component-app' className="Container">
    <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{guessedWord: 'train' ,letterMatchCount: 3 }]}/>
    </div>
  );
}

export default App;
