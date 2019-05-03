import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = (props) => {
  const {
    id, avatar, name, time, content,
  } = props;
  return (
    <div className="post" id={`post-${id}`}>
      <PostHeader avatar={avatar} name={name} time={time} />
      <p>{content}</p>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
