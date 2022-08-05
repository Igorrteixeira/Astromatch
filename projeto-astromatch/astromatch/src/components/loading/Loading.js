import React from "react";
import { ContainerLoader } from "./style";
import {FcLike} from "react-icons/fc"

export const Loading = () =>{
    return(
        <ContainerLoader>
            <div className="efeito"></div> 	
            <div className="pulse"><FcLike/></div>

        </ContainerLoader>
    )
}