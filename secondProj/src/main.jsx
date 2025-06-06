import './index.css'
import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import MyNav from './nav'
import Example from './profile'
import ShowImage from './showImage'
// import Room from './room'
import MyForm from './MyForm'
import MyUseEffect from './myUseEffect'
import MyUseRef from './myUseRef'
// import AddPosts from './posts/addPosts'
import { createBrowserRouter, RouterProvider } from 'react-router'
import BootstrapNav from './bootstrapNav'
import AppLayout from './AppLayout'
// import PageNotFound from './PageNotFound'
import LoadingPage  from './LoadingPage'
import ContextProvider, { GlobalContext } from './contextAPI/context'


export default function App() {
  return (

    <>
    {/* <MyNav ></MyNav> */}
    {/* <BootstrapNav></BootstrapNav> */}

    
    <ShowImage></ShowImage>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>


    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
        Price
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">$</div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="currency"
              name="currency"
              aria-label="Currency"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     // loader: 
//   },
//   // {
//   //   path: '/',
//   //   element: <div>fsdfsdfsds</div>
//   // },
//   {
//     path: '/room',
//     element: <Room/>
//   },
//   {
//     path: '/myform',
//     element: <MyForm/>
//   },
//   {
//     path: '/post',
//     element: <AddPosts/>
//   },
//   // {
//   //   path: '/post',
//   //   Component: AddPosts
//   // },
// ])

const PageNotFound = lazy(()=> import('./PageNotFound'))
const Rooms = lazy(()=> import('./room'))
const Posts = lazy(()=> import('./posts/addPosts'))
const Apps = lazy(()=> import('./main'))







const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children:[
      {
        index: true,
        Component: Apps
      },
      {
        path:"/room",
        Component: Rooms
      },
      {
        path:"/room/:id",
        Component: Rooms
      },
      {
        path: "/post",
        Component: Posts
      },
      {
        path: "/loadingPage",
        Component: LoadingPage
      },
      {
        path: "*",
        Component: PageNotFound
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <App />
    <Example /> */}

      <ContextProvider>
        <RouterProvider router={router}></RouterProvider>

      </ContextProvider>



  


    {/* <AddPosts></AddPosts> */}


    {/* <MyForm ></MyForm> */}
    {/* <MyUseEffect></MyUseEffect>
    <MyUseRef></MyUseRef> */}

  </StrictMode>,
)
