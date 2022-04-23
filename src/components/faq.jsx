export const Faq = (props) => {
  return (
    <div id="faq" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <div className="title-border">
            <h2>PEG LOTTERY</h2>
          </div>
          <h3>BSC</h3>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <img src={d.emp} className="emp"></img>
                  <div className="content-border">
                    <h3>{d.title}</h3>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
