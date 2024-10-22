import { Router } from "express"
import multer from "multer"
import uploadConfig from './config/multer'

import { authenticationMiddleware } from "./middlewares/AuthenticationMid"

import { CreateUserController } from "./controllers/user/createUserController"
import { AuthenticationUserController } from "./controllers/user/AuthenticationUserController"
import { DetailUserController } from "./controllers/user/DetailUserCon"
import { CreateCategoryCon } from "./controllers/categories/CreateCategoryCon"
import { ListCategoriesCon } from "./controllers/categories/ListCategoriesCon"
import { CreateProductCon } from "./controllers/products/CreateProductCon"
import { ListProductsCon } from "./controllers/products/ListProductsCon"
import { CreateOrderCon } from "./controllers/orders/CreateOrderCon"
import { RemoveOrderCon } from "./controllers/orders/RemoveOrderCon"
import { AddItemCon } from "./controllers/itens/AddItemCon"
import { RemoveItemCon } from "./controllers/itens/RemoveItemCon"
import { SendOrderCon } from "./controllers/orders/SendOrderCon"
import { ListOrdersCon } from "./controllers/orders/ListOrdersCon"
import { DetailOrderCon } from "./controllers/orders/DetailsOrderCon"
import { FinalizeOrderCon } from "./controllers/orders/FinalizeOrderCon"

const router = Router()
const upload = multer(uploadConfig.upload("./content"))

// Routes Users
router.post('/users', new CreateUserController().handle)

router.post('/login', new AuthenticationUserController().handle)

router.get('/info', authenticationMiddleware, new DetailUserController().handle)

// Routes Category

router.post('/categories', authenticationMiddleware, new CreateCategoryCon().handle)

router.get('/list-categories', authenticationMiddleware, new ListCategoriesCon().handle)

// Routes Products

router.post('/products', authenticationMiddleware, upload.single("file"), new CreateProductCon().handle)

router.get('/categories/products', authenticationMiddleware, new ListProductsCon().handle)

// Routes Order

router.post('/orders', authenticationMiddleware, new CreateOrderCon().handle)

router.delete('/orders', authenticationMiddleware, new RemoveOrderCon().handle)

router.put('/order/send', authenticationMiddleware, new SendOrderCon().handle)

router.get('/list-orders', authenticationMiddleware, new ListOrdersCon().handle)

router.put('/order/finalize', authenticationMiddleware, new FinalizeOrderCon().handle)

// Routes Itens

router.post('/order/add-item', authenticationMiddleware, new AddItemCon().handle)

router.delete('/order/remove-item', authenticationMiddleware, new RemoveItemCon().handle)

router.get('/order/itens-in-order', authenticationMiddleware, new DetailOrderCon().handle)

export {router}