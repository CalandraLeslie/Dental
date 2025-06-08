export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isEmpty = (value: string): boolean => {
    return !value.trim().length;
};

export const getCurrentDate = (): string => {
    const date = new Date();
    return date.toISOString().split('T')[0];
};