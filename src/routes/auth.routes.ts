import { Router } from "express";
const router = Router();
router.post("/register", (req, res) => { return res.json({
    message: "Rota de cadastro em funcionamento."
    }); 
});
export default router;