import axios from "axios"
import { Response, Request } from "express"


const getJustEatData = async (req: Request, res: Response): Promise<any> => {
  try {
    const api_url: string = 'https://theotterco.ca/apitest.json'
    const response = await axios.get(api_url)
    //ts-ignore
    // console.log(response.data?.Restaurants[0].Name)
    const slicedArray = response.data?.Restaurants.slice(0, 16);
    // console.log(slicedArray)

    var propsToKeep = ["Id", "Name", "RatingStars", "Cuisines", "LogoUrl"];

    var result = slicedArray.map(item => {
      const obj = {};
      for (const prop of propsToKeep) {
        obj[prop] = item[prop];
      }
      return obj;
    })

    console.log(result)

    return res.json(result)
  } catch (error) {
    throw error
  }
}

export {getJustEatData}