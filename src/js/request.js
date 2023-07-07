import loaderToggle from './loader'

const request = async (reource) => {
    loaderToggle(true)
    console.log('loading...');
    const req = await fetch(reource)
    if (!req.ok) {
        loaderToggle(false)
        throw new Error("Something went wrong :(")
    } 

    const data = await req.json()
    console.log('Done !');
    loaderToggle(false)

    return data
}
export default request 