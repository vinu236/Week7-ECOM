const express=require('express');
const router=express.Router();
const adminController=require('../controller/adminController')
const upload=require('../middleware/multer');
const Category = require('../model/Category');




router.get('/admin_Login',adminController.getLogin);
router.post('/admin_Login',adminController.postLogin);
// router.get('/admin_panel',adminController.getAdminPanel)
router.get('/admin_panel/user',adminController.getUser);
router.get('/admin_panel/add_products',adminController.getAddProducts);
router.post('/admin_panel/add_products',upload.single('myFiles'),adminController.postAddProducts);
router.get('/admin_panel/user/block/:id',adminController.blockUser);
router.get('/admin_panel/user/unblock/:id',adminController.unBlockUser);

/* ------------------------------Admin-Panel--------------------------------- */
router.get('/admin_panel',adminController.getDashboard)

/* ----------------------------Edit Product----------------------------------------------- */
router.get('/admin_panel/edit-products',adminController.getEditProducts);
router.get('/admin_panel/update_products/:id',adminController.getUpdateProducts);
router.post('/admin_panel/update_products/:id',upload.single('myFiles'),adminController.postUpdateProducts);
router.put('/admin_panel/delete_products/:id',adminController.deleteProducts);
router.put('/admin_panel/retrieve_products/:id',adminController.retrieveProducts);
/* -------------------------------Category-------------------------------------------------- */
router.get('/admin_panel/categoryList',adminController.getCategory);
router.post('/admin_panel/category',adminController.postCategory);
router.get('/edit-category/:id',adminController.getEditCategory)
router.post('/edit-category/:id',adminController.postEditCategory)
router.delete('/delete-category/:id',adminController.deleteCategory)
router.get('/add-category',adminController.getAddCategory)

/* ----------------------------Banner----------------------------------- */
router.get('/admin_panel/banner',adminController.getBanner);
router.get('/admin_panel/add-banner',adminController.getAddBanner)
router.post('/admin_panel/banner',upload.single('myFiles'),adminController.postBanner)
router.get('/update-banner/:id',adminController.getUpdateBanner)
router.post('/admin_panel/update-banner/:id',upload.single('myFiles'),adminController.postUpdateBanner);
router.delete('/admin_panel/delete-banner/:id',adminController.deleteBanner)


/* ---------------------------Coupon------------------------------------------ */
router.get('/admin_panel/coupon',adminController.getCoupon)
router.get('/add-coupon',adminController.getAddCoupon)
router.post('/add-coupon',adminController.postAddCoupon)
router.get('/edit-coupon/:id',adminController.getEditCoupon)
router.post('/update-coupon/:id',adminController.postEditCoupon)
router.get('/delete-coupon/:id',adminController.deleteCoupon)
/* ---------------------------Order-Management---------------------------- */
router.get('/admin_panel/orderList',adminController.getOrderList)
router.get('/admin_panel/orderPrds/:id',adminController.getOrderPrds)
router.post('/status-update/:id',adminController.statusUpdate)

/* ----------------------------Sales-Report----------------------------------------- */
router.get('/admin_panel/sales-report/',adminController.getSalesReport)
router.post('/admin_panel/download',adminController.downloadSales )



 module.exports=router;