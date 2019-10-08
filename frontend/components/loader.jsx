import React from "react";
import { css } from "@emotion/core";
import { PropagateLoader, BarLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  position: absolute;
`;

export default ({ id }) => {
  // debugger
  return (
    <div id={id}>
      <div className={"loaderheight"}>
        {/* <BarLoader
          css={override}
          sizeUnit={"%"}
          heightUnit={"%"}
          widthUnit={"%"}
          width={25}
          height={100}
          color={"#21ce99"}
        /> */}
        <PropagateLoader
          size='30'
          color={"#21ce99"}
        />
      </div>
    </div>
  );
};
