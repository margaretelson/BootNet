import React from "react";
import { Container } from "react-bootstrap";

const linkedin = ({ LinkedinCompanyProfile }) => {
  return (
    <Container>
      <div>
        <LinkedinCompanyProfile
          lang="en_US"
          companyId={76820747}
          format="inline" // Or "hover"
          text="BootNetwork" // text to show in "hover" format
        />
      </div>
    </Container>
  );
};
export default linkedin;
