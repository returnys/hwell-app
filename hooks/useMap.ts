// SWR을 이용해서 naver.map을 전역으로 참조 가능하도록 한다.
// map 객체를 보관
import { Cordinates } from '@/types/info';
import { NaverMap } from '@/types/map';
import { useCallback } from 'react';
import { mutate } from 'swr';

export const INITIAL_CENTER: Cordinates = [37.3595704, 127.105399];
export const INITIAL_ZOOM = 10;
export const INITIAL_MIN = 6;

// naver.map 전역 저장하기
export const MAP_KEY = '/map';
const useMap = () => {
  const initializeMap = useCallback((map: NaverMap) => {
    // 지도를 보관한다.
    mutate(MAP_KEY, map);
  }, []);
  return { initializeMap };
};
export default useMap;
