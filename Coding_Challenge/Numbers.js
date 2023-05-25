/*
 * Ben Graham
 * 25 May 2023
 * Junior Code Reviewer
 * phone: 071 442 0883
 * email: grahamben7@gmail.com
 * 
 * This is the "Say the Number" code challenge.
 * Link: https://edabit.com/challenge/4E9gTrRWErpTCA2FQ
 * 
 * I choose to use javascript and node for this ocde challenge, as I am working with it in the full stack web developer bootcamp and
 * I hae a very solid understaning of the language and how to use node to run javascript outside of a browser.
 * 
 * This program will take a number without any separators and will return the number in words with punctuation.
 * The range of numbers is between 0 and 999,999,999 and will throw an error if the number exceeds 999,999,999.
 *
 * The value the user puts in the function will be checked to ensure that it is a number, and if not, it will throw an error, 
 * asking the user to provide a valid number.
 *
 * Each individual number will be taken and divided by the corresponding number (10, 100, 1000, etc.), and that number will be
 * used to find the index of the corresponding word in the corresponding array. In some arrays, the 0 index is an empty string,
 * so when a number such as 1500 is returned, it will be "one thousand five hundred".
 *
 * Commas were added in the large numbers to make the string of text more readable.
 *
 * The math operation used in each if and else-if block, which checks the length of the user's inputted number, will take the number 
 * and divide it by the corresponding number to find the single digit, which will represent the index within the corresponding array
 * to find the correct word for the number.
 *
 * For example, '21589' will be divided by 10000, which will return 2.1589. Math.floor() will be used to round down and acquire the
 * integer value '2', which will be used to find the index of the word 'twenty' in the tens array (tens[2]). The word 'thousand' will
 * be added when the string is returned. Numbers used to find the index end in 'Num' throughout the code.
 *
 * The first few else-if blocks that check the length of the user's inputted number will contain comments explaining the math,
 * which is then carried over into the remaining else-if blocks.
 */ 

//^ These arrays contain the text for the numbers which will be used throughtout the application
const single = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens =  ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens =  ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
const thousands = ['', 'one thousand', 'two thousand', 'three thousand', 'four thousand', 'five thousand', 'six thousand', 'seven thousand', 'eight thousand', 'nine thousand'];
const tenThousands = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const millions = ['', 'one million', 'two million', 'three million', 'four million', 'five million', 'six million', 'seven million', 'eight million', 'nine million'];

