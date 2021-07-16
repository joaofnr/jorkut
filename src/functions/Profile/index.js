import Box from "../../components/Box"
import {AlurakutProfileSidebarMenuDefault} from "../../lib/AluraCommons"

function ProfileSidebar(props){
    return (
        <Box>
            <img src={`https://github.com/${props.username}.png`} />
            <p>{props.name}</p>
            <p>{props.gender}</p>
            <p>{props.relationship}</p>
            <p>{props.country}</p>
            <AlurakutProfileSidebarMenuDefault />
        </Box>

    )
}

export default ProfileSidebar