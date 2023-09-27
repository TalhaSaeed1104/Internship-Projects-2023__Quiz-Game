import styled, {createGlobalStyle} from "styled-components";

export const Globalstyle = createGlobalStyle `
html{
  height:100%
}

body{
  background-image: url('https://images.unsplash.com/photo-1506404523803-9f9fa45e066e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

*{
  box-sizing: border-box;
}

`

export const Wrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;

> button{
  color: #fff;
}

.score{
  color: #fff;
  font-size: 2rem;
  margin: 0;
  background: transparent;
  border: none;
}



h1{
  background: transparent;
  text-transform: uppercase;
  border-bottom: 5px dashed #87f1ff;
  font-weight: 400;
  color: white;
  font-size: 70px;
  text-align: center;
  margin:20px;
}

.start, .next{
  cursor: pointer;
  background: transparent;
  color: white;
  font-size: 25px;
  border: 1px solid #87f1ff;
  box-shadow: 0px 5px 10px rgba( 0 , 0 , 0 , 0.25 );
  border-radius: 10px;
  height: 40px;
  margin: 20px 0;
  padding 0 40px;
  width: 200px;
  max-width: 300px;
}


.number{
  background: transparent;
  color: white;
  font-size: 25px;
  border: 1px solid #87f1ff;
  box-shadow: 0px 5px 10px rgba( 0 , 0 , 0 , 0.25 );
  border-radius: 10px;
  height: 40px;
  margin: 10px 0;
  padding 0 20px;
  width: 200px;
  max-width: 300px;
}

.question{
  height: 50px;
  width: 550px;
  color: white;
  font-size: 25px;
}

.load{
  background: transparent;
  color: white;
  font-size: 20px;
  height: 40px;
  margin: 10px 10px 10px 70px;
  padding 0 20px;
  width: 200px;
  max-width: 300px;
}

.answer-data{
  cursor: pointer;
  justify-content: center;
  background: transparent;  
  border: 1px solid #87f1ff;
  border-radius: 5px;
  margin: 5px 5px 5px 140px ;
  height: 50px;
  width: 250px;
  color: white;
  font-size: 20px;
}


.start:hover{
  border:none;
}

.answer-data:hover{
  border:none
}

`