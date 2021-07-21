function CreateCommunity(evt, communities){
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const newCommunity = {
        title: formData.get('title'),
        imageUrl: formData.get('image'),
        url: formData.get('url'),
        creatorSlug: formData.get('creator')
    }

    fetch('../api/communities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCommunity)
      })
      .then(async (response) => {
        const data = await response.json();
        const community = data.newEntry;
        console.log(community)
        evt.target.reset()
        return [...communities, community]
      })

    
}

export default CreateCommunity