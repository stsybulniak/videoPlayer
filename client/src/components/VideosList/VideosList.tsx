import { FC } from 'react';
import ReactPlayer from 'react-player';
import { IFile } from '../../pages/VideosPage/VideosPage';
import './VideosList.scss';

interface IVideosListProps {
  files: IFile[];
}

const VideosList: FC<IVideosListProps> = (props) => {
  const { files } = props;
  return (
    <div className='VideosList'>
      {files.map((file) => {
        return (
          <div key={file._id} className='VideosList__item'>
            <ReactPlayer
              light={`/api/static/${file.thumbnail}`}
              width='100%'
              height='100%'
              url={`/api/videos/${file._id}`}
              controls
              pip={false}
              playing
            />
          </div>
        );
      })}
    </div>
  );
};

export default VideosList;
