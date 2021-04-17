import React from "react";
import "./TeamSection.css";
import teamData from "./TeamData";

const TeamSection = () => {
  return (
    <section className='team-section'>
      <div className='team-section-title'>
        <h1>
          Meet our <span>Team</span>
        </h1>
        <p className='text-gray'>
          All our technicians are fully <span>qualified</span> and <span>licensed</span>. Moreover, they <br /> are incredibly <span>skillful</span> and <span>proficient</span> in various aspects of
          computer repair.
        </p>
      </div>

      <div className='member-cards-container'>
        {teamData.map((data) => (
          <Card key={data.image} data={data} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ data }) => {
  const { name, jobTitle, image } = data;
  return (
    <div className='member-card'>
      <div className='member-card-image'>
        <img src={image} alt='' />
      </div>
      <div className='member-info'>
        <h1>{name}</h1>
        <p>{jobTitle}</p>
      </div>
    </div>
  );
};

export default TeamSection;
