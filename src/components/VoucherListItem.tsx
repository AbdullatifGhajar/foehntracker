import { Box, Image, Text, VStack, Badge, Progress, Stack, HStack, Spacer } from '@chakra-ui/react';
import Voucher from '../models/Voucher';

interface VoucherListItemProps {
    voucher: Voucher;
}

const VoucherListItem: React.FC<VoucherListItemProps> = ({ voucher }) => {
    const usedValue = voucher.usedValue ? voucher.usedValue : 0;
    const usedPercentage = (usedValue / voucher.value) * 100;

    // Format the date into German date format DD.MM.YYYY
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' });
    };

    const imageUrl = voucher.imageUrl ? voucher.imageUrl : 'images/gt2023.png'; // Placeholder for default image
    const isExpired = new Date(voucher.expirationDate) < new Date();
    const imageFilter = isExpired ? 'grayscale(100%)' : 'none';

    const isNew = voucher.isNew;

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md" position="relative">
            {isNew && (
                <Badge colorScheme="green" position="absolute" top="1" right="1" zIndex="1" fontSize="lg">
                    NEU
                </Badge>
            )}
            <Image borderRadius="md" src={imageUrl} alt={`Image of ${voucher.title}`} style={{ filter: imageFilter }} />
            <VStack align="stretch" mt={4}>
                <Text fontWeight="bold" fontSize="lg">{voucher.title}</Text>
                <Text color="gray.600">{voucher.description}</Text>
                <Stack spacing={2}>
                    <Badge colorScheme={isExpired ? 'gray' : 'green'} p={1}>{`${usedValue} / ${voucher.value}`}</Badge>
                    <Progress colorScheme={isExpired ? 'gray' : 'green'} size="sm" value={usedPercentage} />
                </Stack>
                <HStack width="100%" mt={4}>
                    <Spacer />
                    <Text fontSize="sm" color={isExpired ? 'gray.500' : 'black'}>gültig bis {formatDate(voucher.expirationDate)}</Text>
                </HStack>
            </VStack>
        </Box>
    );
}

export default VoucherListItem;
