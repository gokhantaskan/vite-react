import { Fragment, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import Button from "@/components/shared/Button/Button";
import Dialog from "@/components/shared/Dialog/Dialog";
import { ThemeSwitch } from "@/components/shared/ThemeSwitch/ThemeSwitch";

function DashboardPage() {
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laboriosam in sed
                temporibus, esse enim repellendus numquam neque ipsum nesciunt nam cumque
                voluptatibus ea suscipit eligendi nostrum minima quas veniam nobis. Reprehenderit
                voluptatibus molestiae fuga veritatis doloribus non aliquam repudiandae minus
                molestias quaerat, nisi explicabo voluptates. Consectetur omnis beatae enim
                necessitatibus distinctio incidunt porro quaerat aliquid temporibus in quasi aut eum
                laboriosam excepturi eveniet sequi delectus, ipsa minima obcaecati adipisci dolores
                quam libero perspiciatis voluptatibus! Quaerat assumenda velit tenetur nesciunt
                provident ipsam distinctio consequatur aliquid harum dignissimos eligendi cum odit
                ipsa, vel corrupti recusandae ut commodi eos non?
              </p>
            ))}
        </div>
        <div className="space-x-2">
          <Button
            variant="contained"
            color="neutral"
            onClick={() => setDialogOpen(true)}
          >
            Dialog
          </Button>
          <Button
            variant="outlined"
            onClick={() => toast.success(`${new Date().getTime()}`)}
          >
            Toast
          </Button>
          <Link to="/somewhere">Wrong Route Link</Link>
          <ThemeSwitch />
        </div>
      </div>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={"Repudiandae corrupti a, ducimus doloribus, pariatur tenetur"}
        titleTag="h2"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum commodi vitae, quibusdam
        facere dolores qui dolore eius aliquid, minima earum nobis dolorem, consequuntur molestiae
        reprehenderit beatae? Dolorum consequatur ullam reprehenderit asperiores. Blanditiis
        expedita tempore doloribus qui? Fugiat quia ab est, aliquam, quidem laboriosam praesentium
        animi molestias provident nihil fugit. Sed tempora impedit doloribus eos perferendis dicta
        reprehenderit consectetur perspiciatis necessitatibus soluta dolore, nihil commodi magnam
        nam cumque quo iusto optio? Incidunt ipsum voluptatibus itaque soluta deleniti possimus
        facilis natus accusantium ducimus aperiam asperiores sunt totam doloremque eaque blanditiis
        vitae, quaerat suscipit sequi ipsa consequuntur velit. Qui animi optio nostrum debitis.
      </Dialog>
    </Fragment>
  );
}

export default DashboardPage;
