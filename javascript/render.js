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
                let demhaha=0;
                for(let i=0; dem>0;i++){
                    
                    if(LHTrung_func.isCharacterInAscii(MangCanLayMax[i])){
                        // chiếm 1 varchar
                        dem-=1;
                        demhaha++;
                    }
                    else{
                        // ký tự chiếm 2 varchar
                        dem-=2;
                        demhaha+=2;
                    }
                    if(dem==0){
                        // đã đủ
                        textMax+=MangCanLayMax[i];
                        break;
                    } 
                    else if(dem<0){
                        textMax+=Math.floor(Math.random() * 10);
                    }
                    else{
                        textMax+=MangCanLayMax[i]
                        if(i==DoDaiBanDau-1){
                            break;
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

