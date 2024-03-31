import express from  'express'
import { addCategoryTypes, createCategory, getproductCategories, getCategory, getCategoryByName, modifyCategory, removeCategory, removeCategoryTypes } from '../controllers/productCategories.js'

const route = express.Router()

route.post('/', createCategory)
route.put('/:id', modifyCategory)
route.get('/', getproductCategories)
route.get('/:id', getCategory)
route.get('/getcategorybyname/:category', getCategoryByName)
route.delete('/:id', removeCategory)
route.put('/addtypes/:id', addCategoryTypes)
route.put('/removetypes/:id', removeCategoryTypes)

export default route;