import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import { 
        authUser, 
        getUserProfile, 
        registerUser, 
        updateUserProfile,
        getUsers
} from '../controllers/userController.js';

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser);
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

export default router;