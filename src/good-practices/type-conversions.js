const number = 0
const string = '7'

// ❌ using operators
!!number; // false
+string; // 7
number + ''; // '0'

// ✔️ Using data type method
Boolean(number); // false
Number(string); // 7
String(number); // '0'
