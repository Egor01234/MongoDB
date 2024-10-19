import express from 'express'
import productCtrl from '../controllers/product.controller.js'
const router = express.Router()
router.route('/api/products')
    .get(productCtrl.list)
    .post(productCtrl.create)
    .delete(productCtrl.removeAll)
router.route('/api/products/:productId')
    .get(productCtrl.read)
    .put(productCtrl.update)
    .delete(productCtrl.remove)
router.param('productId', productCtrl.productByID)
router.route('/api/products').post(productCtrl.create)
router.route('/api/products').get(productCtrl.list)
router.param('productId', productCtrl.productByID)
router.route('/api/products/:productId').get(productCtrl.read)
router.route('/api/products/:productId').put(productCtrl.update)
router.route('/api/products/:productId').delete(productCtrl.remove)
router.param('productNamePart', productCtrl.productByID)
router.route('/api/products/?name=[productNamePart]').get(productCtrl.read)
export default router

