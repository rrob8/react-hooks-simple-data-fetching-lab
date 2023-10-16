import React, {useEffect, useState} from 'react'


function App () {
 
const [dogs, setDogs ] = useState (null)

useEffect(()=> {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data=> setDogs(data.message))
}

,[])

let response = dogs === null? <p>Loading...</p> : <img alt='A Random Dog' src={dogs}/>
return  (
    <div>
    {response}
    </div>
)
}









export default App 