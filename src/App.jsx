import React from "react";
import ExercisesOne from "./pages/ExercisesOne";
import ExercisesTwo from "./pages/ExercisesTwo";
import ExercisesThree from "./pages/ExercisesThree";
import ExercisesFour from "./pages/ExercisesFour";
import ExercisesFive from "./pages/ExercisesFive";
import ExercisesSix from "./pages/ExercisesSix";
import ExercisesSeven from "./pages/ExercisesSeven";
import ExercisesEight from "./pages/ExercisesEight";
import ExercisesNine from "./pages/ExercisesNine";
import { RouterProvider, createBrowserRouter } from "react-router-dom/dist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExercisesOne />,
  },
  {
    path: "/two",
    element: <ExercisesTwo />,
  },
  {
    path: "/three",
    element: <ExercisesThree />,
  },
  {
    path: "/four",
    element: <ExercisesFour />,
  },
  {
    path: "/five",
    element: <ExercisesFive />,
  },
  {
    path: "/six",
    element: <ExercisesSix />,
  },
  {
    path: "/seven",
    element: <ExercisesSeven />,
  },
  {
    path: "/eight",
    element: <ExercisesEight />,
  },
  {
    path: "/nine",
    element: <ExercisesNine />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
