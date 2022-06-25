import { useParams } from "react-router-dom";
import data from "../../data/push";
export default function Post() {
  const params = useParams();
  const post = data.find((element) => {
    if (element.id === Number(params.id)) {
      return element;
    }
    return undefined
  });

  return <>{post ? <h1>{post.title}</h1> : <h1>This page not found</h1>}</>;
}
