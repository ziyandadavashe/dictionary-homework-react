import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App mt-5">
      <div className="container">
        <h1 className="mt-5 mb-5">Dictionary App</h1>
        <main>
          <Dictionary defaultKeyword="daydream" />
        </main>
        <footer>
          <p>
            Coded by Ziyanda Davashe,{" "}
            <a
              href="https://github.com/ziyandadavashe"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
            , and{" "}
            <a
              href="https://prismatic-trifle-c87607.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
