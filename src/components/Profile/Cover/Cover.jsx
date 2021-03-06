import React from 'react';
import s from './Cover.module.css';

function Cover(props) {
  return (
    <div className={s.coverImageWrapper}>
      <img className={s.coverImage} src={props.cover.imgSrc} alt="cover" />
    </div>
  );
}

export default Cover;