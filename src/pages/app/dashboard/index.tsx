import Button from "@mui/material/Button";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import { ThemeSwitch } from "@/components/ThemeSwitch/ThemeSwitch";

const DashboardPage = () => {
  return (
    <Fragment>
      <Helmet titleTemplate={`%s | ${import.meta.env.VITE_APP_NAME}`}>
        <title>Dashboard</title>
      </Helmet>

      <div className="container">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="space-y-2">
          {Array(3)
            .fill("")
            .map((_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                laboriosam in sed temporibus, esse enim repellendus numquam
                neque ipsum nesciunt nam cumque voluptatibus ea suscipit
                eligendi nostrum minima quas veniam nobis. Reprehenderit
                voluptatibus molestiae fuga veritatis doloribus non aliquam
                repudiandae minus molestias quaerat, nisi explicabo voluptates.
                Consectetur omnis beatae enim necessitatibus distinctio incidunt
                porro quaerat aliquid temporibus in quasi aut eum laboriosam
                excepturi eveniet sequi delectus, ipsa minima obcaecati adipisci
                dolores quam libero perspiciatis voluptatibus! Quaerat assumenda
                velit tenetur nesciunt provident ipsam distinctio consequatur
                aliquid harum dignissimos eligendi cum odit ipsa, vel corrupti
                recusandae ut commodi eos non? Fugiat qui numquam ipsa
                dignissimos aspernatur dolorem, quibusdam architecto tempore
                facere laudantium eaque consequatur eum mollitia exercitationem
                amet ea quia ullam aliquid non esse ipsum veritatis aliquam
                atque? Incidunt perspiciatis voluptates est dicta, quis et, eos
                quos perferendis similique a facere impedit ab fuga vitae
                aspernatur labore aliquam corrupti. Animi quisquam voluptates
                soluta adipisci quidem magnam corrupti, consequatur cupiditate
                qui maxime esse culpa fuga nisi impedit asperiores pariatur,
                facilis aliquid inventore maiores fugit neque! Blanditiis
                consequatur reiciendis eius commodi iure iusto corporis ab non
                qui! Repudiandae corrupti a, ducimus doloribus, pariatur tenetur
                sed quisquam unde mollitia praesentium reprehenderit explicabo
                et suscipit eius.
              </p>
            ))}
        </div>
        <ThemeSwitch />
      </div>
    </Fragment>
  );
};

export default DashboardPage;
