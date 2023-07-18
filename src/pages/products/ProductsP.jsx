// import { Fragment, useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import { ENDPOINT } from "../../constants";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Loading from "../../components/loading";
// import CardCategory from "../../components/CardCategory";
// import Free from "../../components/Free";
import {  Fragment, useEffect, useState } from "react";
import ProductPost from "../../components/ProductPost";
import axios from "axios";
import { toast } from "react-toastify";
import Free from "../../components/Free";
import { ENDPOINT, PAGE_LIMIT } from "../../constants";
import Loading from "../../components/loading";
import { useParams } from "react-router-dom";
import './product.css'
import { Pagination } from "react-bootstrap";


const ProductsP = () => {
  let {id} = useParams();
  // const [produc, setProduc] = useState({});
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true)
  //     try{
  //       let { data } = await axios.get(`${ENDPOINT}/category/${id}/product`);
  //       setProduc(data)
  //     }catch(err) {
  //       toast.error(err.message)
  //     }finally{
  //       setLoading(false)
  //     }
  //   }
  //   getData()
  // }, [id])
  // return (
  //     <div style={{display: "flex", justifyContent: "space-between", gap: "20px", padding: "20px"}}>
  //      {loading ? <Loading /> : produc.length !== 0 ? (
  //       produc.map((post) => <CardCategory key={post.id} {...post}/>)
  //     ) : (
  //       <Free />
  //     )}
  //   </div>
  // )

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() =>{
    const getData = async () => {
      setLoading(true);
      try {
        let { data } = await axios.get(`${ENDPOINT}/category/${id}/product?firstName=${search}&page=${page}&limit=${PAGE_LIMIT}`);
        // data.searchParams.append('title', 'hello');
        let {data: totalData} = await axios.get(`${ENDPOINT}/category/${id}/product?firstName=${search}`)
        setData(data)
        setTotal(totalData.length )
      } catch (err){
        toast.error(err.message);
      } finally{
        setLoading(false)
      }
    }
    getData();
  }, [id, search, page])
  const handleSearch = (e) => {
    setPage(1)
    setSearch(e.target.value)
  }
  
  const getPage = (key) => {
    setPage(key)
  }

  const items = [];
  for (let number = 1; number <= Math.ceil(total / PAGE_LIMIT); number++) {
    items.push(
      <Pagination.Item onClick={() => getPage(number)} key={number} active={number === page}>
        {number}
      </Pagination.Item>,
    );
  }

  let pagination = total > PAGE_LIMIT && <Pagination>{items}</Pagination>;
  return (
    <div>
      <div className="contaner" style={{padding: "5px", paddingTop: "15px"}}>
        <input value={search} onChange={handleSearch} className="form-control" type="text" placeholder="Searching..."/>
      </div>
      <h2 className="contaner" style={{textAlign: "center", padding: "20px 0px"}}>Total: {total}</h2>
      <div className="grid contaner">
        {loading ? <Loading /> : data.length !== 0 ? (
             data.map((post) => <ProductPost key={post.id} {...post}/>)
        ) : (
          <Free />
          )}
      </div>
      <div className="contaner" style={{display: "flex", justifyContent: "center", margin: "25px 0px"}}>
        {pagination}
      </div>
    </div>
  )
}

export default ProductsP