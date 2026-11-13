import StatusBadge from "./StatusBadge"
function ListItem ({title, hours, isCompleted=false}) {
    return (
        <li
         className="flex flex-wrap items-center justify-between gap-2
            border-b border-border py-3"
          
         >
          <div>
            <p className="font-bold">{title} {isCompleted && <span>⭐</span>}</p>
            <p className="text-sm text-muted">Duração: {hours} horas</p>
          </div>

          <StatusBadge label={isCompleted ? "Favorito" : "Favoritar"} isActive={isCompleted}/>
        </li>
    )
}

export default ListItem