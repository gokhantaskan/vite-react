import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

function SettingsPage() {
  return (
    <Fragment>
      <Helmet>
        <title>Settings</title>
      </Helmet>

      <div className="container">
        <h1>Settings</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dicta. Dignissimos ab optio
          cumque dolorem atque consequuntur ratione quibusdam rem!
        </p>
      </div>
    </Fragment>
  );
}

export default SettingsPage;
