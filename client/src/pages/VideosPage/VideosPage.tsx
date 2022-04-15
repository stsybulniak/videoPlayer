import axios, { AxiosResponse } from 'axios';
import { FC, useEffect, useState } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import VideosList from '../../components/VideosList/VideosList';

export interface IFile {
  _id: string;
  fileName: string;
  originName: string;
  size: number;
  mimeType: string;
  thumbnail: string;
}

const VideosPage: FC = () => {
  const [files, setFiles] = useState<IFile[]>([]);

  useEffect(() => {
    axios.get('api/videos').then(({ data }: AxiosResponse<{list: IFile[]}>) => {
      setFiles(data.list);
    })
  }, []);

  return <ErrorBoundary><VideosList files={files} /></ErrorBoundary>;
};

export default VideosPage;
