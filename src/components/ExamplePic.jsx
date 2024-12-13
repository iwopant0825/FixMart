import styled from "styled-components"

export default function ExamplePic({num, setPic}){
    return(
        <Layout onClick={()=>{
            console.log(num)
            setPic(num)
        }}>
            <img width={150} height={300} src={`/pictures/pic${num}.jpeg`}/>
            <Title>풍경사진 {num}</Title>
            <Price>1,500원</Price>
        </Layout>
    )
}
const Layout = styled.div`
    width:150px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:5px;
`

const Title = styled.div`
    font-size:20px;
    font-weight:600;
`
const Price = styled.div`

`