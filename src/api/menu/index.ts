import request from '@/axios'

export const getRouteListApi = () => {
  return request.get({ url: '/route' })
}
