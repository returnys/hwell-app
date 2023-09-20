/* eslint-disable import/no-anonymous-default-export */
export default {
    titleTemplate: '%s - 페이지',
    openGraph: {
      type: 'website',
      site_name: '건강증진센터 위치보기서비스',
      images: [
        { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
      ],
    },
    additionalLinkTags: [
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
      },
    ],
    additionalMetaTags: [
      {
        name: 'naver-site-verification',
        content: 'b094d6523d2b0ba882125b9cf263a73de90ffa29',
      },
      {
        name: 'google-site-verification',
        content: 'xZRkuuNHRQLOTp9VqzxKuMlRSBdYTvWLb5EXdgiTrbw',
      },
    ],
  };