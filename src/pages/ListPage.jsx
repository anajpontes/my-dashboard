
import { useState } from "react";
import ListItem from "../components/ListItem"
import Panel from "../components/Panel"
import { useMovies } from "../context/MoviesContext";

 
const filterOptions = [
  {id: 'all', label: 'Todos'},
  {id: 'unwatched', label: 'Quero ver'},
  {id: 'completed', label: 'Visto'},
]

function ListPage () {

  const { movies } = useMovies()
  const [statusFilter, setStatusFilter] =useState('all');
  const [search, setSearch] = useState('')
  const searchTerm = search.trim().toLowerCase();
  

  const visibleMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm)
    if (statusFilter === 'completed') return movie.isCompleted && matchesSearch
    if (statusFilter === 'unwatched') return !movie.isCompleted && matchesSearch
    return matchesSearch
  })


    return (
        <Panel id="list" title="Lista" className="xl:min-h-80">
        <label htmlFor="movie-search" className="text-sm text-muted"> 
          Buscar pelo nome 
          </label>
          <input
          id="movie-search" 
          type="search" 
          value={search} 
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Ex.: titanic"
          className="mt-1 mb-3 w-full rounded-lg border border-border bg-background
          px-3 py-2 focus:border-primary focus:outline-none" 
          />  

        <div className="mb-4 flex flex-wrap gap-2">
          {filterOptions.map((option) => (

            <button
            key={option.id}
            type="button"
            onClick={() => setStatusFilter(option.id)}
            aria-pressed={statusFilter === option.id}
            className={
              statusFilter === option.id
              ? 'rounded-full border border-primary bg-primary px-3 py-1 text-sm font-bold text-background'
              : 'rounded-full border border-border px-3 py-1 text-sm font-bold text-muted hover:border-primary'
            }
             > {option.label} 
             </button>
          ))}
        </div>

        {visibleMovies.length === 0 ? (
          <p className="text-muted">Nenhum filme na lista ainda.</p>
        ) : (
        
        <ul>
          {visibleMovies.map((movie) => (
           <ListItem 
           key={movie.id}
           title={movie.title}
           hours={movie.hours}
           isCompleted={movie.id === "interestelar"}/>
          ))}
        </ul>

        )}
      </Panel>
    )
}

export default ListPage