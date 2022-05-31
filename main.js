$(document).ready(() => {
    let submitButton = $('#submit');
    let thankYouPage = $('.thank-you-page');
    let ratingPage = $('.rating-page');
    let numbers = [$('#1'), $('#2'), $('#3'), $('#4'), $('#5')];
    let selection = $('#selection');

    thankYouPage.hide();
    
        numbers[0].on('click', () => {
            let value1 = number[0].val;
        })
    

    submitButton.on('click', () => {
            thankYouPage.show();
            ratingPage.hide();
            selection.val = value1;
    })
})


