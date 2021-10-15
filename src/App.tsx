import React, {useEffect, useState} from 'react';
import './App.css';
import {InstanceDataType, testData} from "./api/data-api";
import {Diagram} from "./components/Diagram";
import {AxiosError} from "axios";


export type DiagramDataType = {
    title: string
    dev: InstanceDataType
    test: InstanceDataType
    prod: InstanceDataType
    norm: number
}

function App() {
    let [diagramData, setDiagramData] = useState<DiagramDataType>()
    useEffect(() => {
        testData.then(response => {
            setDiagramData({...response.data})
        })
            .catch((error: AxiosError) => {
                console.log(error.message)
            })
    }, [])
    return (
        <div className="App">
            <Diagram diagramData={diagramData}/>
        </div>
    );
}

export default App;
