import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ListProducts=()=>{

    const[products,setProducts]=useState([])

    useEffect(()=>{
       
         getAllProducts()
    },[])

    const getAllProducts=async()=>{

        const result=await axios.get("http://localhost:9191/products/findall")

        setProducts(result.data)

    }

    return(
        <div className="container">
          <div className="row">
             <Link to={`addproduct`} className="btn btn-success">Add Product</Link>
             <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product)=>(
                            <tr>
                                <td>{product.productId}</td>
                                <td>{product.productName}</td>
                                <td>{product.productPrice}</td>
                                <td>{product.productDescription}</td>
                            </tr>
                        ))
                    }
                </tbody>
             </table>
          </div>
        </div>
    )

}