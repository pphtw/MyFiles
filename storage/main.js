import { CookieUtil } from "./lib/cookieUtil.js"
// ถ้ามี import ไฟล์อื่นมา ต้องใส่ type = module ใน  <script> ด้วย

// document.cookie = 'memberType=premium'
// document.cookie = 'color-tone=pastel'
// document.cookie = `productId=1001;expires=${new Date("December 17,2022 17:00:00")}`

// alert(document.cookie)

// const cookieName = encodeURIComponent('food shop')
// const cookieValue = encodeURIComponent('S & P')

// document.cookie = `${cookieName}=${cookieValue}`

// CookieUtil.set('hobby','reading')
// CookieUtil.set('color', '#1234')

// alert(CookieUtil.get('color'))
// CookieUtil.unset('hobby')

//session Storage and local storage
// let visit = localStorage.getItem('visit')
// if(visit === null){
//     localStorage.setItem('visit', 1)
// }else {
//     localStorage.setItem('visit', ++visit)
// }

// alert(`visit: ${localStorage.getItem('visit')}`)

// let visit = sessionStorage.getItem('visit')
// if(visit === null){
//     sessionStorage.setItem('visit', 1)
// }else {
//     sessionStorage.setItem('visit', ++visit)
// }

// alert(`visit: ${sessionStorage.getItem('visit')}`)

localStorage.setItem('like', 100)
window.addEventListener('beforeunload', ()=> {localStorage.setItem('visit', 999)})

// localStorage.removeItem('visit')
// localStorage.clear()
window.addEventListener('load', () => alert(localStorage.getItem('like')))