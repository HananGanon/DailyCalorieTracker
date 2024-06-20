import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import FoodSearchPage from './components/pages/FoodSearchPage';
import FoodDetailsPage from './components/pages/FoodDetailsPage';
import FoodDiaryPage from './components/pages/FoodDiaryPage';
import SettingsPage from './components/pages/SettingsPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/food-search" element={<FoodSearchPage />} />
            <Route path="/food-details/:id" element={<FoodDetailsPage />} />
            <Route path="/food-diary" element={<FoodDiaryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
