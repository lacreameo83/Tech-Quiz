import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { HomePage ,OutLetPage,DashBoardHomePage} from "./pages";
import DashBoardChooseQuiz from "./components/dashboard/DashBoardChooseQuiz";
import Login from "../src/components/authentication/Login";
import Register from "./components/authentication/Register";
import QuizQuestionDisplay from "./components/dashboard/QuizQuestionDisplay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <OutLetPage />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <DashBoardHomePage />,
    children:[{
      index:true,
      element:<DashBoardChooseQuiz />
    },{
      path:'questiondisplay',
      element:<QuizQuestionDisplay />
    }
  ]
  },
]);

function App() {
  

  return (
   
    <RouterProvider router={router} />
  )
}

export default App
