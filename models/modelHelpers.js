const setApproval = (rating) => {
    try {
        if (rating === 0) {
            return 'bad';
        } else if (rating > 0 && rating <= 3) {
            return 'average';
        } else if (rating >= 4) {
            return 'good';
        }
    } catch (error) {
        console.log(error);
    }
};

const firstUpper = (rawValue) => { //returns string capitalised first letter of each word. Does this by splitting string into array delimited by spaces. 
    try {
        return rawValue.split(" ").map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(" ");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    setApproval,
    firstUpper
};