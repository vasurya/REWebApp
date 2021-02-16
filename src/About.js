import react from "react";
import "./About.css";

function About() {
  return (
    <div className="about_page container">
      <h1 id="about_page_title">About Us</h1>
      <div className="row">
        <div className="col-md-6">
          <p>
            Retail Experts Software Private Limited is located in the heart of
            Hyderabad ,India, major thrust areas are POS Solutions, Software
            Development, on Site Services and Web based Technologies. Since its
            inception, the company has been executing prestigious Government and
            Corporate projects of domestic. <br />
            <br />
            We as a team are mix a of experienced and young talented people
            expertized in delivering high end business solutions. What we have
            in common is our commitment to quality service and our common goal
            is customer satisfaction. We have clear cause for confidence, double
            digit growth, a steady stream of major clientele and attractiveness
            to outstanding people with exceptional skills. We will continue to
            demonstrate the courage for bold and dramatic changes to ensure
            Retail Experts as the envy of the consulting market!. It is
            essential that our work environment challenges. Our skill,
            strengthens our business knowledge, allowsnowledge, promote
            camaraderie and fun. We believe in the power of one team, to operate
            with one voice and one operating philosophy to make an impact in the
            market we serve.
          </p>
        </div>
        <div className="col-md-6 bg-light">
          <h2 className="vision">Vision</h2>
          <ul className="vision_list">
            <li>To be a leader in the market we choose to compete.</li>
            <li>
              To be regarded with unqualified respect in terms of our skills
              attitude & teamwork.
            </li>
            <li>
              To develop a culture which fosters new ideas and a spirit of
              enterprise.
            </li>
            <li>
              We are convinced that success is built upon a simple set of rules.
            </li>
            <li>
              Place people's trust above everything including our own interest..
            </li>
            <li>Never promise what we cannot deliver.</li>
            <li>
              Keep honesty first - we believe in forging long lasting
              relationships.
            </li>
            <li>
              We as a team are committed to the success of every individual who
              interacts with our company - your success is our success!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
