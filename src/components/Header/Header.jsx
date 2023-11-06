import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

function Header() {

  const values = useContext(AppContext)

  const {product} = values
 
  const imageLink =
    "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const altText = "Loading...";

  const result = localStorage.getItem("name");
  console.log(result);

  return (
    <div className="flex justify-around  w-full items-center p-4 ">
      <div className="">
        <img src={imageLink} className="w-28 rounded-md" alt={altText} />
      </div>
      <ul className="flex gap-5 ">
        <li>
          {" "}
          <Link to={"/shoes"}>
            <Button variant="text">Shoes</Button>
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/clothes"}>
            <Button variant="text">Clothes</Button>
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/kids"}>
            <Button variant="text">Kids</Button>
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/tradintional"}>
            <Button variant="text">Traditional</Button>
          </Link>
        </li>
      </ul>
      <div className="">
        {result ? (
          <>
            <Link to={"login"}>
              <Button variant="text">{result}</Button>
            </Link>
            <Link>
              <Button variant="text" onClick={()=>{
            localStorage.removeItem("name")
              }} >LOGOUT</Button>
            </Link>
            <Link to={"cart"}>
              <Button variant="text">Cart </Button>
            </Link>
          </>
        ) : (
            <>
          <Link to={"login"}>
            <Button variant="text">Login</Button>
          </Link>
          <Link to={"cart"}>
              <Button variant="text">Cart <span className="text-white bg-red-600 rounded-xl px-2 ms-2 ">{product.length}</span></Button>
            </Link>
          
            </>
          
        )}
      </div>
    </div>
  );
}

export default Header;
