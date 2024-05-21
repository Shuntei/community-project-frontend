// // export const API_SERVER = "http://192.168.35.200:3001";
// const port = 3001 || 3002 //3002備用 與server相同
// export const API_SERVER = `http://localhost:${port}/community`

import { API_SERVER } from './api-path'

export const SN_COMMUNITY = `${API_SERVER}/community`
// 取得列表資料
export const SN_POSTS = `${API_SERVER}/community/posts`

export const SN_PSPOSTS = `${API_SERVER}/community/personal/posts`

export const SN_BOARDS = `${API_SERVER}/community/boards`

export const SN_ADD_POST = `${API_SERVER}/community/psadd`

//方法delete, `${API_SERVER}/${post_id}`
export const SN_DELETE_POST = `${API_SERVER}/community`

// `${API_SERVER}/${postId}`, 方法: PUT
export const SN_EDIT_POST = `${API_SERVER}/community/edit`

// `${SN_LIKES_STATE}和${SN_LIKES_CHANGE}/${postId}`, 方法: GET
export const SN_LIKES_STATE = `${API_SERVER}/community/like-state`
export const SN_LIKES_CHANGE = `${API_SERVER}/community/toggle-like`

// `${SN_COMMENTS}/${postId}` 方法GET
export const SN_COMMENTS = `${API_SERVER}/community/comment`

// `${SN_ADD_COMMENT}/${postId}`, 方法: POST
export const SN_ADD_COMMENT = `${API_SERVER}/community/cmadd`

//`${SN_DELETE_COMMENT}/${commentId}` 方法DELETE
export const SN_DELETE_COMMENT = `${API_SERVER}/community/cmremove`

//`${SN_SELECTED_COMMENT}/${commentId}` 方法GET
export const SN_SELECTED_COMMENT = `${API_SERVER}/community/selectedcm`

// `${SN_EDIT_COMMENT}/${commentId}`, 方法: PUT
export const SN_EDIT_COMMENT = `${API_SERVER}/community/cmedit`

// `${SN_POST_VIEWS}/${postId}`, 方法: GET
export const SN_POST_VIEWS = `${API_SERVER}/community/updateviewcount`

export const SN_USER_INFO_POST = `${API_SERVER}/community/userinfoByPostId`

export const SN_USER_INFO = `${API_SERVER}/community/userinfo`

export const SN_SHOW_FOLLOWS = `${API_SERVER}/community/showfollows`

export const SN_HANDLE_STATUS = `${API_SERVER}/community/followedstatus`
