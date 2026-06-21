import Post from './Post';

function Posts(props)
{
  return(
    <div className="block">
      <h1>Posts</h1>

      {props.posts.map((post, index) =>
        <Post
          key={index}
          title={post.title}
          content={post.content}
        />
      )}
    </div>
  );
}

export default Posts;
