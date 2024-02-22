import './App.css'
import { useEffect, useState } from 'react'
import RandomPic from "./components/RandomPic"
import SelectBreed from "./components/SelectBreed"
import Gallery from "./components/Gallery"
import { Button, Stack } from '@mui/material'


function App() {
  const [catImgUrl, setCatImgUrl] = useState('')
  
  // for selecting a cat by breed, we need to see where we first are in the page (part 1 of 3.)
  const[selectedBreed, setSelectedBreed] = useState('random')

  const[favorites, setFavorites] = useState([])

  const [visibleTab, setVisibleTab] = useState('random')

  // 1. FETCH RANDOM CAT PIC FROM THE API USING A FUNCTION
  useEffect(() => {
    async function getRandomImage(){
      const response = await fetch(fetchUrl)
      const result = await response.json()
      // this is an array of objects 
      // console.log(result)
      
      // set [0] to choose this object in the array to pinpoint .url for single object image
      setCatImgUrl(result[0].url)
    }
    //render images to UI
    getRandomImage()
    // need empty brackets to hold image []
  }, [])

  // new function to fetch on demand 
  // 2. UPDATE CAT PIC AFTER BUTTON CLICK
  const updateImage = async() => {
    console.log("function being called")
    const response = await fetch(fetchUrl)
    const result = await response.json()
    setCatImgUrl(result[0].url)
  }


// 
const addToFavorites = (imgUrl) => {
  const newArray = [...favorites, imgUrl]
  setFavorites(newArray)
}

console.log(selectedBreed)
console.log(favorites)

// update cat url to match with cat breed - 
  const API_URL = `https://api.thecatapi.com/v1/images/search`
  const queryString = `?breed_ids=${selectedBreed}`
  const fetchUrl = selectedBreed === 'random'
  // if cat is NOT selected, display just the URL
    ? API_URL
  // if cat is selected, display Url + the cat breed ending tag 
    : API_URL + queryString

    console.log(fetchUrl)

  return (
    <>
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={() => setVisibleTab('random')}>Random</Button>
      <Button variant="contained" onClick={() => setVisibleTab('favorites')}>Favorites</Button>
    </Stack>

      <br/><br/>
    
    {/* Make an input that selects a specific cat breed - see SelectBreed.jsx */}
    <SelectBreed selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />

      <br/><br/>

    {visibleTab === 'random' && <RandomPic imgUrl={catImgUrl} refetchFunction={updateImage} addToFavorites={addToFavorites}/>}

      <br/><br/>

    {visibleTab === 'favorites' && <Gallery favoritesArray={favorites} />}
    {/* Make an input that shows different cat images -- see RandomPic.jsx */}
    </>
  )
}


export default App
