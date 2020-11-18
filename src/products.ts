export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  sale?: boolean;
  new?: boolean;
}

export function encodeProductName(name: string) {
  return encodeURIComponent(name.replace(/ /g, "-").toLowerCase());
}

const products: Product[] = [
  {
    id: 1,
    name: 'Camisa Preta',
    description: 'Camisa Preta',
    image: 'https://picsum.photos/200',
    price: 10.99,
    sale: true,
    new: false
  },
  {
    id: 2,
    name: 'Camisa Cinza',
    description: 'Camisa Cinza',
    image: 'https://picsum.photos/200',
    price: 15,
    sale: false,
    new: false
  },
  {
    id: 3,
    name: 'Camisa Azul',
    description: 'Camisa Azul',
    image: 'https://picsum.photos/200',
    price: 13,
    sale: true,
    new: false
  },
  {
    id: 4,
    name: 'Camisa Verde',
    description: 'Camisa Verde',
    image: 'https://picsum.photos/200',
    price: 14,
    sale: true,
    new: false
  },
  {
    id: 5,
    name: 'Camisa Amarela',
    description: 'Camisa Amarela',
    image: 'https://picsum.photos/200',
    price: 19,
    sale: false,
    new: false
  },
  {
    id: 6,
    name: 'Camisa Roxa',
    description: 'Camisa Roxa',
    image: 'https://picsum.photos/200',
    price: 9.99,
    sale: false,
    new: true
  },
  {
    id: 7,
    name: 'Camisa Marrom',
    description: 'Camisa Marrom',
    image: 'https://picsum.photos/200',
    price: 7.99,
    sale: false,
    new: false
  },
  {
    id: 8,
    name: 'Tênis Preto',
    description: 'Tênis Preto',
    image: 'https://picsum.photos/200',
    price: 7.99,
    sale: false,
    new: false
  },
  {
    id: 9,
    name: 'Tênis Branco',
    description: 'Tênis Branco',
    image: 'https://picsum.photos/200',
    price: 7.99,
    sale: false,
    new: false
  },
  {
    id: 10,
    name: 'Camisa Marrom',
    description: 'Camisa Marrom',
    image: 'https://picsum.photos/200',
    price: 7.99,
    sale: false,
    new: false
  },
  {
    id: 11,
    name: 'Camisa Laranja',
    description: 'Camisa Laranja',
    image: 'https://picsum.photos/200',
    price: 7.99,
    sale: false,
    new: true
  },
  {
    id: 12,
    name: 'Camisa Azul Escuro',
    description: 'Camisa Azul Escuro',
    image: 'https://picsum.photos/200',
    price: 7.99,
    sale: false,
    new: false
  },
  {
    id: 13,
    name: 'Camisa Branca',
    description: 'Camisa Branca',
    image: 'https://picsum.photos/200',
    price: 7.99,
    sale: false,
    new: true
  }
];

export default products;