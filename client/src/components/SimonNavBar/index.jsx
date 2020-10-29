import React, {useState} from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
//import page1 from asdfasdf
//import page2 from asdfasdfasdf

export function Navbar(props){
    const [active,setActive] = useState(1);

    return(
        <React.Fragment>
        <div>
            <Pagination size="lg">
                <PageItem key={1} active={1 === active} onClick={()=>setActive(1)}>risk tool</PageItem>
                <PageItem key={2} active={2 === active} onClick={()=>setActive(2)}>DB entires</PageItem>
                <PageItem key={3} active={3 === active} onClick={()=>setActive(3)}>Heatmap</PageItem>
                <PageItem key={4} active={4 === active} onClick={()=>setActive(4)}>4</PageItem>
                <PageItem key={5} active={5 === active} onClick={()=>setActive(5)}>5</PageItem>
            </Pagination>
        </div>
        <Pages >
            <Page key={1} active={1 === active}>I am page 1</Page>
            <Page key={2} active={2 === active}>I am page 2</Page>
            <Page key={3} active={3 === active}>I am page 3</Page>
            <Page key={4} active={4 === active}>I am page 4</Page>
            <Page key={5} active={5 === active}>I am page 5</Page>
        </Pages>
        </React.Fragment>
    );
}

function Pages(props){
    return(
        props.children
    );
}

function Page(props){
    return(
    <p hidden={!props.active}>{props.children}</p>
    );
}