//^ The function sayNumber() will take the number you want to convert as a paramter and will return the number in words
function sayNumber(number){

    //^ This if statement will throw an error if the user inserted a value which is not a number.
    if(isNaN(number)){
        throw Error("Please enter an number")
    }

    //* The number is less then ten
    if(number < 10){
        return single[number] //^ Takes the user's number and will find the index in the corrosponding array to find the word for the number.
    }

    //* The number is less then twenty
    else if(number < 20){
        return teens[number - 10] //^ This takes the user's number and minuses 10 from it to find the index and will use it in the teens array to find the corrosponding word.
    }

    //* The number is less then one hundred
    else if (number < 100){
        const tensNum = Math.floor(number /10) //^ This equation prduces a decimal point number and floor is used to find the nearst number which represents the tens in the number.
        const singleNum = number % 10

        //^ If the number ends in a 0, it will not print the unit(single) number.
        if(singleNum === 0){
            return tens[tensNum] //^ Since the number does not end with a single unit only the value from the tens array is needed.
        }else {
            return tens[tensNum] + " " + single[singleNum] //^ If the number does not end in a zero it will include the unit number.
        }
    }
    
    //* Converting numbers less then a thousand 
    else if (number < 1000){
        //^ This will find the single number of the hundreds number and will use MATH.fllor() to get the lowest interger as it 
        //^ will produce as decemialc point number.
        const hundredsNum = Math.floor(number / 100) 

        //^ This will take th user's number divide by the single hundreds number which is then mutipled by 100 to find the ten number with the unit and then devided 
        //^ again to remove the unit and MATH.floor() method is used to remove the decemial point.
        const tensNum = Math.floor((number - ( hundredsNum * 100 )) / 10) 

        //^ This will find the unit by subtracting the hundred single number which is multiplied by 100 and will use the modules operator to 
        //^ find the remainder which will be the index used in the array to find the corrsponding word.
        const singleNum = ((number - (hundredsNum * 100)) % 10) 

        if(singleNum === 0){
            //^ The varibales in the else if block which end "Num" are the unit numbers which represent the actual number and is used to find the 
            //^ word of the  corrosponding name, within in the corrosponding array.
            return hundreds[hundredsNum] + " and " + tens[tensNum]
        } 
        
        if(singleNum !== 0) {
            //^ The varibales in the else if block which end "Num" are the unit numbers which represent the actual number and is used to find the 
            //^ word of the  corrosponding name, within in the corrosponding array.
            return hundreds[hundredsNum] + " and " + tens[tensNum] + " " + single[singleNum]
        }
    }
   
    //* Converting numbers less then a ten thousand 
    else if (number < 10000){
        const thousnadsNum = Math.floor(number / 1000)
        const hundredsNum = Math.floor((number - (thousnadsNum * 1000))  / 100)
        const tensNum = Math.floor(( number - thousnadsNum * 1000 - (hundredsNum * 100) - (number - (hundredsNum * 100)) % 10) /10)
        const singleNum = (number - (hundredsNum * 100)) % 10  

        if(singleNum === 0){
            //^ The varibales in the else-if block which end "Num" are the unit numbers which represent the actual number and is used to find the 
            //^ word of the  corrosponding name, within in the corrosponding array.
            return thousands[thousnadsNum] + " " + hundreds[hundredsNum] + " and " + tens[tensNum]
        } 
        
        if(singleNum !== 0) {
            //^ The varibales in the else if block which end "Num" are the unit numbers which represent the actual number and is used to find the 
            //^ word of the  corrosponding name, within in the corrosponding array.
            return thousands[thousnadsNum] + " " + hundreds[hundredsNum] + " and " + tens[tensNum] + " " + single[singleNum]
        }
    }
   
    //* Converting numbers less then a one hundred thousand 
    else if (number < 100000){
        const tenThousandsNum = Math.floor(number / 10000)
        const thousnadsNum = Math.floor((number / 1000) % 10)
        const hundredsNum = Math.floor(((number - (thousnadsNum * 1000))  / 100) % 10)
        const tensNum = Math.floor((( number - thousnadsNum * 1000 - (hundredsNum * 100) - (number - (hundredsNum * 100)) % 10) /10) % 10)
        const singleNum = (number - (hundredsNum * 100)) % 10
        

        //^ The varibales in the else if block which end "Num" are the unit numbers which represent the actual number and is used to find the 
        //^ word of the  corrosponding name, within in the corrosponding array.
        if(singleNum === 0 && hundredsNum === 0){
            //^ The tens array is used as the word 'thousand' is not need at the begining of the string
            return tens[tenThousandsNum] + " " + thousands[thousnadsNum] + "" + hundreds[hundredsNum] + "" + tens[tensNum]
        } 
       
        if(singleNum === 0){
            //^ The tens array is used as the word 'thousand' is not need at the begining of the string
            return tens[tenThousandsNum] + ", " + thousands[thousnadsNum] + " " + hundreds[hundredsNum] + " and " + tens[tensNum]
        } 

        if(tenThousandsNum === 0){
            //^ If the number which represents is 0, it will return this string which will leave out the word which represents tenThousand.
            //^ The tens array is used as the word 'thousand' is not need at the begining of the string
            return tens[tenThousandsNum] + ", " + thousands[thousnadsNum] + " " + hundreds[hundredsNum] + " and " + tens[tensNum]

        }
        
        if(singleNum !== 0) {
            //^ The tens array is used as the word 'thousand' is not need at the begining of the string
            return tens[tenThousandsNum] + ", " + thousands[thousnadsNum] + " " + hundreds[hundredsNum] + " and " + tens[tensNum] + " " + single[singleNum]

        }
    }
   
    //* Converting numbers less then a one million 
    else if (number < 1000000){
        const hundredThousandsNum = Math.floor(number / 100000) //^ Divides by 1000000 to get the sigle unit which represents the hundred thousand number and MATH.floor() is used to remove the decimal points.
        const tenThousandsNum = Math.floor( (number / 10000) % 10)
        const thousnadsNum = Math.floor((number / 1000) % 10)
        const hundredsNum = Math.floor(((number - (thousnadsNum * 1000))  / 100) % 10)
        const tensNum = Math.floor((( number - thousnadsNum * 1000 - (hundredsNum * 100) - (number - (hundredsNum * 100)) % 10) /10) % 10)
        const singleNum = (number - (hundredsNum * 100)) % 10 

        if(singleNum === 0 &&  hundredsNum === 0 ){
            //^ This will ensure that the word 'zero' is not printed out but rather a blank string for the values which equal zero and any unnecessary 'and''s and commas.
            return hundreds[hundredThousandsNum] + " and " + tenThousands[tenThousandsNum] + " " + thousands[thousnadsNum] + "" + hundreds[hundredsNum] + "" + tens[tensNum]
        } 
        if(singleNum === 0){
            return hundreds[hundredThousandsNum] + " and " + tenThousands[tenThousandsNum] + " " + thousands[thousnadsNum] + "thousand, " + hundreds[hundredsNum] + " and " + tens[tensNum]
        } 
        
        if(tenThousandsNum === 0){
            return hundreds[hundredThousandsNum] + " and "+ tens[tenThousandsNum] + " " + thousands[thousnadsNum] + "thousand, " + hundreds[hundredsNum] + " and " + tens[tensNum] + " " + single[singleNum]
        }
        
        if(singleNum !== 0) {
            return hundreds[hundredThousandsNum] + " and " +tens[tenThousandsNum] + " " + thousands[thousnadsNum] + ", " + hundreds[hundredsNum] + " and " + tens[tensNum] + " " + single[singleNum]
        }
    }

    //* Converting numbers less then ten million 
    else if (number < 10000000){

        const millionsNum = Math.floor(number / 1000000)
        const hundredThousandsNum = Math.floor((number / 100000) % 10)
        const tenThousandsNum = Math.floor( (number / 10000) % 10)
        const thousnadsNum = Math.floor((number / 1000) % 10)
        const hundredsNum = Math.floor(((number - (thousnadsNum * 1000))  / 100) % 10)
        const tensNum = Math.floor((( number - thousnadsNum * 1000 - (hundredsNum * 100) - (number - (hundredsNum * 100)) % 10) /10) % 10)
        const singleNum = (number - (hundredsNum * 100)) % 10  

        if(singleNum === 0){
            return millions[millionsNum] + ", " + hundreds[hundredThousandsNum] + " and " + tenThousands[tenThousandsNum] + " " + thousands[thousnadsNum] + "1thousand, " + hundreds[hundredsNum] + " and " + tens[tensNum]
        } 

        if(tenThousandsNum === 0){
            return millions[millionsNum] + ", " + hundreds[hundredThousandsNum] + " and "+ tens[tenThousandsNum] + " " + thousands[thousnadsNum] + "2thousand, " + hundreds[hundredsNum] + " and " + tens[tensNum] + " " + single[singleNum]
        }
        
        if(singleNum !== 0) {
            return millions[millionsNum] + ", " + hundreds[hundredThousandsNum] + " and " +tens[tenThousandsNum] + " " + thousands[thousnadsNum] + ", " + hundreds[hundredsNum] + " and " + tens[tensNum] + " " + single[singleNum]
        }
    }
   
   
    //* Converting numbers less then 100 million 
    else if (number < 100000000){

        const tenMillionsNum = Math.floor(number / 10000000)
        const millionsNum = Math.floor((number / 1000000) % 10)
        const hundredThousandsNum = Math.floor((number / 100000) % 10)
        const tenThousandsNum = Math.floor( (number / 10000) % 10)
        const thousnadsNum = Math.floor((number / 1000) % 10)
        const hundredsNum = Math.floor(((number - (thousnadsNum * 1000))  / 100) % 10)
        const tensNum = Math.floor((( number - thousnadsNum * 1000 - (hundredsNum * 100) - (number - (hundredsNum * 100)) % 10) /10) % 10)
        const singleNum = (number - (hundredsNum * 100)) % 10  

        if(singleNum === 0){
            return tens[tenMillionsNum] + " " +millions[millionsNum] + ", " + hundreds[hundredThousandsNum] + " and " + tenThousands[tenThousandsNum] + " " + thousands[thousnadsNum] + ", " + hundreds[hundredsNum] + " and " + tens[tensNum]
        } 

        if(tenThousandsNum === 0){
            return tens[tenMillionsNum] + " " +millions[millionsNum] + ", " + hundreds[hundredThousandsNum] + " and "+ tens[tenThousandsNum] + " " + thousands[thousnadsNum] + ", " + hundreds[hundredsNum] + " and " + tens[tensNum] + " " + single[singleNum]
        }
        
        if(singleNum !== 0) {
            return tens[tenMillionsNum] + " " + millions[millionsNum] + ", " + hundreds[hundredThousandsNum] + " and " +tens[tenThousandsNum] + " " + thousands[thousnadsNum] + ", " + hundreds[hundredsNum] + " and " + tens[tensNum] + " " + single[singleNum]
        }
    }
   
    //* Converting numbers less then 1 Billion 
    else if (number < 1000000000){

        const hundredMillionsNum = Math.floor(number / 100000000)
        const tenMillionsNum = Math.floor((number / 10000000) % 10)
        const millionsNum = Math.floor((number / 1000000) % 10)
        const hundredThousandsNum = Math.floor((number / 100000) % 10)
        const tenThousandsNum = Math.floor( (number / 10000) % 10)
        const thousnadsNum = Math.floor((number / 1000) % 10)
        const hundredsNum = Math.floor(((number - (thousnadsNum * 1000))  / 100) % 10)
        const tensNum = Math.floor((( number - thousnadsNum * 1000 - (hundredsNum * 100) - (number - (hundredsNum * 100)) % 10) /10) % 10)
        const singleNum = (number - (hundredsNum * 100)) % 10 

        if(singleNum === 0){
            return hundreds[hundredMillionsNum] + " and " + tens[tenMillionsNum] + " " +millions[millionsNum] + ", " + hundreds[hundredThousandsNum] + " and " + tenThousands[tenThousandsNum] + " " + thousands[thousnadsNum] + " " + hundreds[hundredsNum] + " and " + tens[tensNum]
        } 

        if(tenThousandsNum === 0){
            return hundreds[hundredMillionsNum] + " and " + tens[tenMillionsNum] + " " +millions[millionsNum] + ", " + hundreds[hundredThousandsNum] + " and "+ tens[tenThousandsNum] + " " + thousands[thousnadsNum] + ", " + hundreds[hundredsNum] + " and " + tens[tensNum] + " " + single[singleNum]
        }
        
        if(singleNum !== 0) {
            return hundreds[hundredMillionsNum] + " and " + tens[tenMillionsNum] + " " + millions[millionsNum] + ", " + hundreds[hundredThousandsNum] + " and " +tens[tenThousandsNum] + " " + thousands[thousnadsNum] + ", " + hundreds[hundredsNum] + " and " + tens[tensNum] + " " + single[singleNum]
        }
    }

    else {
        return `<${number}> exceeds nine hunder million nine hundred and ninty nine`
    }
}

//^ The function must be palced in a console.log() as it only returns a string of the number in words.
console.log(sayNumber("15700043"))

//^ The function isimported in the number.test.js folder.
module.exports = sayNumber
