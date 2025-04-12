import { Router } from "express";
import {isLoggedIn, authorize} from "../middleware/auth.middleware.js"
import { createCoupon,deleteCoupon,getAllCoupons, updateCoupon } from "../controllers/coupon.controller.js";
import AuthRoles from "../utils/authRoles.js";

const router = Router();


router.post("/create", isLoggedIn, authorize(AuthRoles.ADMIN), createCoupon)
router.get("/get_coupons", authorize(AuthRoles.ADMIN),getAllCoupons)
router.put("/update/:id",isLoggedIn, authorize(AuthRoles.ADMIN), updateCoupon)
router.delete("/delete/:id", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.MODERAOTR), deleteCoupon)



export default router;

