export interface IData {
  id: string;
  title: string;
  type: "show" | "talk" | "musical";
  releaseDate: number;
  description: string;
  price: number;
  currency: "euro";
  totalPrice?: number;
  units?: number;
}
