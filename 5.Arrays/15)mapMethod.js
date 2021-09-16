 const numbers = [1, -1, 2, 3];

 const filtered = numbers.filter(v => v >= 0);

 const items = filtered.map(v => '<li>' + v + '</li>');

 const html = '<ul>' + items.join(' ') + '</ul>';
 console.log(html);


 const items2 = filtered.map(n => ({ value: n }));

 console.log(items2);

 //  const items = filtered.map(v => '<li>' + v + '</li>');
 //  const items2 = filtered.map(n => ({ value: n }));
 // this could be written as

 //  const items2 = numbers
 //      .filter(v => v >= 0)
 //      .map(n => ({ value: n }));
 //      .filter(obj => obj.value > 1)
 //  console.log(items2);

 // This method is clled Chaining