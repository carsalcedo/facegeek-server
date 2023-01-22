import  express  from "express";

const router = express.Router()

router.get('/', async (req, res) =>{
    res.send("Post Route")
    //quede en hora 1:27
})

export default router;