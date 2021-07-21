import {SiteClient} from 'datocms-client'

export default async function createCommunityRequest(req, res){
    if(req.method === 'POST'){
        const TOKEN = process.env.SECRET_TOKEN;
        const client = new SiteClient(TOKEN);
        // @todo validar input
        const createData = await client.items.create({
            itemType: "981025", // community model id
            ...req.body // spreading submitted data
        })
        return res.json({newEntry:createData})
    } else {
        return res.status(404).json({message:'Not found'})
    }
}