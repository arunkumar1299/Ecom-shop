import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
const Product = () => {
  const dispatch = useDispatch();
  const {data: products} = useSelector(state =>state.products)

  useEffect(() => {
    // call the api
  dispatch(getProducts())
  
  }, []);

  const addToCart = (product)=>{
    
    dispatch(add(product))

  }

  const cards = products.map(product =>(
    
      <div key ={product.id} className="col-md-3" style={{marginBottom:'10px'}}>
      <Card className="h-100">
        <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}} />

        </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         INR: { product.price} ₹
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{background:'white'}} className="text-center">
      <Button variant="primary" onClick={()=> addToCart(product)}>Add to Cart</Button>

      </Card.Footer>
    </Card>
      </div>

    
  ))
  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div> 
    </>
  );
};
export default Product;
