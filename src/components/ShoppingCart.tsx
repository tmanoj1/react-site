import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrancy";
import { CartItem } from "./CartItem";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ShoppingCartProps = {
  isOpen: boolean;
  products: Product[];
};

export function ShoppingCart({ isOpen, products }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <div className="text-center fs-5">No Item in Cart</div>
        ) : (
          <Stack gap={3}>
            {cartItems.map((item) => {
              const product = products.find((p) => p.id === item.id);
              return product ? (
                <CartItem key={product.id} products={products} idd={product.id} quantity={item.quantity} />
              ) : null;
            })}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const product = products.find((p) => p.id === cartItem.id);
                  return total + (product?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
