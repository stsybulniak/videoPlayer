import { FC } from 'react';
import './ProgresBar.scss';
import cn from 'classnames';

interface IProgresBarProps {
  progres: number;
  className?: string;
}

const ProgresBar: FC<IProgresBarProps> = (props) => {
  const { progres, className } = props;
  return (
    <div className={cn('ProgresBar', className)}>
      <div className='ProgresBar--loaded' style={{ width: `${progres}%` }}></div>
    </div>
  );
};

export default ProgresBar;
