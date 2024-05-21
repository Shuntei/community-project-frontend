export const API_SERVER = 'http://localhost:3001'
export const IMG_SERVER = 'http://localhost:3001/img'

// signup
export const MB_SIGNUP = `${API_SERVER}/member/signup`
// login
export const MB_LOGIN = `${API_SERVER}/member/login`
// google
export const MB_GOOGLE_LOGIN = `${API_SERVER}/member/google-login`
// edit profile
export const MB_EDIT_PROFILE = `${API_SERVER}/member/edit-profile`
// check email and send otp
export const MB_CHECK_EMAIL = `${API_SERVER}/member/check-email`
// check password and send otp
export const MB_CHECK_PASS = `${API_SERVER}/member/check-password`
// edit email
export const MB_EDIT_INFO = `${API_SERVER}/member/edit-info`
// send OTP
export const MB_SEND_CODE = `${API_SERVER}/member/send-code`
// request email
export const MB_REQ_EMAIL = `${API_SERVER}/member/request-email`
// update password
export const MB_UPDATE_PASS = `${API_SERVER}/member/update-password`
// save preferences
export const MB_SAVE_PREFERENCES = `${API_SERVER}/member/save-preferences`
// get preference
export const MB_GET_PREFERENCES = `${API_SERVER}/member/get-preferences`
// get notification information
export const MB_GET_NOTIFICATIONS = `${API_SERVER}/member/get-notifications`
// mark notification as read
export const MB_MARK_READ = `${API_SERVER}/member/mark-read`
// create notifications
export const MB_CREATE_NOTIFICATIONS = `${API_SERVER}/member/create-notifications`
// get tour info
export const MB_GET_TOUR_INFO = `${API_SERVER}/member/get-tour-info`
// get post info
export const MB_GET_POST = `${API_SERVER}/member/get-post`

//商品列表
export const PRODUCT_LIST = `${API_SERVER}/product/api`

//單一商品
export const PRODUCT_ONE = `${API_SERVER}/product/api/getProduct`

//產品評論
export const PRODUCT_COMMENT = `${API_SERVER}/product/api/getProductComment`

// 新增商品評論
export const PRODUCT_COMMENT_ADD = `${API_SERVER}/product/product-comment`

// 相關商品10筆
export const PRODUCT_RELATED = `${API_SERVER}/product/api/relatedProducts`

// 商品收藏紀錄
export const PRODUCT_FAV =`${API_SERVER}/product/product-fav`

// 商品加入收藏
export const PRODUCT_ADD_FAV = `${API_SERVER}/product/add-product-fav` // POST

// 商品移除收藏
export const PRODUCT_REMOVE_FAV = `${API_SERVER}/product/remove-product-fav` // POST

// 所有產品
export const PRODUCT_ALL = `${API_SERVER}/product/api/allProducts`

// 購物車 - 取得會員資料
export const CART_MEMBER_INFO = `${API_SERVER}/cart/member-info`

// 購物車 - 建立訂單
export const CART_CREATEPO = `${API_SERVER}/cart/add-purchase-order`

// 購物車 - 取得訂單資料
export const CART_GETPO = `${API_SERVER}/cart/api/purchase-order`

// 購物車 - 取得訂單商品明細
export const CART_GETPODETAIL = `${API_SERVER}/cart/api/order-detail`

// 購物車 - 與 LINE Pay 串接
export const CART_LINEPAY = `${API_SERVER}/cart/createLinePayOrder` // POST

// 購物車 - 與 LINE Pay 確認訂單
export const CART_LINEPAYCONFIRM = `${API_SERVER}/cart/linePay/confirm`

// 歷史訂單 - status:全部
export const PRODUCT_MYALLPO = `${API_SERVER}/product/api/getAllPo`

// 歷史訂單 - status:訂單處理中
export const PRODUCT_MYONGOINGPO = `${API_SERVER}/product/api/getOngoingPo`

// 歷史訂單 - status:已完成
export const PRODUCT_MYCOMPLETEDPO = `${API_SERVER}/product/api/getCompletedPo`

// 揪團貼文列表
export const TOUR_LIST = `${API_SERVER}/tour/api`

// 揪團貼文單筆
export const TOUR_POST = `${API_SERVER}/tour/api/tourpost`

// 個人揪團管理
export const TOUR_GET_POST = `${API_SERVER}/tour/api/get-post`

// 收藏行程管理
export const TOUR_GET_FAVTOURBOOK = `${API_SERVER}/tour/api/favtourbook`

// 收藏行程細項
export const TOUR_GET_FAVTOURS = `${API_SERVER}/tour/api/favtours`

// 新增揪團
export const TOUR_ADD_POST = `${API_SERVER}/tour/api/add-post`

// 刪除揪團
export const TOUR_DELETE_POST = `${API_SERVER}/tour/api/delete-post`

// 編輯揪團
export const TOUR_EDIT_POST = `${API_SERVER}/tour/api/edit-post`

// // // Memo列表
// export const NOTE_LIST = `${API_SERVER}/game/api-get`

// // Note add
// export const GAME_PERSONAL = `${API_SERVER}/game/api`
