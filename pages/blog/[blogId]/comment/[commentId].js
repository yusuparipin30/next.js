import {useRouter} from "next/router"
const CommentId = () => {
    const router = useRouter();
    const {blogId, commentId} = router.query;
  return (
   
    <div><h2>Blog Dinamic Route: {blogId} - {commentId}</h2></div>
  );
};

export default CommentId