import './App.css'
import MovieList from './MovieList'
import AddMovies from './AddMovies'
import Nav from './Nav'
import { MovieProvider } from './MovieContext'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovies />
        <MovieList />
      </div>
    </MovieProvider>
  )
}

export default App
