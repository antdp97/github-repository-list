import './App.css';
import GitHubRepoListPage from "./components/GitHubRepoListPage";
import {Provider} from "./context";

function App() {
  return (
    <main className="App">
        <Provider>
            <GitHubRepoListPage />
        </Provider>
    </main>
  );
}

export default App;
