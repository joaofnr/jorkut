import { ProfileRelationsBoxWrapper } from "../../components/ProfileRelations"

function RelationsBlockList(props){
    if(props.items.length > props.max)
        props.items.length = props.max
    return (
        <>
            <h2 className="smallTitle">{props.title} ({props.items.length})</h2>
            <ul>
                {props.items.map((itemAtual) => {
                return (
                    <li key={itemAtual.id}>
                    <a href={itemAtual.url}>
                        <img src={itemAtual.image} />
                        <span>{itemAtual.title}</span>
                    </a>
                    </li>
                )
                })}
            </ul>
        </>
    )
}

export default RelationsBlockList