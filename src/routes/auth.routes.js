import { Router } from "express";
import {signUp,logout,login,getProfile} from "../controllers/auth.controller.js"
import {isLoggedIn} from "../middleware/auth.middleware.js"
const router = Router()

router.post("/signUp", signUp)
router.post("/login", login)
router.get("/logout", logout)


router.get("/profile", isLoggedIn , getProfile)

export default router;

