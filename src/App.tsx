import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import PaintingPage from './pages/paintings/PaintingPage';
import SculpturePage from './pages/sculptures/SculpturePage';
import ArchitecturePage from './pages/architectures/ArchitecturePage';
import MusicPage from './pages/musics/MusicPage';
import LiteraturePage from './pages/literatures/LiteraturePage';
import FilmPage from './pages/films/FilmPage';
import PerformingArtPage from './pages/perfoming-arts/PerformingArtPage';
import PhotographyPage from './pages/photographys/PhotographyPage';
import TattooPage from './pages/tattoos/TattooPage';
import DigitalArtPage from './pages/digital-arts/DigitalArtPage';
import PaintingDetail from './pages/paintings/PaintingDetail';
import SculptureDetail from './pages/sculptures/SculptureDetail';
import ArchitectureDetail from './pages/architectures/ArchitectureDetail';
import MusicDetail from './pages/musics/MusicDetail';
import LiteratureDetail from './pages/literatures/LiteratureDetail';
import FilmDetail from './pages/films/FilmDetail';
import PerformingArtDetail from './pages/perfoming-arts/PerformingArtDetail';
import PhotographyDetail from './pages/photographys/PhotographyDetail';
import TattooDetail from './pages/tattoos/TattooDetail';
import DigitalArtDetail from './pages/digital-arts/DigitalArtDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sculptures",
    element: <SculpturePage />,
  },
  {
    path: "/sculptures/:productId",
    element: <SculptureDetail />,
  },
  {
    path: "/architectures",
    element: <ArchitecturePage />,
  },
  {
    path: "/architectures/:productId",
    element: <ArchitectureDetail />,
  },
  {
    path: "/musics",
    element: <MusicPage />,
  },
  {
    path: "/musics/:productId",
    element: <MusicDetail />,
  },
  {
    path: "/literatures",
    element: <LiteraturePage />,
  },
  {
    path: "/literatures/:productId",
    element: <LiteratureDetail />,
  },
  {
    path: "/films",
    element: <FilmPage />,
  },
  {
    path: "/films/:productId",
    element: <FilmDetail />,
  },
  {
    path: "/performing-arts",
    element: <PerformingArtPage />,
  },
  {
    path: "/performing-arts/:productId",
    element: <PerformingArtDetail />,
  },
  {
    path: "/photographys",
    element: <PhotographyPage />,
  },
  {
    path: "/photographys/:productId",
    element: <PhotographyDetail />,
  },
  {
    path: "/tattoos",
    element: <TattooPage />,
  },
  {
    path: "/tattoos/:productId",
    element: <TattooDetail />,
  },
  {
    path: "/digital-arts",
    element: <DigitalArtPage />,
  },
  {
    path: "/digital-arts/:productId",
    element: <DigitalArtDetail />,
  },
  {
    path: "/paintings",
    element: <PaintingPage />,
  },
  {
    path: "/paintings/:productId",
    element: <PaintingDetail />,
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
