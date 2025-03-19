
const getSnacks = () => {
    return fetch('http://localhost:8080/snacks', 
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
}

export {getSnacks}