import axios from "axios";
import { useState } from "react";

const CreateApiHook = () =>{
    const [data, setData] = useState();
    const getData = async (url) => {
        console.log("get data called");
        axios.get(url).then((response)=>{
            console.log(response.data.bpi);
            setData(response.data.bpi);
        });
    }

    return {data, getData};
}

export default CreateApiHook;