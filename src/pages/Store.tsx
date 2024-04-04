import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

interface StoreProps {
  products: Product[];
}

export function Store({ products }: StoreProps) {
  console.log(products)
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
