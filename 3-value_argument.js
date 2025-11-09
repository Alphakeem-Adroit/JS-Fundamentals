const args = process.argv - 2;

if (args <1) {
    console.log("No argument");
} else {
    console.log(process.argv[2]);
};