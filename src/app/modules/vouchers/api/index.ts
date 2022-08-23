import dyaxios from '../../../utility/commons/dyaxios'
import {typeVoucher, VoucherFormRequest} from '../core/_moduls'
import {SortType} from '../../../utility/index'

export const createOrUpdateOneCoupon = (payload: VoucherFormRequest) => {
  return dyaxios.post(`/vouchers/c/create-or-update`, payload)
}

export const createOrUpdateOneVoucher = (payload: VoucherFormRequest) => {
  return dyaxios.post(`/vouchers/v/create-or-update`, payload)
}

export const getOneVoucher = (options: {code: string}) => {
  const {code} = options
  return dyaxios.get(`/vouchers/show?code=${code}`)
}

export const getOneByUuidVoucher = (options: {uuid: string}) => {
  const {uuid} = options
  return dyaxios.get(`/vouchers/view?uuid=${uuid}`)
}

export const getVouchers = (options: {
  q?: string
  type: typeVoucher
  limit: number
  page: number
  sort: SortType
}) => {
  const {q, type, limit, page, sort} = options
  return dyaxios.get(
    `/vouchers?is_paginate=${true}&type=${type}&sort=${sort}&limit=${limit}${
      q ? `&q=${q}&page=${1}` : `&page=${page}`
    }`
  )
}
