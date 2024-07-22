import React from 'react';

const produtos = [
  { id: 1, nome: 'Produto 1', preco: 100, imagem: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true' },
  { id: 2, nome: 'Produto 2', preco: 200, imagem: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-2.jpeg?raw=true' },
  { id: 3, nome: 'Produto 3', preco: 300, imagem: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-3.jpeg?raw=true' },
  { id: 4, nome: 'Produto 4', preco: 400, imagem: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-4.jpeg?raw=true' },
  { id: 5, nome: 'Produto 5', preco: 500, imagem: 'https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-5.jpeg?raw=true' },
  { id: 6, nome: 'Produto 6', preco: 600, imagem: 'https://authenticfeet.vteximg.com.br/arquivos/ids/255365-1000-1000/Tenis-Nike-Air-Force-1-Shadow-Feminino-Rosa-3.jpg?v=637850475954300000' },
  { id: 7, nome: 'Produto 7', preco: 700, imagem: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/mifjsufh/1.jpg' },
  { id: 8, nome: 'Produto 8', preco: 800, imagem: 'https://cdn.dooca.store/100/products/tenis-nike-revolution-7-masculino-wolf-grey.jpg?v=1706814592' }
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {produtos.map(produto => (
        <div key={produto.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img className="w-full h-64 object-cover" src={produto.imagem} alt={produto.nome} />
          <div className="p-4">
            <p className="text-lg font-semibold text-gray-800">{produto.nome}</p>
            <p className="text-gray-600">R$ {produto.preco.toFixed(2)}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Adicionar ao carrinho</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;