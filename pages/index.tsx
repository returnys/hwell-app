import Header from '@/components/common/Header';
import MapScene from '@/components/home/MapScene';
import { Info } from '@/types/info';
import { useEffect } from 'react';
interface IProps {
  infos:Info[]
}
export default function Home({infos}:IProps) {
  useEffect(()=>{
    console.log(infos);
  },[infos])
  return (
    <>
      <Header />
      <MapScene />
    </>
  );
}

// pre-rendering 해서 SSG 생성
export async function getStaticProps() {
  // pubilc에 있는 info.json을 불러온다
  const infos = (await import("@/public/info.json")).default;
  return {
    props:{infos},
    revalidate:3600
  }
}