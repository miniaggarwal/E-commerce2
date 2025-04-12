import { Router } from "express";
import {isLoggedIn, authorize} from "../middleware/auth.middleware.js"
import { createCollection, deleteCollection, getAllCollection, updateCollection } from "../controllers/collection.controller.js";
import AuthRoles from "../utils/authRoles.js";

const router = Router();


router.post("/create", isLoggedIn, authorize(AuthRoles.ADMIN), createCollection)
router.get("/get", authorize(AuthRoles.ADMIN),getAllCollection)
router.put("/update/:id",isLoggedIn, authorize(AuthRoles.ADMIN), updateCollection)
router.delete("/delete/:id", isLoggedIn, authorize(AuthRoles.ADMIN, AuthRoles.MODERAOTR), deleteCollection)



export default router;

