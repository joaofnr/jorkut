import { ProfileRelationsBoxWrapper } from "../../components/ProfileRelations"

function RelationsBlockList(props){
    if(props.items.length > props.max)
        props.items.length = props.max
    return (
        <>
            <h2 className="smallTitle">{props['title']} ({props.items.length})</h2>
            <ul>
                {props.items.map((itemAtual) => {
                return (
                    <li key={itemAtual[props.idField]}>
                    <a href={itemAtual[props.urlField]}>
                        <img src={itemAtual[props.imageField]} />
                        <span>{itemAtual[props.titleField]}</span>
                    </a>
                    </li>
                )
                })}
            </ul>
        </>
    )
}

export default RelationsBlockList