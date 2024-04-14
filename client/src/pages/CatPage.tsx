import { useEffect } from 'react'
import axios from 'axios'

function CatPage() {
    console.log("here");
    // const fetchCat = async () =>{
    //     const data = await axios.get('/api/cat');
    //     console.log(data.data);
    const fetchCat = async () => {
        try {
            const response = await axios.get('/api/cat');
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching cat data:", error);
        }    
    };

    useEffect(() => {
        fetchCat()
    }, [])
    

  return (

    <div>CatPage</div>
  )
}

export default CatPage