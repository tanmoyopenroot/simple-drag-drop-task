import * as React from 'react';
import { IoIosAdd } from 'react-icons/io';

import Button from '../../../components/Button';
import TextHeader from '../../../components/TextHeader';
import Input from '../../../components/Input';
import Dialog from '../../../components/Dialog';
import { GroupedRow } from '../../../common/styles';
import {
  AddTaskWrapper,
  InputWrapper,
} from './Task.styles';

interface IAddActionsProps {
  onCreate: (title: string) => void;
}

interface IAddActionState {
  body: string;
  dialogOpen: boolean;
}

class AddTaskActions extends React.Component<IAddActionsProps, IAddActionState> {
  public state: IAddActionState = {
    body: '',
    dialogOpen: false,
  };

  handleOnAddTaskClick = () => {
    this.setState({ dialogOpen: true });
  }

  handleCloseDialog = () => {
    this.setState({ dialogOpen: false });
  }

  handleOnCreate = () => {
    const { body } = this.state;
    const { onCreate } = this.props;

    if (body) {
      onCreate(body);
      this.handleCloseDialog();
      this.setState({ body: '' });
    }
  }

  handleOnChange = (value: string) => {
    this.setState({ body: value });
  }

  public render() {
    const {
      body,
      dialogOpen,
    } = this.state;

    return (
      <AddTaskWrapper>
        <Button onClick={this.handleOnAddTaskClick}>
          <React.Fragment>
            <IoIosAdd />
            Add Task
          </React.Fragment>
        </Button>
        <Dialog open={dialogOpen}>
          <React.Fragment>
            <TextHeader>
              Enter task Info
            </TextHeader>
            <InputWrapper>
              <Input
                autoFocus={true}
                defaultValue={body}
                placeholder="Add Task"
                onBlur={this.handleOnChange}
              />
            </InputWrapper>
            <GroupedRow justifyContent="space-evenly">
              <Button
                width="200px"
                onClick={this.handleCloseDialog}
              >
                Close Dialog
              </Button>
              <Button
                width="200px"
                onClick={this.handleOnCreate}
              >
                Create Task
              </Button>
            </GroupedRow>
          </React.Fragment>
        </Dialog>
      </AddTaskWrapper>
    );
  }
}

export default AddTaskActions;
