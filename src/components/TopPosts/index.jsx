import { Container, Loading, PostWrap } from './styles';
import PostList from '@components/PostList';
import Spinner from '@components/Spinner';
import { useGetAllPosts } from '@hooks/usePost';
import React from 'react';

const TopPosts = ({ slice }) => {
  const { allPosts, isLoading } = useGetAllPosts();

  return (
    <Container>
      {isLoading ? (
        // 포스트 로딩 중
        <Loading>
          <Spinner />
          <div>불러오는 중...</div>
        </Loading>
      ) : (
        <PostWrap>
          {[...allPosts]
            .sort((a, b) => {
              return b.postLike.length - a.postLike.length;
            }) // 전체 포스트 중에 postLike의 개수 순으로 정렬
            .slice(0, slice)
            .map((post) => (
              <PostList
                key={post.postId}
                postId={post.postId}
                postUser={post.postUser}
                postContent={post.postContent}
                postLike={post.postLike}
                comments={post.comments}
                createdAt={post.createdAt}
                updatedAt={post.updatedAt}
              />
            ))}
        </PostWrap>
      )}
    </Container>
  );
};

export default TopPosts;