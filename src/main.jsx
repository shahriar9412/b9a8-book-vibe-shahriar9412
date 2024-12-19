import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Root from './components/Root';
import Home from './components/Home';
import ListedBooks from './components/ListedBooks';
import BookDetails from './components/BookDetails';
import ReadBooks from './components/ReadBooks';
import WishBooks from './components/WishBooks';
import PagesToRead from './components/PagesToRead';
import AllSummary from './components/AllSummary';
import NextBooks from './components/NextBooks';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: 'read',
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('/Books.json')
          },
          {
            path: 'wish',
            element: <WishBooks></WishBooks>,
            loader: () => fetch('/Books.json')
          }
        ]
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/Books.json')
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('/Books.json')
      },
      {
        path: '/reviews',
        element: <AllSummary></AllSummary>,
        loader: () => fetch('/Books.json')
      },
      {
        path: '/coming',
        element: <NextBooks></NextBooks>,
        loader: () => fetch('/Next.json')
      } 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
