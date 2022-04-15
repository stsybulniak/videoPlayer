import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import './NotFound.scss'

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='NotFound'>
      <h1>Not found</h1>
      <Button onClick={() => navigate('/')}>Back home page</Button>
    </div>
  );
};

export default NotFound;
