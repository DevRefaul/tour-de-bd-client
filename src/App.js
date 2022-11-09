import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
