import React, { Component } from "react";
import { GiMoneyStack,GiFamilyHouse } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import Title from "./Title";



export default class Services extends Component {
  state = {
    services: [
      {
        icon: <GiMoneyStack />,
        title: "Save Money ",
        info: `You don't have to spend all your money on accomodation.
        Find someone and share the cost together.`
      },
      {
        icon: <IoIosPeople />,
        title: "New People",
        info:
          ` We let you meet with people you will absolutely love since you get to select the personality traits of potential roommates`
      },
      {
        icon: <GiFamilyHouse />,
        title: "Luxury Apartments",
        info:
          `You & your friends can combine your money to rent well built & furnished apartments.`
      }
    ]
  };
  render() {
    return (
      <section className="services bg-light">
        <Title title="Why FindMe Home !" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
