import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useEffect, useState } from 'react'

function SelectBreed({selectedBreed, setSelectedBreed}) {
  const [breedList, setBreedList] = useState([])


  // fetch an array of cat breeds from an API endpoint (/breeds)
  useEffect(() => {
    async function getBreedList() {
      const response = await fetch ('https://api.thecatapi.com/v1/breeds')
      const result = await response.json()
      setBreedList(result)
    }
    // render list of breeds
    getBreedList()
  }, [])
  
  return(
    <>
    <FormControl fullWidth>
      <InputLabel id="breed-select-label">Breed</InputLabel>
      <Select 
      labelId="breed-select-label"
      id="breed-select" 
      value={selectedBreed} 
      label="Breed" 
      onChange={(e) => setSelectedBreed(e.target.value)} 
      >
        {/* create a menu item containign all breeds from the API -- the commenetd out code was hard coded to show only 2 breeds */}
        <MenuItem value="random">Random Cat! (Any Breed)</MenuItem>
        {breedList.map(breed => <MenuItem value={breed.id}>{breed.name}</MenuItem>)}
        {/* <MenuItem value="asho">American Shorthair</MenuItem>
        <MenuItem value="amis">Australian Mist</MenuItem> */}
      </Select>
    </FormControl>
    </>
  );
}

export default SelectBreed