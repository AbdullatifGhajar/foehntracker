import { SimpleGrid } from '@chakra-ui/react';
import VoucherListItem from './VoucherListItem';
import Voucher from '../models/Voucher';
import { useState, useEffect } from 'react';

interface VoucherListProps {
}

const VoucherList: React.FC<VoucherListProps> = ({ }) => {
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

  if (vouchers.length === 0) {
    return <div>Lädt...</div>;
  }
  
  // Sort vouchers by expiration date in descending order (most recent first)
  const sortedVouchers = vouchers.sort((a, b) => new Date(b.expirationDate).getTime() - new Date(a.expirationDate).getTime());

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
      {sortedVouchers.map(voucher => (
        <VoucherListItem key={voucher.title} voucher={voucher} />
      ))}
    </SimpleGrid>
  );
}

export default VoucherList;
