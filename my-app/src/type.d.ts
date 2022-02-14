interface IJustEat {
    Name: string
    RatingStars: Number
    Cuisines: Array
  }
  
interface JustEatProps {
    justeat: IJustEat
}
  
type ApiDataType = {
    message: string
    status: string
    justeats: IJustEat[]
    justeat?: IJustEat
}