import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const { avatar, name, time } = props;
  return (
    <div className="post-header">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="data-container">
        <strong>{name}</strong>
        <p>{time}</p>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
