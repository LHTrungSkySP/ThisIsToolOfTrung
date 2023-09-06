$(document).ready(function () {
    init();
    $('#Conversion').on('input', function () {
        let text = $('#Conversion').val().trim();

        // let text to array 
        let textArrays = text.split('\n');
        // drop all space in element of array
        let kqq="";
        for(let y=0;y<textArrays.length;y++){
            let textArray = textArrays[y].split('\t');
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
                kqq+=kq+"\n";
        }
        
        $('#Conversion').val(kqq);
    });
    $('#Validate').on('click', function () {
        
        let text = $('#Conversion').val();

        // let text to array 
        let textArray = text.split('\n');
        let kq = "(";
        let i = 0;
        for (; i < textArray.length-1; i++) {
            if(textArray[i]==''){
                kq += "),(";
            }
            else{
                kq += "\'" + textArray[i] + "\'\," + "\n";
            }
        }
        textArray[i] != "" ? kq += "\'" + textArray[i] + "\')" : kq=kq+")";
        $('#Conversion').val(kq);
    });

    $('#Validate_script_table').on('click', function () {
        
        let text = $('#Conversion').val();

        // let text to array 
        let textArray = text.split('\n');
        let kq = "(";
        let tblname = textArray[0];
        let i = 0;
        for (; i < textArray.length-1; i++) {
            if(textArray[i]==''){
                kq += "),(";
            }
            else{
                if(textArray[i+1]==''){
                    kq += "\'" + textArray[i] + "\'";
                }
                else{
                    kq += "\'" + textArray[i] + "\'\," + "\n";

                }
            }
        }
        kq += "\'" + textArray[i] + "\')";
        let script = "INSERT INTO [cxc].["+tblname+"](["
        $('#Conversion').val(kq);
    })

});
function init(){
    $('#Conversion').focus(function () { 
        $('#Conversion').select();        
    });
    // $('#NoiDung').focus(function () { 
    //     $('#NoiDung').select();        
    // });
}
