import * as React from 'react';
import styledComponents from 'styled-components';

import {
  IPrimaryTextProps,
  PrimaryText,
} from '../Layouts';

export interface ITextHeaderProps extends IPrimaryTextProps {}

const TextHeader = styledComponents(PrimaryText)<ITextHeaderProps>`
  font-size: ${props => props.theme.FONT.LARGE};
  margin: 20px auto;
  font-weight: 600;
`;

export default React.memo(TextHeader);
