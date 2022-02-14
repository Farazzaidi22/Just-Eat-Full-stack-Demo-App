import { Router } from "express"
import { getJustEatData } from "../controllers/justeat"

const router: Router = Router()

router.get("/justEat", getJustEatData)

export default router