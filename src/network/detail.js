import { request } from "./request";


export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

// export class Goods {
//   constructor(columns, itemInfo, shopInfo) {
//     this.title = itemInfo.title
//     this.price = itemInfo.price
//     this.oldPrice = itemInfo.oldPrice
//     this.discountBgColor = itemInfo.discountBgColor
//     this.columns = columns
//     this.services = shopInfo.services
//   }
// }
