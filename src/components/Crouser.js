import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Crouser = () => {
  const Landingpagevariants = [
    {
      title: "App Landing",
      text: "You can use this page to Promote your web andmobile application.",
      img: "./Assets/images/App.jpg",
    },
    {
      title: "Company Landing",
      text: "You can use this to company Landing",
      img: "./Assets/images/company.jpg",
    },
    {
      title: "Fullpage Scrolling",
      text: "A landing page created through fullpage scrolling section",
      img: "./Assets/images/cop.jpg",
    },
    {
      title: "Product Page",
      text: "You can use this page to promote your product or store",
      img: "./Assets/images/product.avif",
    },
    {
      title: "Real estate landing",
      text: "You can use this page to promote your real estate.",
      img: "./Assets/images/cop.jpg",
    },
    {
      title: "Restaurant Page",
      text: "You can use this page to promote Restaurant",
      img: "./Assets/images/restaurant.jpg",
    },
    {
      title: "Service Landing",
      text: "You can use this page to promote your product Services",
      img: "./Assets/images/service.jpg",
    },
  ];

  const Headervariants = [
    {
      title: "Carousel Header",
      text: "Switch between Multiple slides with full cover background image.",
      img: "./Assets/images/carousel.avif",
    },
    {
      title: "Parallax Header",
      text: "Good old paerallax effect to add even more vision control",
      img: "./Assets/images/parallax.avif",
    },
    {
      title: "Video Header",
      text: "Local video paragraph can opitionally loaded if necessory",
      img: "./Assets/images/video.jpg",
    },
  ];

  return (
    <>


    <div
    id="carouselExampleDark"
    className="carousel carousel-dark slide"
    data-bs-ride="carousel"
    data-bs-interval="3000" // Set autoplay interval to 3000ms (3 seconds)
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner text-center" style={{color:'white'}}>
      <div className="carousel-item active text-center" data-bs-interval={3000} style={{color:'white'}}>
        <img src="./Assets/images/nact3.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block" style={{color:'white'}}>
        <p className="card-text" style={{ marginTop: "20vh" }}>
        BY SIMPLEQODE
      </p>
      <h5 className="card-title p-4">Landing pages for any occasion</h5>
      <p className="card-text">
        Incline is set of landing and support pages aimed at helping
        companies promote <br /> new products and business launches.
      </p>
      <div class="d-grid gap-2 col-2 mx-auto p-4">
        <button
          class="btn"
          type="button"
          style={{ border: "2px solid white", color: "orange" }}
        >
          Purchase Now
        </button>
      </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval={2000}>
        <img src="./Assets/images/nact2.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block" style={{color:'white'}}>
          <p className="card-text" style={{ marginTop: "20vh" }}>
          {" "}
          BY SIMPLEQODE
        </p>
        <h5 className="card-title p-4">Landing pages for any occasion</h5>
        <p className="card-text">
          Incline is set of landing and support pages aimed at helping
          companies promote <br /> new products and business launches.
        </p>
        <div className="d-grid gap-2 col-12 col-md-2 mx-auto p-4 text-center">
  <button
    className="btn px-4 py-2 mx-auto d-block"
    type="button"
    style={{ border: "2px solid white", color: "orange", fontSize: "1rem" }}
  >
    Purchase Now
  </button>
</div>

      
        </div>
      </div>
      <div className="carousel-item">
        <img src="./Assets/images/nact1.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block" style={{color:'white'}}>
        <p className="card-text" style={{ marginTop: "20vh" }}>
        {" "}
        BY SIMPLEQODE
      </p>
      <h5 className="card-title p-4">Landing pages for any occasion</h5>
      <p className="card-text">
        Incline is set of landing and support pages aimed at helping
        companies promote <br /> new products and business launches.
      </p>
      <div class="d-grid gap-2 col-2 mx-auto p-4">
        <button
          class="btn"
          type="button"
          style={{ border: "2px solid white", color: "orange" }}
        >
          Purchase Now
        </button>
      </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  

  {/* Landing page */}
      <div className="card text-center " style={{ border: "none" }}>
        <div className="card-body p-5 ">
          <h4 className="card-title">Landing page variants</h4>
          <br />
          <p className="card-text">
            Incline comes with several professionally designed landing pages
            that <br /> can be easily adapted for any project.
          </p>
        </div>

        <div
          className="d-flex flex-wrap"
          data-aos="fade-up"
          data-aos-duration="9000"
        >
          {Landingpagevariants.map((card, index) => (
            <div
              className="card m-4"
              key={index}
              style={{ width: "26rem", border: "none" }}
            >
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      
     {/* {header Varient} */}
      <div
        className="card text-center "
        style={{ border: "none", backgroundColor: "rgb(230,233,236)" }}
      >
        <div className="card-body p-5">
          <h4 className="card-title">Header variants</h4>
          <br />
          <p className="card-text">
            Polish your landing page with one of the header options below to{" "}
            <br />
            impress your visitors at first glance.
          </p>
        </div>

        <div
          className="d-flex flex-wrap"
          data-aos="fade-up"
          data-aos-duration="9000"
        >
          {Headervariants.map((card, index) => (
            <div
              className="card m-4"
              key={index}
              style={{
                width: "26rem",
                border: "none",
                backgroundColor: "rgb(230,233,236)",
              }}
            >
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    {/* msg */}
      <div className="card" style={{ border: "none" }}>
        <div className="card-body p-5 text-center">
          <h5 className="card-title">
            <h1 style={{ fontSize: "50px" }}>"</h1>
            This theme is a Swiss Army knife of Bootstrap themes. Built with
            components in mind, it can be easily <br />
            adjusted to create layouts of any complexity within a few minutes.
          </h5>
          <p className="card-text">Yuri Gamin, Moscow</p>
        </div>
      </div>


      {/* Key theme features */}
      <div
        className="card p-5"
        style={{ border: "none", backgroundColor: "rgb(52,58,64)" }}
      >
        <div
          className="card"
          style={{
            border: "none",
            backgroundColor: "rgb(52,58,64",
            color: "white",
          }}
        >
          <div className="card-body p-5 text-center">
            <p className="card-title">
              <h4>Key theme features</h4>
              Incline can be used to create anything from a small marketing page
              to a sophisticated website.
            </p>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card" style={{ border: "none" }}>
              <div
                className="card-body"
                style={{
                  backgroundColor: "rgb(52,58,64)",
                  color: "white",
                  border: "none",
                }}
              >
              <div style={{height:"5vh", width:"5vw", alignItems: 'center'}}>
               <img src='./Assets/images/responsive.png' className="card-img-top" alt=''/>
               </div>
               <br />
               <br />
                <h5 className="card-title">Fully responsive</h5>
                <p className="card-text">
                  Looks great on all major browsers, tablets and mobile devices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card" style={{ border: "none" }}>
              <div
                className="card-body"
                style={{
                  backgroundColor: "rgb(52,58,64)",
                  color: "white",
                  border: "none",
                }}
              >
              <div style={{height:"5vh", width:"5vw", alignItems: 'center'}}>
               <img src='./Assets/images/sass.png' className="card-img-top" alt=''/>
               </div>
               <br />
               <br />
                <h5 className="card-title">Built with SASS</h5>
                <p className="card-text">
                Easily adjustable with tons of SASS variables included.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card" style={{ border: "none" }}>
              <div
                className="card-body"
                style={{
                  backgroundColor: "rgb(52,58,64)",
                  color: "white",
                  border: "none",
                }}
              >
              <div style={{height:"5vh", width:"5vw", alignItems: 'center'}}>
               <img src='./Assets/images/support.png' className="card-img-top" alt=''/>
               </div>
               <br />
               <br />
                <h5 className="card-title">Free support</h5>
                <p className="card-text">
                Feel free to contact us with any feature requests or bug reports.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>





      {/* pricing option */}
      <div className="card text-center" style={{ border: "none" }}>
        <div className="card-body">
          <h3 className="card-title">Pricing options</h3>
          <br />
          <p className="card-text">
            Secure payment via Stripe or Paypal. 100% money back guarantee.
          </p>
          <br />
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="card p-3 ">
                <div className="card-body">
                  <h5 className="card-title">Standard license</h5>
                  <h5 className="card-title">$49.00</h5>
                  <br />
                  <div style={{ textAlign: "justify" }}>
                    <p className="card-text">  Use for a single product</p>
                    <p className="card-text">  Non-paying users only</p>
                    <p className="card-text">Read <a>full description</a>  </p>
                  </div>
                  <br />
                  <button
                    href="https://themes.getbootstrap.com/product/incline-landing-page-set/"
                    className="btn"
                    style={{ border: "2px orange solid" }}
                  >
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card p-3 ">
                <div className="card-body">
                  <h5 className="card-title">Standard license</h5>
                  <h5 className="card-title">$490.00</h5>
                  <br />
                  <div style={{ textAlign: "justify" }}>
                    <p className="card-text">  Use for a single product</p>
                    <p className="card-text">  paying users only</p>
                    <p className="card-text">
                      {" "}
                      Read <a>full description</a>
                    </p>
                  </div>
                  <br />
                  <button
                    href="#"
                    className="btn"
                    style={{ border: "2px orange solid" }}
                  >
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* marketplace */}
      <div className="row p-5" style={{border:'none', backgroundColor:'rgb(248,249,250)'}}>
  <div className="col-9 p-5" >
    <div className="card" style={{border:'none', backgroundColor:'rgb(248,249,250)'}}>
      <div className="card-body">
        <h5 className="card-title">Download it from the Bootstrap marketplace</h5>
        <p className="card-text">
        Each theme featured at the Bootstrap marketplace has been reviewed by Bootstrap's creators. Six month technical support by the theme author is provided.
        </p>
      </div>
    </div>
  </div>
  <div className="col-3 p-5">
    <div className="card" style={{border:'none', backgroundColor:'rgb(248,249,250)'}}>
      <div className="card-body">
      <button  href="#"  className="btn"  style={{ border: "2px orange solid" }}>  Purchase Now </button>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Crouser;
