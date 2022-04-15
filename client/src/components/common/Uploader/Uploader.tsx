import axios from 'axios';
import { FC, SyntheticEvent, useRef, useState } from 'react';
import Button from '../Button/Button';
import ProgresBar from './ProgresBar/ProgresBar';
import cn from 'classnames';
import './Uploader.scss';

const Uploader: FC = () => {
  const [progress, setProgress] = useState(0);

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput?.current?.click?.();
  };
  const handleChange = async (e: SyntheticEvent<HTMLInputElement>) => {
    const fileUploaded = (e.target as HTMLInputElement)?.files?.[0];
    if (!fileUploaded) {
      return;
    }

    const formData = new FormData();
    formData.append('file', fileUploaded);
    await axios.post('/api/videos/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (data) => {
        setProgress(Math.round((100 * data.loaded) / data.total));
      },
    });
    setProgress(0);
  };
  return (
    <div className='Uploader'>
      <Button className={cn({'Button--disabled': progress > 0})} large onClick={handleClick}>
        Upload a file
      </Button>
      <div className='Uploader__progress'>{progress > 0 && <ProgresBar progres={progress} />}</div>
      <input type='file' accept='video/*' ref={hiddenFileInput} onChange={handleChange} style={{ display: 'none' }} />
    </div>
  );
};

export default Uploader;
