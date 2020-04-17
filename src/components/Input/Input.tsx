import * as React from 'react';

import { InputElement } from './Input.styles';

enum InputType {
  TEXT = 'text',
}

enum KEYS {
  ENTER = 'Enter',
}

export interface IInputProps {
  autoFocus?: boolean;
  defaultValue?: string;
  type?: InputType;
  placeholder?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
}

export interface IInputState {
  query: string;
}

class Input extends React.PureComponent<IInputProps, IInputState> {
  public static Type = InputType;
  public static defaultProps: Partial<IInputProps> = {
    autoFocus: false,
    defaultValue: '',
    placeholder: '',
    type: InputType.TEXT,
  };

  public readonly state: IInputState = {
    query: '',
  };

  public componentDidMount() {
    const { defaultValue } = this.props;

    if (defaultValue) {
      this.setState({ query: defaultValue });
    }
  }

  private handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { query } = this.state;
    const {
      onChange,
      onBlur,
    } = this.props;

    if (e.key === KEYS.ENTER && onChange) {
      onChange(query);
    }

    if (e.key === KEYS.ENTER && onBlur) {
      onBlur(query);
    }
  }

  private handleChange = (e: React.FormEvent<HTMLElement>) => {
    const query = (e.target as HTMLInputElement).value;
    const { onChange } = this.props;

    this.setState({ query });
    if (onChange) {
      onChange(query);
    }
  }

  private handleBlur = (e: React.FormEvent<HTMLElement>) => {
    const query = (e.target as HTMLInputElement).value;
    const { onBlur } = this.props;

    this.setState({ query });
    if (onBlur) {
      onBlur(query);
    }
  }

  render() {
    const { query } = this.state;
    const {
      autoFocus,
      type,
      placeholder,
    } = this.props;

    return(
      <InputElement
        autoFocus={autoFocus}
        type={type}
        value={query}
        placeholder={placeholder}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

export default Input;
