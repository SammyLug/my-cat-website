import { Button } from "@mui/material"

function RandomPic({imgUrl, refetchFunction, addToFavorites}) {
  return (
    <>
    <Button onClick={refetchFunction} variant='outlined' >New Cat</Button>
    <br />
    <Button onClick={() => addToFavorites(imgUrl)} variant="outlined" color="success">Add Favorite</Button>
    <br></br>
    <img className="random-pic" src={imgUrl} />
    </>
  )
}

export default RandomPic