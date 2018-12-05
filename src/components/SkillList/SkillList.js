import React from 'react';
import './SkillList.css';

let SkillList = (props) => {
  return (
      <div className={`SkillList ${props.className}`}>
          <p>Example Skill</p>
      </div>
  );
};

export default SkillList;