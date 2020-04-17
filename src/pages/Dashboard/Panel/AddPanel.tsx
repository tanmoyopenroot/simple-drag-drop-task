import * as React from 'react';
import { IoIosAdd } from 'react-icons/io';

import Button from '../../../components/Button';
import TextHeader from '../../../components/TextHeader';
import Input from '../../../components/Input';
import Dialog from '../../../components/Dialog';
import { GroupedRow } from '../../../common/styles';
import { InputWrapper } from './Panel.styles';

interface IAddActionsProps {
  onCreate: (title: string) => void;
}

interface IAddActionState {
  title: string;
}

class AddPanelActions extends React.Component<IAddActionsProps, IAddActionState> {
  private dialogRef = React.createRef<HTMLDialogElement>();

  public state: IAddActionState = {
    title: '',
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
    const { title } = this.state;
    const { onCreate } = this.props;

    if (title) {
      onCreate(title);
      this.handleCloseDialog();
    }
  }

  handleOnChange = (value: string) => {
    this.setState({ title: value });
  }

  public render() {
    const { title } = this.state;

    return (
      <React.Fragment>
        <Button onClick={this.handleOnAddPanelClick}>
          <React.Fragment>
            <IoIosAdd />
            Add Panel
          </React.Fragment>
        </Button>
        <Dialog ref={this.dialogRef}>
          <React.Fragment>
            <TextHeader>
              Enter Panel Title
            </TextHeader>
            <InputWrapper>
              <Input
                autoFocus={true}
                defaultValue={title}
                placeholder="Panel Title"
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
                Create Panel
              </Button>
            </GroupedRow>
          </React.Fragment>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default React.memo(AddPanelActions);
