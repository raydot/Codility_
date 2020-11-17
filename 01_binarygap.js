// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    N = parseInt(N);
    N = N.toString(2)
    

    let groove = false
    let count = 0
    let highest = 0

     // console.log(N)

  for (let i = 0; i < N.length; i += 1) {
      //console.log(N[i])
      
      // Conditions
      // 1.  Starter 1 
      // 2.  Ender 1
      // 3.  0 with starter on
      // 4.  0 with starter off
      // 5.  Last char

      if (N[i] == 1 && groove == false) {
          groove = true
      } else if (N[i] == 1 && groove == true) {
          // groove = false
          if (highest < count) { highest = count }
          count = 0
      }
      
      if (N[i] == 0 && groove === true) {
          count += 1
      }
      
      
  }

    //console.log(N)
    
    return highest
}
