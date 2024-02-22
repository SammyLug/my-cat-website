import { ImageList, ImageListItem } from "@mui/material"

function Gallery({favoritesArray}) {
  console.log("from the Gallery component ", favoritesArray)
  return(
    
    <ImageList sx={{width:'100vw', height:'40vh'}} cols={5} rowHeight={100}>
  {favoritesArray.map((fav) => {
    return (
    <ImageListItem key={fav}>
      <img srcSet={fav}
      src={fav} />
    </ImageListItem>
    )
  })}
  </ImageList>
  )
}

export default Gallery