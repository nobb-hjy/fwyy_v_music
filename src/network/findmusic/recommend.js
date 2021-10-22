// 封装对发现音乐--推荐页面的数据
import {request} from "../request";

//推荐页面轮播图数据
export function getBanner() {
  return request({
    url:'/banner'
  })
}
//推荐页面 推荐歌单
export function getPersonalized(limit){
  return request({
    url:'/personalized',
    params:{
      limit:limit
    }
  })
}
//推荐页面  新碟上架
export function getHotAlbum(limit) {
    return request({
      url:'/album/newest',
      params:{
        limit:limit
      }
    })
}
//热门歌单
export function getHotPlayList(){
  return request({
    url:'/playlist/hot',
  })
}

//榜单分类
export function getTopList(){
  return request({
    url:'/toplist',
  })
}
//榜单内容摘要
export function getTopListDeatils(){
  return request({
    url:'/toplist/detail'
  })
}
//获取音乐
export function getSong(){
  return request({
    url:'/song/url'
  })
}
//歌单详情
export function getPlayListDetails(id){
  return request({
    url:'/playlist/detail',
    params:{
      id:id
    }
  })
}
