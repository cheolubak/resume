interface Skill {
  title: string;
  list: { title: string; list?: string[] }[];
}

export const skillLevels = [
  { title: 'BACKEND', point: 85 },
  { title: 'FRONTEND', point: 90 },
];

export const skills: Skill[] = [
  {
    title: 'Cloud',
    list: [
      {
        title: 'AWS',
        list: [
          'EC2',
          'ELB',
          'S3',
          'RDS',
          'Lambda',
          'CloudWatch',
          'ECS',
          'ECR',
          'CloudFront',
          'ElasticBeanstalk',
        ],
      },
      {
        title: 'Firebase',
        list: [
          'Authentication',
          'Hosting',
          'Analytics',
          'Cloud Firestore',
          'Realtime Database',
          'Cloud Storage',
          'Cloud Functions',
        ],
      },
    ],
  },
  {
    title: 'RDBMS',
    list: [{ title: 'MySQL' }, { title: 'MariaDB' }],
  },
  {
    title: 'BACKEND',
    list: [
      { title: 'Node.js' },
      { title: 'Express.js' },
      { title: 'Nest.js' },
      { title: 'Spring Framework' },
      { title: 'NGINX' },
    ],
  },
  {
    title: 'ORM',
    list: [{ title: 'TypeORM' }, { title: 'Sequelize' }, { title: 'JPA' }],
  },
  {
    title: 'FRONTEND',
    list: [
      { title: 'React.js' },
      { title: 'Angular' },
      { title: 'Next.js' },
      { title: 'Storybook' },
    ],
  },
  {
    title: 'CI/CD',
    list: [
      { title: 'Github Action' },
      { title: 'Bitbucket Pipeline' },
      { title: 'Jenkins' },
      { title: 'Docker' },
    ],
  },
  {
    title: 'Tool',
    list: [
      { title: 'VS Code' },
      { title: 'Intellij' },
      { title: 'Webstorm' },
      { title: 'Datagrip' },
      { title: 'DBeaver' },
      { title: 'Figma' },
      { title: 'Postman' },
    ],
  },
];
