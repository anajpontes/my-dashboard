import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Panel from "./components/Panel"
import SummaryCard from "./components/SummaryCard"
import InfoRow from './components/InfoRow.jsx'
import StatusBadge from "./components/StatusBadge"
import DetailsToggle from "./components/DetailsToggle"
import ListItem from "./components/ListItem"
import { useState } from "react"
import { movies } from './data/movies.js'


const filterOptions = [
  {id: 'all', label: 'Todos'},
  {id: 'unwatched', label: 'Quero ver'},
  {id: 'completed', label: 'Visto'},
]



function App() {
  const [statusFilter, setStatusFilter] =useState('all');
  const [search, setSearch] = useState('')
  const searchTerm = search.trim().toLowerCase();
  const totalHours = movies.reduce((total, movie) => total + movie.hours, 0)
  const completedCount = movies.filter((movie) => movie.isCompleted).length

  // arrumar watchlist, favorites, reviews para fazer sentido
  const summaryCards = [
  { id: 'watched', title: 'Vistos', value: totalHours, icon:"🎞️"},
  { id: 'watchList', title: 'WatchList', value: movies.length, icon:"⏱️"},
  { id: 'favorites', title: 'Favoritos', value: completedCount, icon:"🏆", isHighlighted: true},
  { id: 'reviews', title: 'Reviews', value: movies.length - completedCount, icon:"🎞️"},
]

  const visibleMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm)
    if (statusFilter === 'completed') return movie.isCompleted && matchesSearch
    if (statusFilter === 'unwatched') return !movie.isCompleted && matchesSearch
    return matchesSearch
  })

  return  (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
    <Header/>
    <main className="grid flex-1 grid-cols-1 content-start gap-4 p-4
    md:grid-cols-2 md:gap-6 md:p-6
    xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
    >
      <Menu/>
      <Panel id="summary" title="Resumo" className="md:col-span-2">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
         {summaryCards.map((card) => (
         <SummaryCard
          key={card.id}
          title={card.title}
          value={card.value}
          icon={card.icon}
          isHighlighted={card.isHighlighted}
         />
        ))}
      </div>
      </Panel>

      <Panel id="highlight" title="Assistindo agora" className="md:col-span-2">
        <h3 className="font-heading text-xl font-bold">The OC</h3>
        <StatusBadge label="Assistindo" isActive/>
        <StatusBadge label="Drama" />
        <StatusBadge label="Temp 2, Ep 17"/>
        <p className="mt-1 text-muted">
          Filmes/series assistidos recentemente
        </p>
        <div className="mt-4 grid gap-x-6 md:grid-cols-2">
          <InfoRow label="Temporadas" value="4"/>
          <InfoRow label="Gênero" value="Drama"/>
          <InfoRow label="Diretor" value="Josh Schwartz "/>
          <InfoRow label="Ano" value="(2003)"/>
          <DetailsToggle>
            <p>Falta 3 episodios e 2 temporadas.</p>
          </DetailsToggle>
          <DetailsToggle>
            <p>Elenco Principal:</p>
            <p> • Ben McKenzie — Ryan Atwood</p>
            <p> • Adam Brody — Seth Cohen</p>
            <p> • Mischa Barton — Marissa Cooper</p>
            <p> • Rachel Bilson — Summer Roberts</p>
          </DetailsToggle>
        </div>
      </Panel>

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

      <Panel id="chart" title="Gráfico" className="xl:min-h-80">Gráfico</Panel>
      
      <p>Painel em construção</p>
    </main>
    <Footer />
    </div>
  )
}

export default App
