export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  sale?: boolean;
  new?: boolean;
  bestSeller?: boolean;
}

export function encodeProductName(name: string) {
  return encodeURIComponent(name.replace(/ /g, "-").toLowerCase());
}

const products: Product[] = [
  {
    id: 1,
    name: 'Camisa Preta',
    description: 'Camisa Preta',
    image: '/products/camisa-preta.jpg',
    price: 10.99,
    sale: true,
    new: false,
    bestSeller: false
  },
  {
    id: 2,
    name: 'Camisa Cinza',
    description: 'Camisa Cinza',
    image: '/products/camisa-cinza.jpg',
    price: 15,
    sale: false,
    new: false,
    bestSeller: true
  },
  {
    id: 3,
    name: 'Camisa Azul',
    description: 'Camisa Azul',
    image: '/products/camisa-azul.jpg',
    price: 13,
    sale: true,
    new: false,
    bestSeller: false
  },
  {
    id: 4,
    name: 'Camisa Verde',
    description: 'Camisa Verde',
    image: '/products/camisa-verde.jpg',
    price: 14,
    sale: true,
    new: false,
    bestSeller: false
  },
  {
    id: 5,
    name: 'Camisa Amarela',
    description: 'Camisa Amarela',
    image: '/products/camisa-amarela.jpg',
    price: 19,
    sale: false,
    new: false,
    bestSeller: true
  },
  {
    id: 6,
    name: 'Camisa Roxa',
    description: 'Camisa Roxa',
    image: '/products/camisa-roxa.jpg',
    price: 9.99,
    sale: false,
    new: true,
    bestSeller: false
  },
  {
    id: 7,
    name: 'Camisa Marrom',
    description: 'Camisa Marrom',
    image: '/products/camisa-marrom.jpg',
    price: 7.99,
    sale: false,
    new: false,
    bestSeller: false
  },
  {
    id: 10,
    name: 'Camisa Laranja',
    description: 'Camisa Laranja',
    image: '/products/camisa-laranja.jpg',
    price: 7.99,
    sale: false,
    new: true,
    bestSeller: false
  },
  {
    id: 11,
    name: 'Camisa Azul Escuro',
    description: 'Camisa Azul Escuro',
    image: '/products/camisa-azul-escuro.jpg',
    price: 7.99,
    sale: false,
    new: false,
    bestSeller: true
  },
  {
    id: 12,
    name: 'Camisa Branca',
    description: 'Camisa Branca',
    image: '/products/camisa-branca.jpg',
    price: 7.99,
    sale: false,
    new: true,
    bestSeller: false
  }
];

export default products;