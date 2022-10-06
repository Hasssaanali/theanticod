import React, { Fragment } from "react";
import { articles } from "../Data/Data";
import { useParams, Link } from "react-router-dom";

export default function Singlebanner() {
  const { key } = useParams();
  const abc = key
  console.log(key);

  return (
    <Fragment>
      <div className="container-fluid">
        {articles.map((data, index) => {
          return (
            <div key={index}>
              {
                data.key === abc ? <>
                <div className="row" key={data.key}>
                <div
                  className="col-sm-12 abtbanner"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <h2>{data.heading}</h2>
                  <p></p>
                </div>
              </div>

              <div className="container singlearticle">
                <div className="row">
                  <div className="col-sm-7"  data-aos="fade-right" data-aos-duration="2000">
                    <img src={data.feature} alt="mainimage" width="100%" />
                  </div>
                  <div className="col-sm-5 articleheading"  data-aos="fade-left" data-aos-duration="2000">
                    <h2>{data.heading}</h2>
                    <p>
                      <b>Author</b>: {data.Author}
                    </p>
                    <p>
                      <b>Date</b>: 18-02-1996
                    </p>
                  </div>
                </div>

                <div className="row contentdetail">
                  <div className="col-sm-8 articleheading" data-aos="fade-left" data-aos-duration="2000">
                    <p>{data.content}</p>
                  </div>

                  <div className="col-sm-4 sidebar" >
                    <h3>Recent Articles</h3>
                    {articles.slice(0, 3).map((data, index) => {
                      return (
                        <div key={data.key}>
                        <Link to={`/singlearticle/${data.key}`}  onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} >
                          <div className="recent row">
                            <div className="col-sm-3">
                              <img
                                src={data.feature}
                                alt="recentimg"
                                width="100%"
                              />
                            </div>
                            <div className="col-sm-9 recent">
                              <h2>{data.heading}</h2>
                              <p>
                                <b>Author</b>: {data.Author}
                              </p>
                            </div>
                          </div>
                        </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
                </> : null
              }
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
