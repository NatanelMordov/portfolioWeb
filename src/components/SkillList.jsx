import React from 'react'

const SkillList = ({src, skill}) => {
  return (
      <span>
        <img src={src}/>
        <p>{skill}</p>
      </span>
  )
}

export default SkillList