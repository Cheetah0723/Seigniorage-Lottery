export const EMPMoney = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>EMP Money</h2>
          <p>BSC</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-4">
                  <p>{d.title1}</p>
                  <p>{d.title2}</p>
                  <p>{d.title3}</p>
                </div>
              ))
            : "Loading..."}
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 content-border">
            <img src="./img/EMP_Logo.gif" className="emp" />
            <p>Your Wins: 38EMP</p>
            <p>Claim Your Win</p>
            <p>Buy a Ticket (-20 EMP)</p>
          </div>
          <div className="col-xs-12 col-md-6 content-border">
            <img src="./img/EMP_Logo.gif" className="emp" />
            <p>EMP Lottery (20)</p>
            <p>Buy a Ticket</p>
          </div>
        </div>
      </div>
    </div>
  );
};
