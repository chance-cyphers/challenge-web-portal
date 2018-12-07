import React from 'react';
import './SkillList.css';

let SkillList = ({className, skillName}) => {
  return (
      <div className={`SkillList ${className}`}>
          <p>{skillName}</p>
      </div>
  );
};

export default SkillList;