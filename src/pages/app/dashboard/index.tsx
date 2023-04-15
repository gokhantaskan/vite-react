import Button from "@mui/material/Button";
import { Fragment, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Dialog from "@/components/Dialog/Dialog";
import { ThemeSwitch } from "@/components/ThemeSwitch/ThemeSwitch";

const DashboardPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Fragment>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <div className="container">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="space-y-2">
          {Array(1)
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
        <Button onClick={() => setDialogOpen(true)}>Dialog</Button>
        <Link to="/somewhere">Wrong Route Link</Link>
        <ThemeSwitch />
      </div>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={"Repudiandae corrupti a, ducimus doloribus, pariatur tenetur"}
        titleTag="h2"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum commodi
        vitae, quibusdam facere dolores qui dolore eius aliquid, minima earum
        nobis dolorem, consequuntur molestiae reprehenderit beatae? Dolorum
        consequatur ullam reprehenderit asperiores. Blanditiis expedita tempore
        doloribus qui? Fugiat quia ab est, aliquam, quidem laboriosam
        praesentium animi molestias provident nihil fugit. Sed tempora impedit
        doloribus eos perferendis dicta reprehenderit consectetur perspiciatis
        necessitatibus soluta dolore, nihil commodi magnam nam cumque quo iusto
        optio? Incidunt ipsum voluptatibus itaque soluta deleniti possimus
        facilis natus accusantium ducimus aperiam asperiores sunt totam
        doloremque eaque blanditiis vitae, quaerat suscipit sequi ipsa
        consequuntur velit. Qui animi optio nostrum debitis.
      </Dialog>
    </Fragment>
  );
};

export default DashboardPage;
