interface Voucher {
    title: string;
    description: string;
    imageUrl?: string;
    value: number;
    usedValue?: number;
    expirationDate: string;
    isNew?: boolean;
}

export default Voucher;
