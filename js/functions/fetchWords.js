async function fetchWords(path){
    return await fetch(path)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data
        })
        .catch(function(error) {
            return []
        });
}
export default fetchWords