import lande from 'lande';

// Assuming the input is the first command line argument after the script name
const input = process.argv[2];

// Validate the input
if (!input) {
    console.error('No input provided! Please provide an input argument when running this script.');
    process.exit(1);
}

// Use lande with the input
try {
    const result = lande(input);
    const firstTen = result.slice(0, 10); // Get the first 10 items
    console.log(firstTen);
} catch (error) {
    console.error(error);
}

