const mango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

type User = {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
};

// 2

interface Address {
  city: string;
  country: string;
}

interface User2 {
  name: string;
  age: number;
  email: string;
  address?: Address;
}
