import React from 'react';
import Card from '../Card/card.component';

import useFetch from '../../effects/use-fetch.effect';

const Post = ({ postId }) => {
  const post = useFetch(
    `http://localhost:3000/clientes?id=${postId}`
  );

  return (
    <Card>
      {post ? (
        <div>
          <h3> {post.title} </h3>
          <p> {post.body} </p>
        </div>
      ) : (
        <p>Post não encontrado</p>
      )}
    </Card>
  );
};

export default Post;
