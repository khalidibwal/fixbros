import React, {useEffect} from "react";
import { useNavigation } from "@react-navigation/native";

export default function PreviousPage(){
    const Navigation = useNavigation()
    useEffect(() => {
        Navigation.canGoBack()
    }, []);
    return(
        <></>
    )
}