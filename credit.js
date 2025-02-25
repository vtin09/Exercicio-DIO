function getCardBrand(cardNumber) {
    const cardPatterns = {
        'Visa': /^4\d{12}(\d{3})?(\d{3})?$/,
        'MasterCard': /^(5[1-5]\d{14}|2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/,
        'American Express': /^3[47]\d{13}$/,
        'Discover': /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/,
        'Diners Club': /^(36\d{12}|38\d{12}|30[0-5]\d{11}|3095\d{10})$/,
        'JCB': /^(352[89]\d{12}|35[3-8]\d{13})$/,
        'Elo': /^(401178|401179|431274|438935|451416|457393|457631|457632|504175|506699|5067[0-7]\d{2}|509\d{3}|627780|636297|636368|6500[3-5]\d{2}|6504[0-3]\d{2}|6504[8-9]\d{2}|6505[4-9]\d{2}|6507[0-1]\d{2}|6507[2-7]\d{2}|6509[0-2]\d{2}|6516[5-7]\d{2}|6550[0-1]\d{2}|6550[2-5]\d{2})\d{10}$/,
        'Hipercard': /^(38\d{11,17}|60\d{11,17}|65\d{11,17})$/
    };

    for (const brand in cardPatterns) {
        if (cardPatterns[brand].test(cardNumber)) {
            return brand;
        }
    }

    return 'Unknown';
}

// Example usage:
const cardNumber = '6062 8208 1440 4953';
const cardBrand = getCardBrand(cardNumber);
console.log(`The card brand is: ${cardBrand}`);