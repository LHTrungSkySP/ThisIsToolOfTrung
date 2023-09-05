$(document).ready(function () {
    $('#Conversion').on('input', function () {
        let text = $('#Conversion').val().trim();

        // let text to array 
        let textArray = text.split(' ');

        // drop all space in element of array
        let kq = "";
        let i = 0;
        for (; i < textArray.length-1; i++) {
            if (textArray[i] != "") {
                kq += textArray[i] + "\n";
            }
        }
        if (textArray[i] != "") {
            kq += textArray[i];
        }
        $('#Conversion').val(kq);
    });
    $('#Validate').on('click', function () {
        
        let text = $('#Conversion').val();

        // let text to array 
        let textArray = text.split('\n');
        let kq = "(";
        let i = 0;
        for (; i < textArray.length-1; i++) {
            kq += "\'" + textArray[i] + "\'\," + "\n";
        }
        kq += "\'" + textArray[i] + "\')"
        $('#Conversion').val(kq);

    })

})