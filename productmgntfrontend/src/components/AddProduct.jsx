import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct=()=>{

    let navigate=useNavigate()

   const [product,setProduct]=useState({
    
       productName:"",
       productPrice:"",
       productDescription:""

   })

   const {productName,productPrice,productDescription}=product;

   const onInputChange=(e)=>{
       setProduct({...product,[e.target.name]:e.target.value});
   }

   const onSubmit=async(e)=>{
       e.preventDefault();

       await axios.post("http://localhost:9191/products/addproduct",product);

       navigate('/')
   }

    return(
        <div className="container">
           <div className="row">
        <div>
            <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    Product Name <input type="text" name="productName" value={productName} onChange={(e)=>onInputChange(e)} />
                </div>
                 <div className="mb-3">
                    Product Price <input type="text" name="productPrice" value={productPrice} onChange={(e)=>onInputChange(e)} />
                </div>
                 <div className="mb-3">
                    Product Description <input type="text" name="productDescription" value={productDescription} onChange={(e)=>onInputChange(e)} />
                </div>
                <button type="submit" className="btn btn-success">Add Product</button>                
            </form>
        </div>
           </div>
        </div>
    )

}