export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export function encodeProductName(name: string) {
  return encodeURIComponent(name.replace(" ", "-").toLowerCase());
}

const products: Product[] = [
  {
    id: 1,
    name: 'Camisa Preta',
    description: 'Camisa Preta',
    image: 'https://picsum.photos/200',
    price: 10.99
  },
  {
    id: 2,
    name: 'Camisa Cinza',
    description: 'Camisa Cinza',
    image: 'https://picsum.photos/200',
    price: 15
  },
  {
    id: 3,
    name: 'Camisa Azul',
    description: 'Camisa Azul',
    image: 'https://picsum.photos/200',
    price: 13
  },
  {
    id: 4,
    name: 'Camisa Verde',
    description: 'Camisa Verde',
    image: 'https://picsum.photos/200',
    price: 14
  },
  {
    id: 5,
    name: 'Camisa Amarela',
    description: 'Camisa Amarela',
    image: 'https://picsum.photos/200',
    price: 19
  },
  {
    id: 6,
    name: 'Camisa Roxa',
    description: 'Camisa Roxa',
    image: 'https://picsum.photos/200',
    price: 9.99
  },
  {
    id: 7,
    name: 'Camisa Marrom',
    description: 'Camisa Marrom',
    image: 'https://picsum.photos/200',
    price: 7.99
  },
  {
    id: 8,
    name: 'Tênis Preto',
    description: 'Tênis Preto',
    image: 'https://picsum.photos/200',
    price: 7.99
  },
  {
    id: 9,
    name: 'Tênis Branco',
    description: 'Tênis Branco',
    image: 'https://picsum.photos/200',
    price: 7.99
  },
  {
    id: 10,
    name: 'Camisa Marrom',
    description: 'Camisa Marrom',
    image: 'https://picsum.photos/200',
    price: 7.99
  },
  {
    id: 11,
    name: 'Camisa Marrom',
    description: 'Camisa Marrom',
    image: 'https://picsum.photos/200',
    price: 7.99
  },
  {
    id: 12,
    name: 'Camisa Marrom',
    description: 'Camisa Marrom',
    image: 'https://picsum.photos/200',
    price: 7.99
  },
  {
    id: 13,
    name: 'Camisa Marrom',
    description: 'Camisa Marrom',
    image: 'https://picsum.photos/200',
    price: 7.99
  }
];

export default products;