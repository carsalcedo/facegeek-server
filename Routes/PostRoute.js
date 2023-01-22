import  express  from "express";
import { createPost, deletePost, geTimeLinePosts, getPost, likepost, updatePost } from "../Controllers/PostController.js";

const router = express.Router()

router.post('/', createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/:id/like', likepost);
router.get("/:id/timeline", geTimeLinePosts)


export default router;