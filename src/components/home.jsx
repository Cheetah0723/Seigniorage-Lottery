export const Home = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-5 intro-text">
                <img src="./img/icon.png" />
              </div>
              <div className="col-md-7 intro-text content-border">
                <h2>
                  {props.data ? props.data.title1 : "Loading"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph1 : "Loading"}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 intro-text content-border">
                <h2>
                  {props.data ? props.data.title2 : "Loading"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph2 : "Loading"}</p>
              </div>
              <div className="col-md-4 intro-text content-border">
                <h2>
                  {props.data ? props.data.title2 : "Loading"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph2 : "Loading"}</p>
              </div>
              <div className="col-md-4 intro-text content-border">
                <h2>
                  {props.data ? props.data.title2 : "Loading"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph2 : "Loading"}</p>
              </div>
            </div>
            <div className="content-border">
              <div className="intro-text center">
                <h2>
                  {props.data ? props.data.title3 : "Loading"}
                  <span></span>
                </h2>
              </div>
              <div className="intro-text">
                <p>{props.data ? props.data.paragraph3 : "Loading"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
