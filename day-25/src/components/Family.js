import React from "react";
import { Card, Button } from "react-bootstrap";

function Family() {
  return (
    <div className="Family">
      <h1>Always and Forever</h1>
      <div className="Container">
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img
            variant="top"
            src="https://media0.giphy.com/media/lu54Ptk4R3LkQ/giphy.gif"
          />
          <Card.Body>
            <Card.Title>Niklaus Mikaelson</Card.Title>
            <Card.Text>
              Niklaus Mikaelson is the Original Werewolf-Vampire Hybrid. He is the most poweful one 💪.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/4e/a5/e7/4ea5e7efb05977a5c9fb94f3ccdaae37.gif"
          />
          <Card.Body>
            <Card.Title>Elijah Mikaelson</Card.Title>
            <Card.Text>
              Elijah Mikaelson is an Original Vampire.He is the third eldest
              child to Esther and Mikael.The Nobel One 🔥.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img
            variant="top"
            src="http://media.tumblr.com/tumblr_m5j7s4YwkU1rnuzwy.gif"
          />
          <Card.Body>
            <Card.Title>Rebekah Mikaelson</Card.Title>
            <Card.Text>
              Rebekah Mikaelson is an original vampire. She is the younger
              sister of Freya Mikaelson.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img
            variant="top"
            src="https://media3.giphy.com/media/CCLwZhyLDXsZi/giphy.gif"
          />
          <Card.Body>
            <Card.Title>Kol Mikaelson</Card.Title>
            <Card.Text>
              Kol Mikaelson is youngest Original Vampire. He is the husband of
              Davina Claire-Mikaelson .
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img
            variant="top"
            src="https://thumbs.gfycat.com/FoolishCanineIbis-size_restricted.gif"
          />
          <Card.Body>
            <Card.Title>Finn Mikaelson</Card.Title>
            <Card.Text>
              Finn Mikaelson is an Original Vampire. He is the husband of Sage
              Mikaelson. He is the oldest son and second child .
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Family;
