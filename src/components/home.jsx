export const Home = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-5 intro-text center">
                <img src="./img/icon.png" className="img-border" alt="tent" />
              </div>
              <div className="col-md-7 intro-text">
                <div className="content-border">
                  <h2>{props.data ? props.data.title1 : "Loading"}</h2>
                  <p>{props.data ? props.data.paragraph1.line1 : "Loading"}</p>
                  <p>{props.data ? props.data.paragraph1.line2 : "Loading"}</p>
                  <p>{props.data ? props.data.paragraph1.line3 : "Loading"}</p>
                  <p>{props.data ? props.data.paragraph1.line4 : "Loading"}</p>
                </div>
              </div>
            </div>
            <div className="row">
              {props.data
                ? props.data.content.map((d, i) => (
                    <div
                      key={`${d.title}-${i}`}
                      className="col-md-4 intro-text"
                    >
                      <div className="content-border center">
                        <h2>{props.data ? d.title : "Loading"}</h2>
                        <p>{props.data ? d.paragraph.line1 : "Loading"}</p>
                        <p>{props.data ? d.paragraph.line2 : "Loading"}</p>
                        <p>{props.data ? d.paragraph.line3 : "Loading"}</p>
                        <p>{props.data ? d.paragraph.line4 : "Loading"}</p>
                      </div>
                    </div>
                  ))
                : "Loading..."}
            </div>
            <div className="content-border">
              <div className="intro-text center">
                <h2>{props.data ? props.data.title3 : "Loading"}</h2>
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
