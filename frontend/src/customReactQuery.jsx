

import axios from 'axios'
import { useEffect, useState } from 'react'

const customReactQuery = (urlPath) => {
    const [product, setProduct] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      (async() => {
       try {
        setLoading(true)
        setError(false)
        const response =await axios.get(urlPath)
        setProduct(response.data)
        setLoading(false)
       } catch (error) {
        setError(true)
       }
      })()
    },[])
    return [product,error,loading]
  }

export default customReactQuery;