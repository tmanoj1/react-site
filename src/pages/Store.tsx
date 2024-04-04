import { useState, useEffect } from "react";
import { Col, Row, Form, FormControl, Button } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

interface Product {
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
}

interface StoreProps {
  products: Product[];
}

export function Store({ products }: StoreProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const normalizedSearchQuery = searchQuery.toLowerCase().trim();
    setSearchResults(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(normalizedSearchQuery) ||
          product.category.toLowerCase().includes(normalizedSearchQuery)
      )
    );
  }, [searchQuery, products]);

  const handleSearch = () => {
    // You can perform any additional actions here if needed
  };

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>Store</h1>
        <Form>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline-success" onClick={handleSearch}>
            Search
          </Button>
        </Form>
      </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {(searchQuery.trim() !== "" ? searchResults : products).map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
