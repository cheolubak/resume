import React, { useEffect, useState } from 'react';
import { WorkListStyled } from './WorkListStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WorkCard from '../../molecules/WorkCard';
import { WorkCardProps } from '../../molecules/WorkCard/WorkCardProps';

export default function WorkList() {
  const [pagePerCount, setPagePerCount] = useState(1);

  const works: WorkCardProps[] = [
    {
      corpName: '주식회사 세상을 바꾸는시간 15분',
      started: '2020.11',
      description: '온라인 강의 플랫폼 서비스 개발<br/>FRONTEND와 BACKEND 개발',
      projects: [
        '세바시랜드(FRONTWEND)',
        '세바시랜드 스튜디오(FRONTEND)',
        '세바시랜드 어드민(FRONTEND)',
        '세바시랜드(BACKEND)',
      ],
      skills: [
        { title: 'Firebase', sub: ['Authentication'] },
        {
          title: 'AWS',
          sub: [
            'EC2',
            'RDS',
            'S3',
            'ElasticBeanstalk',
            'Lambda',
            'CloudWatch',
            'Media Convert',
          ],
        },
        {
          title: 'FRONTEND',
          sub: [
            'Angular',
            'React.js',
            'Next.js',
            'Typescript',
            'Emotion',
            'Stroybook',
          ],
        },
        {
          title: 'BACKEND',
          sub: ['Spring Framework'],
        },
        {
          title: 'CI/CD',
          sub: ['GitHub Action', 'Bitbucket Pipeline'],
        },
      ],
    },
    {
      corpName: '아이엠에이치씨(IMHC)',
      started: '2018.05',
      ended: '2020.04',
      description:
        '콘텐츠 혹은 서비스에 대해서 리서칭을 하는 기업 혹은 대학생들과 사용자들을 연결시켜 설문으로 의견을 받는 서비스 개발<br/>Font-end와 Back-end 개발',
      projects: ['플럼보드(FRONTEND)', '플럼보드(BACKEND)'],
      skills: [
        {
          title: 'Firebase',
          sub: [
            'Cloud Storage',
            'Cloud Functions',
            'Cloud Firestore',
            'Authentication',
          ],
        },
        {
          title: 'FRONTEND',
          sub: ['Angular', 'Typescript'],
        },
        {
          title: 'BACKEND',
          sub: ['Node.js'],
        },
        {
          title: 'CI/CD',
          sub: ['Jenkins'],
        },
      ],
    },
    {
      corpName: '(주)맵씨닷컴',
      started: '2015.11',
      ended: '2018.02',
      description:
        '남성 패션 커머스 서비스 개발(맵씨닷컴, COSMO)<br/>Front-end와 Back-end 개발',
      projects: [
        '맵씨닷컴 어드민(FRONTEND)',
        '맵씨닷컴(FRONTEND)',
        '맵씨닷컴(BACKEND)',
        'COSMO(FRONTEND)',
        'COSMO(BACKEND)',
      ],
      skills: [
        {
          title: 'AWS',
          sub: ['EC2', 'RDS', 'S3', 'CloudWatch', 'Lambda'],
        },
        {
          title: 'FRONTEND',
          sub: ['Angular', 'PHP'],
        },
        {
          title: 'BACKEND',
          sub: ['Node.js', 'Spring Framework'],
        },
        {
          title: 'CI/CD',
          sub: ['Jenkins'],
        },
      ],
    },
    {
      corpName: '(주)디지엔터테인먼트',
      started: '2012.11',
      ended: '2015.11',
      description: 'C++과 OpenGL, OpenCV을 통해서 3D와 Depth 카메라 개발',
      projects: [
        '움직이는 모두의 갤러리',
        '3D 스케치 아쿠아리움',
        'SpaceBall',
        'Running Adventure',
        'Etc',
      ],
      skills: [
        {
          title: 'C++',
          sub: [],
        },
        {
          title: 'OpenGL',
          sub: [],
        },
        {
          title: 'OpenCV',
          sub: [],
        },
      ],
    },
  ];

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    const count =
      (window.innerWidth - (window.innerWidth <= 1024 ? 32 : 298)) / 316;
    setPagePerCount(count > 4 ? 4 : count);
  }

  return (
    <WorkListStyled>
      <Swiper slidesPerView={pagePerCount}>
        {works.map((x, idx) => (
          <SwiperSlide key={idx}>
            <WorkCard {...x} />
          </SwiperSlide>
        ))}
      </Swiper>
    </WorkListStyled>
  );
}
