import React from "react";
import Panel from "/src/components/ui/panel/panel";
import Title, { TitleSize } from "/src/components/ui/title/title";

import { StyledOrder, LeftColumn } from "./styles";

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
      </LeftColumn>
    </StyledOrder>
  );
}

export default Order;
