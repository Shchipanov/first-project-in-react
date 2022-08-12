import React from "react";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import AdvantageCard from "/src/components/ui/advantage-card/advantage-card";
import "./style.css";

function AdvantagesList({ advantages }) {
  return (
    <section className="advantage-list">
      {advantages?.length ? (
        <>
          <Title>Наши звёзды</Title>
          <ul className="advantage-list__list">
            {advantages.map((advantage) => (
              <li className="star-list__item" key={advantage.id}>
                <AdvantageCard {...advantage} />
              </li>
            ))}
          </ul>
          <Button minWidth={353}>Купить билет</Button>
        </>
      ) : null}
    </section>
  );
}

export default AdvantagesList;
