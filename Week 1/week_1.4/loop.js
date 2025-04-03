function pattern(n) {
    for (let i = 1; i <= n; i++) {
      let row = ""; 
  
  
      for (let j = 0; j < n - i; j++) {
        row += " ";
      }
  
 
      for (let j = 0; j < 2 * i - 1; j++) {
        row += "*";
      }
  
      console.log(row); 
    }
  }
  
  pattern(5);
  