import { useAccess } from 'umi';
import { Button } from 'antd';

export type ButtonProps = {
  authCode?: string;
  type: number;
  onClick: () => void;
};

export default (props: ButtonProps) => {
  const access = useAccess();
  const { authCode, type, onClick } = props;
  if (authCode && !access.canReadFoo(authCode)) {
    return null;
  } else {
    if (type === 0) {
      return (
        <Button type="primary" onClick={onClick}>
          新建文章
        </Button>
      );
    } else {
      return <a onClick={onClick}>编辑</a>;
    }
  }
};
