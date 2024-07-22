import React from 'react';

export default function BuyBox() {

  return (
      <div id="BuyBox" className="p-4 border border-gray-200 shadow-md rounded-lg">
          <div className="text-center">
              <h1 className="text-2xl font-bold">Nome do Produto</h1>
              <div className="text-gray-600">Referência: XYZ123</div>
              <div className="flex items-center justify-center mt-2">
                  {/* Estrelas/Avaliações - Substitua com o código apropriado */}
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-2 text-gray-600">(10 avaliações)</span>
              </div>
              <div className="mt-4">
                  {/* Desconto/Preço - Substitua com o código apropriado */}
                  <div className="text-xl font-bold text-green-600">R$ 99,99</div>
                  <div className="text-sm text-gray-500 line-through">R$ 129,99</div>
              </div>
              <div className="mt-4">
                  <p className="text-gray-700">Descrição:</p>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, accusantium voluptatibus. Numquan repudiandae pariatur non corrupti veniam temporibus porro facilis debitis, quo ipsam! Natus vitae ut in corrupti laborum. Totam.</p>
              </div>
              <div className="mt-4">
                  <p className="text-gray-700">Opções:</p>
                  <div className="flex space-x-4">
                      <div className="bg-gray-200 rounded-md p-2">Opção 1</div>
                      <div className="bg-gray-200 rounded-md p-2">Opção 2</div>
                      {/* Adicione mais opções conforme necessário */}
                  </div>
              </div>
              <div className="mt-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Comprar</button>
              </div>
          </div>
      </div>
  );
}

