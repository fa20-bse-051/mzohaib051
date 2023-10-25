import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const CreateDatabase = () =>{
    const dbname = "test";
    const [data, setData] = useState();

    const saveData = (newdata)=>{
        AsyncStorage.setItem("dbname", JSON.stringify(newdata));
    }

    const getData = ()=> {
        
    }
}

export default CreateDatabase;