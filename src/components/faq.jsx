export const Faq = (props) => {
  return (
    <div id="faq" className="text-center">
      <div className="container">
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div className="title-border">
                  <h3>{d.question}</h3>
                  <p>{d.answer}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
