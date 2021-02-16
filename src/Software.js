import react, { useState } from "react";
import ReadMoreAndLess, { ReadMore } from "react-read-more-less";
import "./Software.css";
function Software() {
  return (
    <div className="software_page">
      <div className="row">
        <div className="software_item col-lg-6">
          <div class="card bg-light">
            <img
              class="card-img-top"
              src="/Images/laptopicon.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Web and App Development</h5>
              <p class="card-text">
                <ReadMoreAndLess
                  ref={ReadMore}
                  className="read-more-content"
                  charLimit={50}
                  readMoreText="Read More"
                  readLessText="Read Less"
                >
                  Retail Experts offers a comprehensive e-commerce website application and mobile application that is fully customizable and personalized based on the customer's needs 
                </ReadMoreAndLess>
              </p>
            </div>
          </div>
        </div>
        <div className="software_item col-lg-6">
          <div class="card bg-light">
            <img
              class="card-img-top"
              src="/Images/storeicon.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Store Management</h5>
              <p class="card-text">
                <ReadMoreAndLess
                  ref={ReadMore}
                  className="read-more-content"
                  charLimit={50}
                  readMoreText="Read More"
                  readLessText="Read Less"
                >
                  Retail Experts Store Management is a part of the Point of Sale
                  solutions from Retail Experts ,offering comprehensive,
                  flexible and resilient solutions to a variety of Retail
                  service establishments and convenience stores. Retail Experts
                  is a seamlessly integrated solution from POST TO HOST
                  driven-thru support, front office system to control the store,
                  back office systems to control inventory, Vendor management,
                  and all the way to the head office, providing central
                  management and decision control for the entire chain. Retail
                  Experts deploys state-of-the art open architecture, running
                  Windows 95/98/Windows NT with standard LAN, based on client
                  server models and object oriented technology (COM /ActiveX).
                  The data is managed through MS Access and MS-SQL, providing
                  integrity and flexibility. A wide range of standard peripheral
                  and external interfaces are supported through Retail Experts
                  interfaces. Extensive functionality, excellent performance,
                  flexibility and resilience are what make RETAIL EXPERT a
                  success story.
                </ReadMoreAndLess>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="software_item col-lg-6">
          <div class="card bg-light">
            <img
              class="card-img-top"
              src="/Images/warehouseicon.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title  ">Warehouse Management</h5>
              <p class="card-text">
                <ReadMoreAndLess
                  ref={ReadMore}
                  className="read-more-content"
                  charLimit={50}
                  readMoreText="Read More"
                  readLessText="Read Less"
                >
                  Warehouse Management System developed at Retail Experts has
                  evolved into one of the optimal business solutions which can
                  efficiently handles the high end warehouse processes.The
                  drastic change in the complex role of inventory management,
                  transportation management, order management and complete
                  accounting systems has been made easy and efficient. Goods
                  flow from the Warehouse to Stores. The store can also directly
                  be replenished from the supplier’s warehouse. Information will
                  also flow from the store to the warehouse and from warehouse
                  to central office. The entire system is linked to the
                  inventory management system used by the company. The automated
                  reordering levels from store-warehouse and warehouse-supplier
                  will be based on the inventory management system. The system
                  will have a provision to add divisional office (warehouse) and
                  depots (stores) under divisional office as and when the need
                  arises and there is no limit or restriction as such in the
                  software. Entities in the system are Central Office,
                  Divisional Office, Depots
                </ReadMoreAndLess>
              </p>
            </div>
          </div>
        </div>
        <div className="software_item col-lg-6">
          <div class="card bg-light">
            <img
              class="card-img-top"
              src="/Images/agencyicon.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Agency Management</h5>
              <p class="card-text">
                <ReadMoreAndLess
                  ref={ReadMore}
                  className="read-more-content"
                  charLimit={50}
                  readMoreText="Read More"
                  readLessText="Read Less"
                >
                  The main aspect of agency management system is to purchase
                  goods from the manufacturers and distribute these goods to
                  different segments of customer in the markets. The most
                  important aspects of the agency management system are to
                  maintain the inventory details and the customer information.
                  In order to handle this data effectively Retail Experts has
                  understood the need to develop the agency management system.
                  The application is flexible to adapt with different agency
                  organization that are categorized on the bases of market
                  needs.
                </ReadMoreAndLess>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="software_item col-lg-6">
          <div class="card bg-light">
            <img
              class="card-img-top"
              src="/Images/enterpriseicon.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Enterprise Housing</h5>
              <p class="card-text">
                <ReadMoreAndLess
                  ref={ReadMore}
                  className="read-more-content"
                  charLimit={50}
                  readMoreText="Read More"
                  readLessText="Read Less"
                >
                  Enterprise housing management system has been a comprehensive
                  application in the housing market, attracting large clients
                  such as ICRISAT.With the changing needs of the clients's
                  demand the application has been able to completely satisfy the
                  customer requirement. Enterprise Housing management is a front
                  office management system to support the transaction such as
                  allotment of room depending on the type of the room service ,
                  reservation,generating report and cash recipes. It is also
                  equipped with grouping the users according to company. The
                  modules are : Masters, Reservation, Reception, Cashier,
                  Information
                </ReadMoreAndLess>
              </p>
            </div>
          </div>
        </div>
        <div className="software_item col-lg-6">
          <div class="card bg-light">
            <img
              class="card-img-top"
              src="/Images/textileicon.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Textile Management</h5>
              <p class="card-text">
                <ReadMoreAndLess
                  ref={ReadMore}
                  className="read-more-content"
                  charLimit={50}
                  readMoreText="Read More"
                  readLessText="Read Less"
                >
                  The necessary information of the customer,stock information
                  and warehouse detail of a textile industry having different
                  branches has to be maintained in an organized manner in such a
                  way that it can be easily retrieved. The flow of goods and
                  services are to be monitored at intervals period . In such a
                  case the need for handling volumes of data in the textile
                  industry has become a critical and a major issue. Taking these
                  requirements of the client into consideration Retail Experts
                  has developed the Textile Management System. Designed Entities
                  are Warehouse, Retail Stores, Customers
                </ReadMoreAndLess>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
       
        <div className="software_item col-lg-6">
          <div class="card bg-light">
            <img
              class="card-img-top"
              src="/Images/jewelryicon.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Jewellery Management</h5>
              <p class="card-text">
                <ReadMoreAndLess
                  ref={ReadMore}
                  className="read-more-content"
                  charLimit={50}
                  readMoreText="Read More"
                  readLessText="Read Less"
                >
                  Jewellery Management System has been a proactive product in
                  leading the retail market. The main ascepts of this
                  application deals with centralizing the distributed data of
                  the jewellery store for monitoring product, sales, purchase
                  and stock in, stock out information Jewellery Management also
                  involves performing stock exchange between branches and
                  generating various reports. Designed Modules are Masters,
                  Sales, Stock Transfer, Reports, Pooling
                </ReadMoreAndLess>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Software;
