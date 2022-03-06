import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container } from 'react-bootstrap';
import Title from "./Title";
import user1 from '../resources/images/review1.jpg';
import user2 from '../resources/images/review2.jpg';
import user3 from '../resources/images/review3.jpg';

const ClientFeedback = () => {
  return (
<>
    <Title title="Clients Feedback" />

    <div className="testimonial-slider">
      <Container>
        <div className="section-heading">
        </div>


        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={8000}
        >
          <div>
            <img src={user1} />
            <div className="myCarousel">
              <h3> </h3>
              <p>
                It was great at giving us the right advise and list of things needed to get takers and spike interest in our apartment.
              </p>
            </div>
          </div>

          <div>
            <img src={user3} />
            <div className="myCarousel">
              <h3> </h3>
              <p>
                The best websit I have ever dealt with. was more than helpful in finding us an apartment. Highly recommend.
              </p>
            </div>
          </div>

          <div>
            <img src={user2} />
            <div className="myCarousel">
              <h3> </h3>
              <p>
                Wonderful about showing homes th way you like. Couldn’t have asked for a better to help us find our home!!
              </p>
            </div>
          </div>
        </Carousel>


      </Container>
    </div>
    </>
  );
};

export default ClientFeedback;