export const EMPMoney = (props) => {
  return (
    <div id="empmoney" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <div className="title-border">
            <h2>EMP Money</h2>
          </div>
          <h3>BSC</h3>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-4">
                  <div className="title-border">
                    <p>{d.title1}</p>
                    <p>{d.title2}</p>
                    <p>{d.title3}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="content-border">
              <img src="./img/EMP_Logo.gif" className="emp" alt="emp" />
              <p>Your Wins: 38EMP</p>
              <p>Claim Your Win</p>
              <p>Buy a Ticket (-20 EMP)</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="content-border">
              <img src="./img/EMP_Logo.gif" className="emp" alt="emp" />
              <p>EMP Lottery (20)</p>
              <p>Buy a Ticket</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
