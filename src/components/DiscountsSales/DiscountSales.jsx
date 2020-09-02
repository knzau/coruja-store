import React, { Component } from "react";
import "./DiscountSalesStyles.scss";

import SaleTimeline from "./SaleTimeLine";

class DiscountSales extends Component {
  render() {
    return (
      <div className="discounts-sales">
        <div className="left-wrapper">
          <div className="discounts-content">
            <h2 className="discounts__header-primary">
              Discounts <br></br>and sales
            </h2>
            <span className="discounts__text">
              Follow our promotions and discounts. We constantly update them so
              that you can buy your favourite home products at the best prices
              and every Monday a random discount on certain products. Hurry up
              to buy at an attractive price.
            </span>
          </div>

          <div className="best-selling--wrapper">
            <h4 className="header-small">best selling</h4>
            <h1 className="sale-text">
              shoes <br></br>up to 70% off
            </h1>
            <a href="#shoes" className="btn-text buy-now">
              Buy Now
            </a>
            <SaleTimeline />
          </div>
        </div>
        <div className="right-wrapper">
          <div className="top-discount--wrapper">
            <h4 className="header-small margin-bottom-huge">Top Discounts</h4>
            <h1 className="sale-text">
              <span>Save up to</span>
              <br></br> 50% off
            </h1>
            <a href="#shoes" className="btn-text buy-now">
              Buy Now
            </a>
          </div>
          <div className="newsletter-wrapper">
            <h2 className="newsletter-header">Newsletter</h2>
            <span className="newsletter-content">
              Stay updated on all that's new and noteworthy. Join our list and
              get 15% off your first purchase.
            </span>
            <input
              id="email-subscribe"
              type="email"
              placeholder="Email Address"
              className="newsletter-subscibe"
              required
            />
            <button className="email-label" htmlFor="email-subscribe">Subscribe</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscountSales;
