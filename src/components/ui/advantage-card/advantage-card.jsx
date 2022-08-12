import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import StarIcon from "/src/components/ui/advantage-icon/advantage-icon";
import "./style.css";

function AdventageCard({
  name, // имя кота
  about, // информация о коте
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image // url c фото кота
}) {
  return (
    <article className="star-card">
      <figure className="star-card__figure">
        <img
          src={image}
          className="star-card__image"
          width={313}
          height={320}
          alt="изображение кота"
        />
        <StarIcon className="star-card__icon" feature={feature} />
      </figure>
      <Title size={TitleSize.SMALL}>{name}</Title>
      <p
        className="star-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </article>
  );
}

export default AdventageCard;
