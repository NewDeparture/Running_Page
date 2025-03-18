interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'LYX\'S Running Map',
  siteUrl: 'https://davpanda.github.io/running_page/',
  logo: 'https://img.picgo.net/2025/03/17/Anime026e152421d44d6a.md.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Code',
      url: 'https://github.com/yihong0618/running_page',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
