import axios from "axios";
import { useState } from "react";

const CreateApiHook = () =>{
    const [data, setData] = useState();
    const getData = async (url) => {
        console.log("get data called");
        axios.get(url).then((response)=>{
            console.log(response.data.data);
            const unicodeBooks = response.data.data.filter((book) => book.bookType === 'UNICODE');
            setData(unicodeBooks);
        });
    }

    return {data, getData};
}

export default CreateApiHook;