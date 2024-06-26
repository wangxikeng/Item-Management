import http from '@/utils/request'
import type { IUserGroup, IPagingData } from '@/types/user'

/**
 * 获取用户分组列表
 * @returns 用户分组列表
 */
export const getUserGroupList = () => {
  return http<IUserGroup[]>({
    url: `/user/group`,
    method: 'GET'
  })
}

/**
 * 获取用户ID和昵称(部分信息)
 * @param offset 当前页码
 * @param limit 每页数量
 * @returns 用户ID和昵称
 */
export const getUserPartialInformation = (offset: number, limit: number) => {
  return http<IPagingData>({
    url: `/user/page0`,
    method: 'GET',
    params: {
      offset,
      limit
    }
  })
}
