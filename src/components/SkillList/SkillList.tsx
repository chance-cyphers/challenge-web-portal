import React from 'react';
import './SkillList.css';

type Props = {
    className: string
    skillName: string
}

let SkillList = ({className, skillName}: Props) => {
  return (
      <div className={`SkillList ${className}`}>
          <p>{skillName}</p>
      </div>
  );
};

export default SkillList;