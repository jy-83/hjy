import request from '@/utils/request'

// 查询优惠卡列表
export function listCoupon(query) {
  return request({
    url: '/workbench/coupon/list',
    method: 'get',
    params: query
  })
}

// 查询优惠卡详细
export function getCoupon(id) {
  return request({
    url: '/workbench/coupon/' + id,
    method: 'get'
  })
}

// 新增优惠卡
export function addCoupon(data) {
  return request({
    url: '/workbench/coupon',
    method: 'post',
    data: data
  })
}

// 修改优惠卡
export function updateCoupon(data) {
  return request({
    url: '/workbench/coupon',
    method: 'put',
    data: data
  })
}

// 删除优惠卡
export function delCoupon(id) {
  return request({
    url: '/workbench/coupon/' + id,
    method: 'delete'
  })
}
