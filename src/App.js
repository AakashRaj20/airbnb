import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import Data from './data'

function App() {


  const cards = Data.map(item => {
    return (
      <Card
      key = {item.id}
      {...item}
      />
    )
  })

  return (
    <div className="App">
      <header className="App-header">
       
          <Navbar />
          <Hero />
          <section className='cards-list'>
             {cards}
          </section>
          

      </header>
    </div>
  );
}

export default App;
