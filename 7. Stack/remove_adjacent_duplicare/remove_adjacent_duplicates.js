/**
 * @param {string} s
 * @return {string}
 */

// Using 2 pointers along with inbuilt splice function
var removeDuplicates = function(s) {
    if(s.length < 1) return s;
    // Start index is at 0
    let start = 0;
    // End index is at start + 1
    let end = 1;
    // Strings are immutable. Also splice works on arrays in javascript. Hence converting string to array.
    let strArr = s.split('');
    while(strArr[end]){
        // console.log(`start: ${start}`);
        // Moving end pointer to an index above repeated characters
        while(strArr[start] === strArr[end]){
            end++;
        }
        // console.log(`end: ${end}`);
        // If there was repetition of characters
        if(end>start+1) {
            let spliceLength = end - start
            // Splicing the repeated portion of string in multiples of 2
            strArr.splice(start, spliceLength - (spliceLength % 2) );
            // console.log(`strArr: ${strArr}`);
            // After splicing, start will automatically point to the value of end pointer before splicing But end will point to a mugh higher value (since some chars were removed due to the splice)
            end  = start;
            // Making sure start is pointing to one char less than the current value. To check if the value in the index of the array before the spliced chars matches the char starting in the index after the spliced set of chars
            start = start - 1;
        }else{
            // Simply incrementing start and end if there was no repetition of chars 
            start++;
            end++;
        }
        
    }   
    return strArr.join('');
}

// Using 2 pointers but without splice function
var removeDuplicates = function(s) {
    if(s.length < 1) return s;
    let start = 0;
    let end = 1;
    // Initializing an output array to push the values from the string that are not repeated
    let outArr = [];
    // Strings are immutable. Hence converting string to array.
    let strArr = s.split('');
    while(strArr[start]){
        // Moving end pointer to an index above repeated characters
        while(strArr[start] === strArr[end]){
            end++;
        }
        // Getting the length of the repeated set of chars
        let removeLength = end - start;
        // If repetition is found
        if(end>start+1) {
            // We should know that, after removal of repeated chars, the starting pointer should point to the value in the string that is remnant from the removal of repeated chars in mulitples of 2 + an additional index before to check if that char before the removed set of chars does not match the char occurring after the removed set of chars.  
            start = (outArr.length > 0)?(end - 1 - (removeLength % 2)):(end - (removeLength % 2));
            // Moving the value occurring in the index before the removed set of chars to the starting pointer index. The prev value is obtained from the outArr as we pushed that before recognizing the repeated chars 
            if(outArr.length > 0) strArr[end-1-(removeLength%2)] = outArr.pop();
            // End index will always point to one above start index
            end = start + 1;
        }else{
            // If repetition is not found, we just push the char to an outer arr
            outArr.push(strArr[start]);
            start++;
            end++;
        }
//         console.log(`strArr: ${strArr.slice(start)}`);
//         console.log(`outArr: ${outArr}`);        
    }   
    return outArr.join('');
}


// Based on approach suggested by Leetcode - Just like the game - tetris - elegant! - USing a stack
var removeDuplicates = function(s) {
    // Imagine the game - Tetris
    // Incoming values from each index in the string are pushed into a stack one-by-one. While pushing, if we notice that the incoming value from the string matches the last pushed value in the stack, we remove that value from the stack (pop it) and discard the incoming index as well. This makes sure that adjacent repeating chars are discarded as and when they come.
    let stack = [];
    for(index=0; index<s.length; index++){
        // console.log(`s[index]: ${s[index]}`);
        if(stack.length === 0){
            stack.push(s[index])
        }else{
            let element = stack[stack.length-1];
            if(element !== s[index]){
                stack.push(s[index])
            }else{ // element === s[index]
                stack.pop();
            }
        }
        // console.log(`stack: ${stack}`);
    }
    return stack.join('');
}

console.log(removeDuplicates("azxxzy"));
console.log(removeDuplicates("abbaca"));
console.log(`Answer: "${removeDuplicates("aaaaaaa")}"`);