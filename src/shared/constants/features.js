import { setFeatures } from 'relient/features';

export const RINGTONE = 'RINGTONE';
export const RINGTONE_PAGE = 'RINGTONE_PAGE';
export const RINGTONE_PAGE_RECOMMEND = 'RINGTONE_PAGE_RECOMMEND';
export const PLAYLIST = 'PLAYLIST';
export const WALLPAPER = 'WALLPAPER';
export const WALLPAPER_PAGE = 'WALLPAPER_PAGE';
export const WALLPAPER_PAGE_RECOMMEND = 'WALLPAPER_PAGE_RECOMMEND';
export const ALBUM = 'ALBUM';
export const LABEL = 'LABEL';

export const features = [{
  key: RINGTONE,
  link: 'ringtone',
  text: '铃声管理',
}, {
  key: PLAYLIST,
  link: 'playlist',
  text: '铃单管理',
}, {
  key: WALLPAPER,
  link: 'wallpaper',
  text: '壁纸管理',
}, {
  key: ALBUM,
  link: 'album',
  text: '壁单管理',
}, {
  key: LABEL,
  link: 'label',
  text: '标签管理',
}, {
  key: RINGTONE_PAGE_RECOMMEND,
  link: 'ringtone-page-recommend',
  text: '铃声推荐位管理',
}, {
  key: RINGTONE_PAGE,
  link: 'ringtone-page',
  text: '铃声页面管理',
}, {
  key: WALLPAPER_PAGE_RECOMMEND,
  link: 'wallpaper-page-recommend',
  text: '壁纸推荐位管理',
}, {
  key: WALLPAPER_PAGE,
  link: 'wallpaper-page',
  text: '壁纸页面管理',
}];

setFeatures(features);
