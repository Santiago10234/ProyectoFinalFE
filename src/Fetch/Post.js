const apiUrl = "http://localhost:3001/users"
const guardarUser = async (obj) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const data = response.json()
        console.log(data);
        return data
    } catch (error) {
        
    }
}

export {guardarUser}