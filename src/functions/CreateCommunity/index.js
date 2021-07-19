function CreateCommunity(evt, communities){
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const newCommunity = {
        id: new Date().toTimeString(),
        title: formData.get('title'),
        image: formData.get('image'),
        url: formData.get('url')
    }
    evt.target.reset()
    return [...communities, newCommunity]
}

export default CreateCommunity