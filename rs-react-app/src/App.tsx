import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <About />
        <Experience />
      </main>
    </>
  );
}

export default App;
