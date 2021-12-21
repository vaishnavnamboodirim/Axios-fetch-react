import React, {useState}  from "react";
import axios from "axios";


function Shop() {
    
   const [item, setItem] = useState("");

    const fetchItems = () =>{
        axios.get("https://fortnite-api.com/v1/banners").then((response)=>{
            console.log(response);
            setItem(response.data)
        }
        );
        
    };
    return (
        <div>
           <button onClick={fetchItems}> fetch</button>
           {item}
        </div>
    )
}

export default Shop;