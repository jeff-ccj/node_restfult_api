import {Router} from 'express'
import authCheck from './auth-check'
import basic from '../controllers/basic'
import project from '../controllers/project'

const router = Router()

// routers check
router.use(authCheck)

// Add Routes
router.use('/basic', basic)
router.use('/project', project)

export default router
