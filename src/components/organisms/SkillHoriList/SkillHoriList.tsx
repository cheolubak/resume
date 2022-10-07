import React from 'react';
import {
  SkillHoriItemStyled,
  SkillHoriListStyled,
  SkillHoriTitleStyled,
} from './SkillHoriListStyled';

function SkillHoriList() {
  const skills = [
    {
      title: 'FRONTEND',
      list: [
        'React.js',
        'Next.js',
        'Angular',
        'HTML',
        'CSS',
        'SASS',
        'Javascript',
        'Typescript',
        'Emotion',
        'Storybook',
        'Recoil',
      ],
    },
    {
      title: 'BACKEND',
      list: [
        'Node.js',
        'Express.js',
        'Nest.js',
        'TypeORM',
        'Sequelize',
        'Spring Framework',
        'JPA',
        'MyBatis',
        'MySQL',
        'MariaDB',
      ],
    },
    { title: 'Cloud', list: ['AWS', 'Firebase'] },
    { title: 'Git', list: ['GitHub', 'GitLab', 'Bitbucket'] },
    {
      title: 'CI/CD',
      list: ['GitHub Action', 'Bitbucket Pipeline', 'Jenkins'],
    },
    {
      title: 'TOOLS',
      list: ['VS Code', 'Webstorm', 'IntelliJ', 'Datagrip', 'Figma', 'Postman'],
    },
  ];
  return (
    <SkillHoriListStyled>
      {skills.map((skill) => (
        <SkillHoriItemStyled>
          <SkillHoriTitleStyled>{skill.title}</SkillHoriTitleStyled>
          {skill.list.join(' | ')}
        </SkillHoriItemStyled>
      ))}
    </SkillHoriListStyled>
  );
}

export default SkillHoriList;
