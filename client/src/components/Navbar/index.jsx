import React, {useState} from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import {Page1} from '../../Page1.jsx'
import {Page2} from '../../Page2.jsx'
import {Page3} from '../../Page3.jsx'
import {Page4} from '../../Page4.jsx'
import {Page5} from '../../Page5.jsx'
var DBcache = [];

export function handleCache(data){
    DBcache = data;
    console.log(DBcache[0]);
    console.log(DBcache[1]);
}

export function Navbar(){
    const [active,setActive] = useState(1);
    const [temp,setTemp] = useState([{          //instead of a hardcoded array, we want the DBarray
        name: "kap",
        date: "Nov12",
        category: "Confidentiality",
        data: "[1,3,1]"
    },
    {
        name: "testing",
        date: "Oct12",
        category: "Integrity",
        data: "[3,4,5]"
    },
    {
        name: "another name",
        date: "Jan2",
        category: "Availability",
        data: "[0,2,5]"
    },
]);

    return(
        <React.Fragment>
        <div>
            <Pagination theme='green' size="lg">
                <PageItem key={1} active={1 === active} onClick={()=>setActive(1)}>Risk Tool</PageItem>
                <PageItem key={2} active={2 === active} onClick={()=>setActive(2)}>DB Entires</PageItem>
                <PageItem key={3} active={3 === active} onClick={()=>setActive(3)}>Heatmap</PageItem>
                <PageItem key={4} active={4 === active} onClick={()=>setActive(4)}>Info</PageItem>
            </Pagination>
        </div>
        <Pages >
            <Page1 key={1} active={1 === active}></Page1>
            <Page2 key={2} active={2 === active} dbCacheArray={temp} setdbCacheArray={setTemp}></Page2>
            <Page3 key={3} active={3 === active} dbCacheArray={temp} setdbCacheArray={setTemp}></Page3>
            <Page4 key={4} active={4 === active}></Page4>
        </Pages>
        </React.Fragment>
    );
}

function Pages(props){
    return(
        props.children
    );
}
