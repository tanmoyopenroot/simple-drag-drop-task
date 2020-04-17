import * as React from 'react';
import { IoIosAdd } from 'react-icons/io';

import Button from '../../../components/Button';
import TextHeader from '../../../components/TextHeader';
import Input from '../../../components/Input';
import Dialog from '../../../components/Dialog';
import { GroupedRow } from '../../../common/styles';
import {
  InputWrapper,
} from './Task.styles';

interface IAddActionsProps {
  onCreate: (title: string) => void;
}

interface IAddActionState {
  body: string;
}

class AddTaskActions extends React.Component<IAddActionsProps, IAddActionState> {
  private dialogRef = React.createRef<HTMLDialogElement>();

  public state: IAddActionState = {
    body: '',
  };

  handleOnAddPanelClick = () => {
    if (this.dialogRef.current) {
      this.dialogRef.current.showModal();
    }
  }

  handleCloseDialog = () => {
    if (this.dialogRef.current) {
      this.dialogRef.current.close();
    }
  }

  handleOnCreate = () => {
    const { body } = this.state;
    const { onCreate } = this.props;

    if (body) {
      onCreate(body);
      this.handleCloseDialog();
    }
  }

  handleOnChange = (value: string) => {
    this.setState({ body: value });
  }

  public render() {
    const { body } = this.state;

    return (
      <React.Fragment>
        <Button onClick={this.handleOnAddPanelClick}>
          <React.Fragment>
            <IoIosAdd />
            Add Task
          </React.Fragment>
        </Button>
        <Dialog ref={this.dialogRef}>
          <React.Fragment>
            <TextHeader>
              Enter task Info
            </TextHeader>
            <InputWrapper>
              <Input
                autoFocus={true}
                defaultValue={body}
                placeholder="Add Task"
                onChange={this.handleOnChange}
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
      </React.Fragment>
    );
  }
}

export default React.memo(AddTaskActions);
