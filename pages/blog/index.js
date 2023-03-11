import {useRouter} from "next/router";

const index = () => {
    const router = useRouter();
    const {page, limit} = router.query;
  return (
    <div><h2>This Is Blog Page: {page} limit:{limit}</h2></div>
  )
}

export default index