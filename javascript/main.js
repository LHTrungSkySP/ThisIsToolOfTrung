import * as LHTrung_func from "./function.js";

$(document).ready(function () {
    init();
    $('#CreateMaxText').on('click', function(){
        debugger
        LHTrung_func.CreateMaxText();
    }); 
    $('#KTBtn').on('click', function (){
        LHTrung_func.CheckListData($('#TextKT').val());
    });
    $('#NoiDung').on('input',function () { 
        let mang_ki_tu_kt = $('#NoiDung').val();
        $('#TextMax').val(LHTrung_func.DemByte(mang_ki_tu_kt));
    });
    // $('#TextKQKT').on('input',function(){
    //     let mang_ki_tu_kt = $('#TextKQKT').val();
    //     mang_ki_tu_kt.match(/[a-zA-Z]+/g);

    // });
    $('#TextKT').on('input', function (){
        LHTrung_func.CheckListData($('#TextKT').val());
    });

    $("#TextDC").on('input',function(){
        // Loại bỏ các ký tự đặc biệt ',', '(', ')', '<', '>'
        let cleanedData =$("#TextDC").val().trim();

        $("#TextDC").val(cleanedData);
        // Chuyển đoạn dữ liệu thành một mảng bằng cách tách dựa trên dấu ','
        let dataArray = cleanedData.split('\n');
        let newArr=[];
        let ListTextMax=[];
        let ListTextMax1=[];
        let TextDC = '';
        for(let i=0;i<dataArray.length;i++){
            dataArray[i] = dataArray[i].trim()
            dataArray[i] = dataArray[i].replace(/[\(\)\<\>,]/g, '');
            TextDC+=dataArray[i] + '\n';

            ListTextMax[i]= dataArray[i].split(' ')[0];
            ListTextMax1[i]= (dataArray[i].split(' ')[1]+'').replace(/\D/g, '');
            
            dataArray[i] = dataArray[i].split(' ')[1]+'';
            dataArray[i] = dataArray[i].replace(/\D/g, '');
            
            newArr+=dataArray[i]+"\n";
        }
        $('#TextSL').val(newArr);
        $('#Text_Length_Design').val(newArr);
        $('#TextDC').val(TextDC);
        
        let KqListMax='';
        for(let x=0;x<ListTextMax1.length;x++){
            let DoDaiMax = ListTextMax1[x];
            let text = ListTextMax[x];
            console.log(text);
            if(DoDaiMax!=''){
                let DoDaiBanDau = text.length;
                let MangCanLayMax = text.split("");
                let textMax="";
                let dem=DoDaiMax;
                for(let i=0; dem>0;i++){
                    if(LHTrung_func.isCharacterInAscii(MangCanLayMax[i])){
                        dem-=1;
                    }
                    else{
                        dem-=2;
                    }
                    if(dem==0){
                        textMax+=MangCanLayMax[i];
                        break;
                    } 
                    if(dem<0){
                        textMax+="0";
                    }
                    else{
                        textMax+=MangCanLayMax[i]
                        if(i==DoDaiBanDau-1){
                            i=-1;
                        }
                    }
                }
                KqListMax+=',\''+textMax+'\''+'\n';
            }
            else{
                KqListMax+=',\''+Math.floor(Math.random() * 110)+'\''+'\n';
            }
        }    
        $('#ListTextMax').val(KqListMax);
    });
    
});
function init(){
    $('#DoDaiMax').focus(function () { 
        $('#DoDaiMax').select();        
    });
    $('#NoiDung').focus(function () { 
        $('#NoiDung').select();        
    });
}

