import React from "react";
import { Image, Grid } from "semantic-ui-react";
import Homepage from "../images/Homepage Header.svg";
import Designer from "../images/Designer1.svg";
import Developer from "../images/Developer1.svg";
import Woman from "../images/Woman1.svg";
import Mother from "../images/Mother1.svg";
import Footer from "./Footer";

const Home = () => (
  <>
    <Image src={Homepage} fluid />
    <Grid centered columns={2} style={{ marginTop: "75px", marginLeft: "100px" }}>
      <Grid.Column width={6}>
        <h1 className="design">I'm a designer</h1>
        <h3 className="description">
          I focus on clean and simple design that aid in user experience not
          distract from it. I love color.
        </h3>
      </Grid.Column>
      <Grid.Column width={5}>
        <Image src={Designer} />
      </Grid.Column>
    </Grid>
    <Grid centered columns={2} style={{ marginTop: "75px", marginLeft: "100px"  }}>
      <Grid.Column width={5}>
        <Image src={Developer} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h1 className="develop">I'm a developer</h1>
        <h3 className="description">
          I can bring the design from the page to your site utilizing latest
          technologies to run across various devices.
        </h3>
      </Grid.Column>
    </Grid>
    <Grid centered columns={2} style={{ marginTop: "75px", marginLeft: "100px"  }}>
      <Grid.Column width={6}>
        <h1 className="woman">I'm a woman</h1>
        <h3 className="description">
          I’m excited to join the ranks of women in tech and do my part to
          encourage and help women thrive in that world.
        </h3>
      </Grid.Column>
      <Grid.Column width={5}>
        <Image src={Woman} />
      </Grid.Column>
    </Grid>
    <Grid centered columns={2} style={{ marginTop: "75px", marginLeft: "100px", marginRight: "100px"  }}>
      <Grid.Column width={5}>
        <Image src={Mother} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h1 className="mother">I'm a mother</h1>
        <h3 className="description">
          I’m a mother to four and have gone from knowing less about computers
          than my two oldest sons to building websites. Now they think mom is
          pretty cool!
        </h3>
      </Grid.Column>
    </Grid>
    <Footer />
  </>
);

export default Home;
