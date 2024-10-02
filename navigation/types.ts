export type RootStackParamList = {
  FrontPage: undefined;
  CarListPage: undefined;
  CheckoutPage: { car: { id: number; name: string; price: string; image: string; details?: string } };
};


