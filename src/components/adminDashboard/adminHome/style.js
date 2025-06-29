import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
`
export const Statistik = styled.div`
    display: flex;
    gap: 20px;
`
export const StatistikCard = styled.div`
    background-color: white;
    border-radius: 10px;
    padding:  10px;
    box-shadow: 0 0 5px silver;
    display: flex;
    gap: 30px;
    transition: .1s;
    &:hover{
    }
    p{
        color: #333;
        font-size: 14px;
        font-weight: 600;
    }
    .icon{
        font-size: 20px;
    }
`
export const Mycharts = styled.div`
    display: flex;
    gap: 20px;
`

export const MyPiechart = styled.div`
    background-color: white;
    border-radius: 10px;
    padding:20px;
    box-shadow: 0 0 5px silver;
    margin-top: 30px;
    h4{
        margin-bottom: 10px;
    }
`

