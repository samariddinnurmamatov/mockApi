import { useEffect, useState } from "react";
import CardCategory from "../../components/CardCategory";
import axios from "axios";
import { toast } from "react-toastify";
import Free from "../../components/Free";
import { ENDPOINT } from "../../constants";
import Loading from "../../components/loading";


const CategoriesP = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() =>{
    const getData = async () => {
      setLoading(true);
      try {
        let { data } = await axios.get(`${ENDPOINT}/category`);
        setData(data)
      } catch (err){
        toast.error(err.message);
      } finally{
        setLoading(false)
      }
    }
    getData();
    // fetch("https://64b53eb3f3dbab5a95c7002a.mockapi.io/category",{ signal: controller.signal,}).then(res => 
    //   res.json()
    // ).then(res =>{
    //   setCategory(res)  
    // })
    // return () => {
    //   controller.abort();
    // };
  }, [])
  return (
      <div className="Flex" style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", padding: "10px"}}>
        {loading ? <Loading /> : data.length !== 0 ? (
          data.map((post) => <CardCategory key={post.id} {...post}/>)
        ) : (
          <Free />
        )}
      </div>
  )
}

export default CategoriesP