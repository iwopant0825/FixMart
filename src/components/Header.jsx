import styled from "styled-components"
import Logo from "/Logo.svg"
export default function Header() {
    return(
        <Layout>
            <img width={150} src={Logo}/>
            <List>
                <ListConText>phone</ListConText>
                <ListConText>tablet</ListConText>
                <ListConText>PC</ListConText>
            </List>
        </Layout>
    )
}
const Layout = styled.div`
    width:100%;
    background-color:red;
    display:flex;
    align-items:center;
    padding:30px 80px;
    justify-content:space-between;
    border-bottom: 0.6px solid #d7d7d7;
    position:absolute;
    background-color:white;
`
const List = styled.div`
    height:100%;
    display:flex;
    align-items:center;
    gap:50px;
`
const ListConText = styled.div`
    font-size:25px;
    font-weight:100;
`