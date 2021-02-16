import react from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer" className="footer" bg="light" variant="light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img id="brand_footer" src="logo.png"></img>

            <p>
              <br></br>
              H.No:3-6-640/1, 1st Floor, Beside St.Anthony High School, Street
              No 9, Himayath Nagar, Hyderabad.
            </p>
          </div>
          <div className="col-md-2">
            <ul>
              <p className="font-weight-bold">Links</p>
              <hr />

              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 Contacts">
            <p className="font-weight-bold text-center">Contacts</p>
            <hr />
            <ul>
            <div className="row">
            <div className="col">
            <li>
              <p className="text-primary" >Managing Director</p>
              <p>Surya Sanjay Kumar</p>
              <p><span className="text-muted">Email  </span><a href="mailto:sanjay@retailexperts.in">sanjay@retailexperts.in</a></p>
              <p><span className="text-muted">Cell  </span>+91-9347030881</p>
            </li>
            <li>
            <p className="text-primary" >CEO</p>
              <p>Dinesh Barla</p>
              <p><span className="text-muted">Email  </span><a href="mailto:dinesh@retailexperts.in">dinesh@retailexperts.in</a></p>
              <p><span className="text-muted">Cell  </span>+91-9347030885</p>
            </li>
            <li>
            <p className="text-primary" >COO</p>
              <p>Praveen Kumar</p>
              <p><span className="text-muted">Email  </span><a href="mailto:praveen@retailexperts.in">praveen@retailexperts.in</a></p>
              <p><span className="text-muted">Cell  </span>+91-9347030889 </p>
            </li>
            </div>
            <div className="col second_col">
            <li>
            <p className="text-primary" >Sr. Marketing Manager</p>
              <p>Amit Kulkarni </p>
              <p><span className="text-muted">Email  </span><a href="mailto:amit@retailexperts.in">amit@retailexperts.in</a></p>
              <p><span className="text-muted">Cell  </span>+91-9347030883</p>
            </li>
            <li>
            <p className="text-primary" >Manager</p>
              <p>Pramod Tangod </p>
              <p><span className="text-muted">Email  </span><a href="mailto:tangodpramod@gmail.com">tangodpramod@gmail.com</a></p>
              <p><span className="text-muted">Cell  </span>+91-9390027545 </p>
            </li>
            </div>
            </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
