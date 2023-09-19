// 함수를 한번만 만들고 재렌더링이 되더라도 새로 생성하지 않는다.
// 성능최적화 : 초반에는 적용하지 않고 테스트 중에 고려
import { useCallback } from 'react';
// 위경도 정보를 여러 컴포넌트에서 재활용하여 관리하는 코드(hook)
// 위경도 정보를 전역 state로 보관한다.
// SWR을 활용하여 위경도 데이터를 전역에 보관(담아둔다)한다
// mutate : SWR에 쓴다(저장한다)
import { Info } from '@/types/info';
import { mutate } from 'swr';
// SWR의 KEY는 문자열 : 문자열의 장소에 전역데이터를 보관한다.
export const INFO_KEY = '/infos';

const useInfo = () => {
  // 초기 위경도 데이터를 전달받아 swr 키인 INFO_KEY에 보관한다.
  // infos 매개변수는 [[위도, 경도], [위도, 경도]...]의 배열
  // useCallback(함수,[])
  const initializeInfos = useCallback((infos: Info[]) => {
    mutate(INFO_KEY, infos);
  }, []);
  return {
    initializeInfos,
  };
};
export default useInfo;
