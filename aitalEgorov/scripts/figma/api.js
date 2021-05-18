const URL = "https://api.github.com/users";

export default Api = {
    getUsers : () => {
        return fetch(URL).then(res=>res.json());        
    }
}