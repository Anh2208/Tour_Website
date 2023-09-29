import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Thống kê tour </h5>
          <iframe
            title="ToursStatistics"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              // boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-tourism-nkvte/embed/charts?id=651696d6-00d9-40d2-8b43-0d187ef88b4e&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
