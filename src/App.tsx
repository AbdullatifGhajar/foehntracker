import './App.css'

import { ChakraProvider } from '@chakra-ui/react';
import VoucherList from './components/VoucherList';
import Voucher from './models/Voucher';
import { useEffect, useState } from 'react';

function App() {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const response = await fetch('vouchers.json');
        const data = await response.json();
        setVouchers(data);
      } catch (error) {
        console.error('Error fetching vouchers:', error);
      }
    };

    fetchVouchers();
  }, []);

  return (
    <ChakraProvider>
      <VoucherList vouchers={vouchers} />
    </ChakraProvider>
  );
}

export default App
