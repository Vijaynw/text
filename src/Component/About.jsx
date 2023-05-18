import React from "react";
import reactlogo from "../Component/pngwing.com.png";
import htmllogo from "../Component/html.png";
import scsslogo from "../Component/scss.png";
import bootstraplogo from "../Component/bootstrap.png";
import routerlogo from "../Component/react-router-mark-color.png";
import reduxlogo from "../Component/redux.png";
import sql from "../Component/sql.png";

const color = {
  color:"#146c94"
}

function About() {
  return (
    <>
      <div  id="top" className="about">
        <div className="container1">
          <p>
            Hi There ,
            <br /> <br /> Myself  <span style={color}>Vijay</span>  Hope your are doing well ❕ <br />I am a
            passionate web developer with over 1.9 years of  experience in{" "}
            <span style={color}>
              Web Development <span>Environment</span>{" "}
            </span>
            Along with having a good understanding of the development cycle for
            building a scalable application. <br />
          <a href="#skills" > 
            I am holding below skills <sup>🎯</sup>
          </a>
          <br />
            <br />
            Thanks, <br />
            Vijay.
          </p>

          {/* <button type="button" class="btn btn-primary">Primary</button> */}
          {/* <button>Explore</button> */}
        </div>
          {/* <a href="#top">
            <button>Top</button>

          </a> */}
<div className="exp" id="exp">
  
        <h1 className="accent-line">Work 🏢</h1>

        <div className="experience">
          <div className="two">
            <p>Implementation & Conversion Analyst - Front-end Developer <br /> <br /> Jan/2022  -  Present</p> 

          </div>
            <h5>|</h5>
            <h5>|</h5>
          <div className="one">
            <p> IT Trainee  <br /> <br /> Aug/2021 - Aug/2022</p>
          </div>
            

        </div>
    
</div>

        <div id="skills" className="skills ">
          <h1 className="accent-line"> Skills 🤹</h1>
          <div className="language">
            <p>Language :    <br />

            <img src={htmllogo} alt="" />
            </p>
          </div>

          <div className="framework">
            <p>
              Frameworks :    <br />
              <img src={reactlogo} alt="" />
            </p>
          </div>

          <div className="Libraries">
            <p>
              Libraries :   <br />
              <img src={scsslogo} alt="" />
              <img src={bootstraplogo} alt="" />
              <img src={reduxlogo} alt="" />
              <img src={routerlogo} alt="" />
            </p>
          </div>

          <div className="Databases">
            <p>
              Databases :  <br />
              <img src={sql} alt="" />
            </p>
          </div>

          <div className="Dev_Tools ">
            <p>
              Dev Tools : <br />
              <img src={reactlogo} alt="" />
              <img src={reactlogo} alt="" />
              <img src={reactlogo} alt="" />
              <img src={reactlogo} alt="" />
            </p>
          </div>
        <p>
          In progress :
        </p>
        </div>
        {/* <div id='para' className="para">

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error inventore accusantium exercitationem cumque est non veritatis animi. Odit neque dolorem modi quia nesciunt maxime eum assumenda recusandae voluptates. Cum eos accusantium incidunt omnis rerum iste assumenda excepturi eveniet facilis quas suscipit exercitationem, accusamus aliquam doloribus id laudantium amet commodi fugit sequi sed, labore illo deserunt ipsa enim? Voluptatibus eius officiis velit tenetur! Laboriosam dolore atque saepe molestiae debitis voluptas ex, reiciendis architecto corporis tempora quisquam quis odit expedita! Illum, quod labore voluptate consectetur quisquam ipsam ex ab est eum eos id? Ullam saepe quo labore recusandae omnis, unde quaerat impedit.</p>
        </div> */}
      </div>
    </>
  );
}

export default About;
