import { useState, useEffect } from "react";
import Post from "./Post";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  console.log(data);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => setData((oldData) => [...oldData, ...arr]));
  }, [pageNo]);

  return <Post data={data} setPageNo={setPageNo} />;
}
