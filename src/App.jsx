import React, { useState } from "react";
import "./App.css"
import Form from "./components/Form";
import { Tab } from "bootstrap";
import Table from "./components/table";

export default function App(){
   
    const[formData, setFormData]=useState(
        {
        projectName:"",
        projectDescription:"",
        price:"",
        search:""
    }
)
const [projects,setProjects]=useState([])


    return(
        <>
      

        <Form setFormData={setFormData} formData={formData} setProjects={setProjects}/>
        
     <Table projects={projects}/>
        </>
        
  )
}
