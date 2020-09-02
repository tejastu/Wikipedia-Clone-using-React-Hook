import React, { useState, useEffect } from "react";
import axios from "axios";

const Wikipedia = () => {
  const [term, searchTerm] = useState("Wikipedia");
  const [searchData, setSearchData] = useState([]);
  console.log("initial render");
  useEffect(() => {
    const search = async () => {
      let response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      console.log(response);
      setSearchData(response.data.query.search);
    };
    setTimeout(() => {
      if (term) {
        search();
      }
    }, 100);
  }, [term]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12" style={{ marginTop: "20px" }}>
          <input
            type="search"
            placeholder="Search Wikipedia"
            className="form-control"
            onChange={(e) => searchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: "20px" }}>
        {searchData.map((data) => (
          <div
            className="col-md-12"
            key={data.pageid}
            style={{ marginBottom: "10px" }}
          >
            <div className="card">
              <a
                href={`https://en.wikipedia.org/?curid=${data.pageid}`} //curid= currentid
                style={{
                  textAlign: "right",
                  marginRight: "20px",
                  marginTop: "10px",
                }}
              >
                Go to page
              </a>
              <div
                className="card-title"
                style={{ fontWeight: "bold", marginLeft: "20px" }}
              >
                {data.title}
              </div>
              <div className="card-body">{data.snippet}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wikipedia;
