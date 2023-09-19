import { INFO_KEY } from '@/hooks/useInfo';
import { MAP_KEY } from '@/hooks/useMap';
import { Info } from '@/types/info';
import { NaverMap } from '@/types/map';
import useSWR from 'swr';
import Marker from './Marker';

const Markers = () => {
  // 위경도 정보를 활용한다.
  const { data: infos } = useSWR<Info[]>(INFO_KEY);
  // 네이버 map 객체 정보 활용
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  // infos와 map 모두 있어야 출력
  if (!map || !infos) return null;
  // 위 과정을 통과하고 나면 Marker들을 출력한다.
  return (
    <>
      {infos.map((item, idx) => {
        // Marker는 네이버지도, 위경도 정보를 모두 받는다.
        return <Marker map={map} cordinates={item.cordinates} key={idx} />;
      })}
    </>
  );
};

export default Markers;
