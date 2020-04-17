import * as React from 'react';
import { IoMdCreate } from 'react-icons/io';

import { TaskActionWrapper } from './Task.styles';

interface IItemActionsProps {
  onEditClick: () => void;
}

const ItemActions: React.FC<IItemActionsProps> = (props) => {
  const { onEditClick } = props;

  return (
    <TaskActionWrapper>
      <IoMdCreate onClick={onEditClick} />
    </TaskActionWrapper>
  );
};

export default React.memo(ItemActions);
