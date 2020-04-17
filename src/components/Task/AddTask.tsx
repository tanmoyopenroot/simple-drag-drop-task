import * as React from 'react';
import { IoIosAdd } from 'react-icons/io';

import Button from '../Button';
import { AddTaskWrapper } from './Task.styles';

interface IAddActionsProps {
  onAddClick: () => void;
}

const AddTaskActions: React.FC<IAddActionsProps> = (props) => {
  const { onAddClick } = props;

  return (
    <AddTaskWrapper>
      <Button action={onAddClick}>
        <React.Fragment>
          <IoIosAdd />
          Add Task
        </React.Fragment>
      </Button>
    </AddTaskWrapper>
  );
};

export default React.memo(AddTaskActions);
