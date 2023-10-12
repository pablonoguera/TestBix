import { ReactNode } from 'react';
import * as S from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Layout;
