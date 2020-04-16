import styledComponents from 'styled-components';

import {
  IPrimaryTextProps,
  PrimaryText,
} from '../Layouts';

export interface ITextHeaderProps extends IPrimaryTextProps {}

export const TextHeader = styledComponents(PrimaryText)<ITextHeaderProps>`
  margin: 20px auto;
  font-weight: 600;
`;

export default TextHeader;
