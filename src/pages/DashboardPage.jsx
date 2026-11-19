import { Link } from 'react-router-dom';
import Panel from '../components/Panel';
import StatusBadge from '../components/StatusBadge';
import DetailsToggle from '../components/DetailsToggle';
import InfoRow from '../components/InfoRow';
import SummaryCard from '../components/SummaryCard';
import ListItem from '../components/ListItem';
import { useMovies } from '../context/MoviesContext';

function DashboardPage() {

    const { movies } = useMovies()

    const firstMovies = movies.slice(0, 3);
    const totalHours = movies.reduce((total, movie) => total + movie.hours, 0)
    const completedCount = movies.filter((movie) => movie.isCompleted).length


    const summaryCards = [
  { id: 'watched', title: 'Vistos', value: completedCount, icon:"🎞️"},
  { id: 'watchList', title: 'WatchList', value: movies.length, icon:"⏱️"},
  { id: 'favorites', title: 'Favoritos', value: totalHours, icon:"🏆", isHighlighted: true},
  { id: 'reviews', title: 'Reviews', value: movies.length - completedCount, icon:"🎞️"},
]

  return (
    <>
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


    <Panel id="list" title="Meus filmes" className="xl:min-h-80">
      {firstMovies.length === 0 ? (
          <p className="text-muted">Nenhum filme na lista ainda.</p>
        ) : (
        
        <ul>
          {firstMovies.map((movie) => (
           <ListItem 
           key={movie.id}
           title={movie.title}
           hours={movie.hours}
           isCompleted={movie.id === "interestelar"}/>
          ))}
        </ul>
        )}

      <Link to="/lista" className="mt-4 inline-block font-bold text-primary …">
        Ver todos os {movies.length} filmes →
      </Link>
    </Panel>

    <Panel id="chart" title="Gráfico" className="xl:min-h-80">Gráfico</Panel>

    </>
  );
}

export default DashboardPage;
