import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [data, setData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`

      const today = new Date().toDateString()
      const localKey = `NASA-${today}`

      // Check if today’s data is in localStorage
      const cached = localStorage.getItem(localKey)
      if (cached) {
        try {
          const apiData = JSON.parse(cached)
          setData(apiData)
          console.log("Fetched from cache today")
          setLoading(false)
          return
        } catch  {
          console.warn("Failed to parse cached data, fetching fresh API data.")
          localStorage.removeItem(localKey)
        }
      }

      // Fetch fresh data
      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log("Fetched from API today")
      } catch (err) {
        console.error("Failed to fetch NASA API:", err.message)
        setError("Failed to fetch NASA data. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchAPIData()
  }, [])

  // Conditional rendering
  if (loading) {
    return (
      <div className="loadingState">
        <i className="fa-solid fa-gear"></i>
        <div>Loading Image...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="errorState">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <>
      {data && <Main data={data} />}
      {showModal && <SideBar data={data} handleToggleModal={handleToggleModal} />}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  )
}

export default App
