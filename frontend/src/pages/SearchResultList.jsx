import React, { useState } from "react";

import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useLocation } from "react-router-dom";
import TourCard from "./../shared/TourCard";
// import SearchBar from "../shared/SearchBar";
import Newsletter from "./../shared/Newsletter";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title={""} />
      <Container>
        <Col
          lg="12"
          className="d-flex align-items-center justify-content-left mt-5"
        >
          <Button variant="success" className="p-3">
            <Link className="link-book" to="/tours">
              Trở về trang trước
            </Link>
          </Button>
        </Col>
      </Container>
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default SearchResultList;
