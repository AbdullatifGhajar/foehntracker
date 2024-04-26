import { SimpleGrid } from '@chakra-ui/react';
import VoucherListItem from './VoucherListItem';
import Voucher from '../models/Voucher';

interface VoucherListProps {
  vouchers: Voucher[];
}

const VoucherList: React.FC<VoucherListProps> = ({ vouchers }) => {
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
