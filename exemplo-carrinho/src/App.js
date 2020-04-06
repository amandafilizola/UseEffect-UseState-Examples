import React, { useEffect, useState } from 'react';
import './App.css'
const dadosCarrinho =
[
  {
    id:1,
    name: 'Adidas Superstar',
    price: 279
  },
  {
    id:2,
    name: 'Mizuno Wave Creation',
    price: 899
  },
  {
    id:3,
    name: 'Chinelo Havaianas',
    price: 40
  },
  {
    id:4,
    name: 'Nike Run',
    price: 559
  }
]

function App() {
  const [carrinho, setCarrinho] = useState(dadosCarrinho);
  const [somaTotal, setSomaTotal] = useState(0);
  const [frete, setFrete] = useState(0);

  useEffect(()=>{
    calcularFrete();
    somarTudo();
  }, [carrinho, frete])

  function handleDelete(id) {
    let carrinhoRestante = carrinho.filter(item => item.id !== id)
    setCarrinho(carrinhoRestante)
  }

  function somarTudo() {
    let soma = 0;
    carrinho.forEach(produto=>{
      soma+=produto.price;
    })
    setSomaTotal(soma+frete)
  }

  function calcularFrete() {
    setFrete(carrinho.length*10);
  }

  return (
    <div className="App">
      {carrinho.map(produto=>(
        <div className='card' key={produto.id}>
          <div className='item'>{produto.name}</div>
          <div className='item'>{produto.price}</div>
          <button className='item' onClick={()=>handleDelete(produto.id)}>DELETE</button>
        </div>
      ))}
      <div>Frete: {frete}</div>
      <div>Total da compra: {somaTotal}</div>
    </div>
  );
}

export default App;
