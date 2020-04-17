import * as React from 'react';

import Input from '../Input';
import TaskActions from './TaskActions';
import {
  TaskBody,
  TaskWrapper,
} from './Task.styles';

export interface ITaskProps {
  id: string;
  body?: string;
}

export interface ITaskState {
  isEditing: boolean;
}

class Task extends React.Component<ITaskProps, ITaskState> {
  public static defaultProps: Omit<ITaskProps, 'id'> = {
    body: 'Enter new task...',
  };

  public state: ITaskState = {
    isEditing: true,
  };

  public shouldComponentUpdate(nextProps: ITaskProps, nextState: ITaskState) {
    const {
      id,
      body,
    } = this.props;
    const { isEditing } = this.state;

    return id !== nextProps.id ||
      body !== nextProps.body ||
      isEditing !== nextState.isEditing;
  }

  private toggleEdit = () => {
    const { isEditing } = this.state;

    this.setState({
      isEditing: !isEditing,
    });
  }

  private handleOnBlur = (value: string) => {
    this.toggleEdit();
  }

  private getInput = () => {
    const { body } = this.props;
    const { isEditing } = this.state;

    return isEditing ? (
      <Input
        autoFocus={true}
        defaultValue={body}
        onBlur={this.handleOnBlur}
      />
    ) : (
      <TaskBody>
        {body}
      </TaskBody>
    );
  }

  render() {
    const { id } = this.props;

    return(
      <TaskWrapper id={id}>
        {this.getInput()}
        <TaskActions onEditClick={this.toggleEdit} />
      </TaskWrapper>
    );
  }
}

export default Task;
