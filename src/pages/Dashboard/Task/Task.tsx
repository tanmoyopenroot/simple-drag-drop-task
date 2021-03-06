import * as React from 'react';

import Input from '../../../components/Input';
import TaskActions from './TaskActions';
import {
  TaskBody,
  TaskWrapper,
} from './Task.styles';

export interface ITaskProps {
  id: string;
  body?: string;
  onDrag: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChange: (body: string, id: string) => void;
  onDragStart: (event: React.MouseEvent<HTMLDivElement>, id: string) => void;
}

export interface ITaskState {
  isEditing: boolean;
}

export interface IDefaultProps {
  body?: string;
}

class Task extends React.Component<ITaskProps, ITaskState> {
  public static defaultProps: IDefaultProps = {
    body: '',
  };

  public state: ITaskState = {
    isEditing: false,
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

  public toggleEdit = () => {
    const { isEditing } = this.state;

    this.setState({
      isEditing: !isEditing,
    });
  }

  public handleOnBlur = (value: string) => {
    const {
      id,
      onChange,
    } = this.props;

    onChange(value, id);
    this.toggleEdit();
  }

  private handleDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    const {
      id,
      onDragStart,
    } = this.props;

    onDragStart(event, id);
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
    const {
      id,
      onDrag,
    } = this.props;

    return(
      <TaskWrapper
        id={id}
        draggable={true}
        onDragStart={this.handleDragStart}
        onDrag={onDrag}
      >
        {this.getInput()}
        <TaskActions onEditClick={this.toggleEdit} />
      </TaskWrapper>
    );
  }
}

export default Task;
