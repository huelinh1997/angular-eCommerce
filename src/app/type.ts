export interface Book {
  title: String;
  description?: String;
  author: String;
  image: String;
  price: number;
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
