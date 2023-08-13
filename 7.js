function generateOTP() {
    const otpLength = 4;
    let otp = '';

    for (let i = 0; i < otpLength; i++) {
        otp += Math.floor(Math.random() * 10); // Generates a random digit (0-9)
    }

    return otp;
}

const randomOTP = generateOTP();
console.log(`Generated OTP: ${randomOTP}`);
