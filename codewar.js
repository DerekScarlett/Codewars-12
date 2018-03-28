//Don't give me five!
//In this kata you get the start number and the end number of a region and should return
// the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

function dontGiveMeFive(start, end) {
  let count = 0
  for (let i = start; i <= end; i++) {
    //regular expression, this is a user test to see if 5 is apart of one of our numbers, so if 5 is not equat or apart of one of our numbers
    //then add to count
    if (!/5/.test(i)) {
      count++
    }
  }
  return count
}
