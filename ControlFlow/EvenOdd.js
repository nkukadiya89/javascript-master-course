showNumbers(10);

function showNumbers(limit) {
    let i;
    for (i = 0; i <= limit; i++) {
        //         if (i % 2 == 0) {
        //             console.log(i, 'Even');
        //         } else {
        //             console.log(i, 'Odd');
        //         }
        //     }

        //OR
        let message = (i % 2 == 0) ? 'Even' : 'Odd';
        console.log(i, message);
    }
}