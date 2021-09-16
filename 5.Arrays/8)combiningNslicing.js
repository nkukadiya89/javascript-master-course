 const first = [1, 2, 3, 4];
 const second = [5, 6, 7, 8];

 let third = first.concat(second);
 console.log(third);

 let fourth = third.slice(4);
 console.log(fourth);

 let fifth = third.slice(2, 4);
 console.log(fifth);

 const first1 = [{ id: 1 }];
 console.log(first1);
 first1[0].id = 8;
 const combined = first1.concat(second);
 console.log(combined);