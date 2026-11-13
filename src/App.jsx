import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Panel from "./components/Panel"
import SummaryCard from "./components/SummaryCard"
import InfoRow from './components/InfoRow.jsx'
import StatusBadge from "./components/StatusBadge"
import DetailsToggle from "./components/DetailsToggle"
import ListItem from "./components/ListItem"

const summaryCards = [
  { id: 'watched', title: 'Vistos', value: 42, icon:"🎞️"},
  { id: 'watchList', title: 'WatchList', value: 318, icon:"⏱️"},
  { id: 'favorites', title: 'Favoritos', value: 17, icon:"🏆", isHighlighted: true},
  { id: 'reviews', title: 'Reviews', value: "8,5", icon:"🎞️"},
]

const movies = [
  { id: 'interestelar', title: 'Interestelar', hours: 2, isCompleted: false },
  { id: 'lalaland', title: 'La La Land', hours: 2, isCompleted: true },
  { id: 'theoffice', title: 'The Office', hours: 74, isCompleted: true },
  { id: 'parasite', title: 'Parasite', hours: 2, isCompleted: false },
  { id: 'gilmoregirls', title: 'Gilmore Girls', hours: 83, isCompleted: false },
  { id: '13goingon30', title: '13 Going On 30', hours: 1, isCompleted: false },
]

function App() {
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
        <ul>
          {movies.map((movie) => (
           <ListItem key={movie.id} title={movie.title} hours={movie.hours} />
          ))}
        </ul>
      </Panel>

      <Panel id="chart" title="Gráfico" className="xl:min-h-80">Gráfico</Panel>
      
      <p>Painel em construção</p>
    </main>
    <Footer />
    </div>
  )
}

export default App
