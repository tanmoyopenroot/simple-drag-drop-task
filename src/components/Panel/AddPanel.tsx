import * as React from 'react';
import { IoIosAdd } from 'react-icons/io';

import Button from '../Button';
import { AddPanelWrapper } from './AddPanel.styles';

interface IAddActionsProps {
  onAddClick: () => void;
}

const ItemActions: React.FC<IAddActionsProps> = (props) => {
  const { onAddClick } = props;

  return (
    <AddPanelWrapper>
      <Button action={onAddClick}>
        <React.Fragment>
          <IoIosAdd />
          Add Panel
        </React.Fragment>
      </Button>
    </AddPanelWrapper>
  );
};

export default React.memo(ItemActions);
