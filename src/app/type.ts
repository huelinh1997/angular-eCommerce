export interface Book {
  id: string;
  title: String;
  description?: String;
  author: String;
  image: String;
  price: number;
  quantity: number;
  type?: String;
  unit: String;
}

export interface Cart {
  productId: String;
  title: String;
  author: String;
  image: String;
  price: number;
  quantity: number;
  type?: String;
  unit?: String;
  id?: any;
}

export interface FormRegister {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface FormLogin {
  email: string;
  password: string;
}
