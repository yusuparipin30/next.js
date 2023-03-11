import {useRouter} from "next/router"
const blogId = () => {
    const router = useRouter();
    const {blogId} = router.query;
  return (
   
    <div><h2>Blog Dinamic Route: {blogId}</h2></div>
  )
}

export default blogId