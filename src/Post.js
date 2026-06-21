function Post(props)
{
  return(
    <div>
      <fieldset>
        <legend style={{fontWeight:"bold"}}>{props.title}</legend>
        <p>{props.content}</p>
      </fieldset>
    </div>
  );
}

export default Post;
