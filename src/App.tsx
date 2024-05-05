import './App.css'

import { ChakraProvider } from '@chakra-ui/react';
import VoucherList from './components/VoucherList';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Router basename="/foehntracker">
        <Routes>
          <Route path="/" element={<VoucherList />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App
