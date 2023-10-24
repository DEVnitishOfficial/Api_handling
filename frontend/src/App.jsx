import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

//  const [product,error,loading] = customReactQuery('/api/products')
const [product, setProduct] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)
const [search, setSearch] = useState('Laptop Pro')

useEffect(() => {
  const controller = new AbortController()
  ;(async() => {
   try {
    setLoading(true)
    setError(false)
    const response =await axios.get('/api/products?search='+search,{
      signal : controller.signal
    })
    console.log('response',response.data)
    setProduct(response.data)
    setLoading(false)
   } catch (error) {
    if(axios.isCancel(error)){
      console.log('Request Cancled',error)
  return 
    }
    
    setError(true)
   }
  })()
  return () => {
    controller.abort()
  }
},[search])

  // if(error){
  //   return <h1> smomething went wrong</h1>
  //  }

  //  if(loading){
  //   return <h1> Loading.....</h1>
  //  }

  return (
    <>
    <input type="text"
     placeholder='search....'
     value={search}
     onChange={(e) => setSearch(e.target.value)}
      />
    <h1>Learning api Handling</h1>

    {loading && (<h1>Loading......</h1>)}
    {error && <h1>Something Went Wrong</h1>}
    <h2>Number of Products are : {product.length}</h2>
    </>
  )
}

export default App

// const customReactQuery = (urlPath) => {
  
//   return [product,error,loading]
// }
