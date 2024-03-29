import Box from "../../components/Box"
import {AlurakutProfileSidebarMenuDefault} from "../../lib/AluraCommons"

function ProfileSidebar(props){
    return (
        <Box as="aside">
            <img src={`https://github.com/${props.username}.png`} />
            <hr />
            {/* <p>{props.name}</p>
            <p>{props.gender}</p>
            <p>{props.relationship}</p>
            <p>{props.country}</p>
            <hr /> */}
            <AlurakutProfileSidebarMenuDefault />
        </Box>

    )
}

export default ProfileSidebar