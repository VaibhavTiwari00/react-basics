const Shimmer = () => {
  return (
    <>
      <div className="shimmer-effect-parent">
        {Array(10)
          .fill("")
          .map((e, index) => {
            return (
              <div className="shimmer-effect" key={index}>
                <div className="shine photo"></div>
                <br />
                <div className="lines shine"></div>
                <div className="lines shine"></div>
                <div className="lines shine"></div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;
