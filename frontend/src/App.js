import React, { useState, useEffect } from "react"
import axios from "axios"
function App() {
  const [APIData, setAPIData] = useState([])

  const fetchData = async () => {
    await axios("http://localhost:9000/testAPI")
      .then(({ data }) => {
        console.log(data)
        return setAPIData((previousData) => [...previousData, data])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        {APIData.map((data, index) => {
          const { name } = data.data
          return <h1>{name}</h1>
        })}
      </div>
    </div>
  )
}

export default App
