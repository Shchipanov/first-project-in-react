import React from "react";
import Panel from "/src/components/ui/panel/panel";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import {
  StyledOrder,
  LeftColumn,
  AddressInput,
  PriceLabel,
  PriceValue
} from "./styles";

function Order() {
  return (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Выберите продукты
          </Title>
          Здесь будет Чекбокс со списком продуктов
        </Panel>
        <Panel>
          <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>
            Сделать заказ
          </Title>
          <AddressInput placeholder="Введите адрес доставки" />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue>400</PriceValue>
          <Button maxWidth>Купить</Button>
        </Panel>
      </LeftColumn>
      <div>Сюда нужно добавить слайдер с продуктами</div>
    </StyledOrder>
  );
}

export default Order;
