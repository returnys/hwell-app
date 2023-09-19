import Header from '@/components/common/Header';
import MapScene from '@/components/home/MapScene';
import useInfo from '@/hooks/useInfo';
import { Info } from '@/types/info';
import { useEffect } from 'react';
// SEO 적용하기
import { NextSeo } from 'next-seo';

interface IProps {
  infos: Info[];
}
export default function Home({ infos }: IProps) {
  // 위경도에 대한 정보(.json) 및 naver의 map 객체를 전역으로 참조해서 관리
  // SWR 상태관리()
  const { initializeInfos } = useInfo();

  // 최초 mount가 되면 즉, html이 출력이 되면 props를 출력을 해본다.
  useEffect(() => {
    initializeInfos(infos);
    // 새로운 정보가 들어온다면 다시 렌더링 해주기 위해서 의존성배열 삽입
  }, [initializeInfos, infos]);
  return (
    <>
      <NextSeo title='건강검진센터 위치서비스' description='건강검진센터 위치서비스입니다.'/>
      <Header />
      <MapScene />
    </>
  );
}

// pre-rendering 해서 SSG 생성
export async function getStaticProps() {
  // pubilc에 있는 info.json을 불러온다
  // props 전달
  const infos = (await import('@/public/info.json')).default;
  return {
    props: { infos },
    // 일정한 시간이 지나면 데이터를 다시 가져와서 pre-rendering 한다.
    revalidate: 3600,
  };
}
