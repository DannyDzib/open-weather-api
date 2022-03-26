import { BrowserRouter, Route, Routes } from "react-router-dom"
import routes from "navigation/routes"
import { DataProvider } from "contextAPI/DataContext"
import { initialState } from "contextAPI/reducers"
import appReducers from "contextAPI/appReducers"

function App() {
  return (
    <DataProvider reducer={appReducers} initialState={initialState}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
