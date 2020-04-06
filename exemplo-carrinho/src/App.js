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
    carrinho.forEach(produto => {
      soma+=produto.price;
    })
    setSomaTotal(soma+frete)
  }

  function calcularFrete() {
    setFrete(carrinho.length*10);
  }

  return (
    <div className="App">

      <div className='container'>
        { carrinho.map(produto=>(

          <div className='card' key={produto.id}>
            <div className='item name'>{produto.name}</div>
            <div className='item price'>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produto.price)}</div>
            <div className='item delete'>
              <button onClick={() => handleDelete(produto.id)}>DELETE</button>
            </div>
          </div>

        ))}

        <div className='results'>
          <div className='to-left'>
            <div className='end-title'><strong>Frete:</strong> {frete}</div>
            <div className='end-title'> <strong>Total da compra:</strong> {somaTotal}</div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
