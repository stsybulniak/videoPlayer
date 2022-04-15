import { FC, lazy, Suspense } from 'react';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Layout from './components/Layout/Layout';
import './index.scss';

const VideosPage = lazy(() => import('./pages/VideosPage/VideosPage'));
const UploadPage = lazy(() => import('./pages/UploadVideoPage/UploadVideoPage'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const RoutesComponent: FC<any> = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Header>
        <nav className='route-links'>
          <Link to='/'>Videos</Link>
          <Link to='/upload'>Upload</Link>
        </nav>
      </Header>
      <Layout>
        <Routes>
          <Route path='/' element={<VideosPage />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Suspense>
);

export default RoutesComponent;
