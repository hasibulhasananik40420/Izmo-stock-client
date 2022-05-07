import { useEffect, useState } from "react"

const useReview = ()=>{
     const [review , setReview] = useState([])
    useEffect(()=>{
      
        fetch('https://polar-castle-21999.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
     

    return [review , setReview]
}
export default useReview