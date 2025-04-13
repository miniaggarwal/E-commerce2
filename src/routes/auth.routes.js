import { Router } from "express";
import {signUp,logout,login,getProfile, forgotPassword, resetPassword} from "../controllers/auth.controller.js"
import {isLoggedIn} from "../middleware/auth.middleware.js"
const router = Router()

router.post("/signUp", signUp)
router.post("/login", login)
router.get("/logout", logout)
router.get("/password/forgot/", forgotPassword)
router.get("/password/reset/:token", resetPassword)

router.get("/profile", isLoggedIn , getProfile)

export default router;

