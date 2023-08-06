
export function isCharacterInAscii(char) {
    const charCode = char.charCodeAt(0);
    return charCode >= 0 && charCode <= 255;
}
// check list data have how many char
export function CheckListData(TextKT){
    let ND_KT = TextKT.trim();
    ND_KT = ND_KT.replace(/[\(\)\<\>,]/g, '');
    ND_KT = ND_KT.replace(/\'/g, '');
    
    let mang_ND_KQKT = ND_KT.split("\n");

    for(let i=0;i<mang_ND_KQKT.length;i++){
        let dem=0;
        let mang_ki_tu_kt=mang_ND_KQKT[i].split("");
        dem=DemByte(mang_ki_tu_kt);
        mang_ND_KQKT[i]=dem+"\t"+mang_ND_KQKT[i]+"\n";
    }
    $('#TextKQKT').val(mang_ND_KQKT);
    $('#TextKT').val(ND_KT);
}
// tạo text với max length
export function CreateMaxText(){
    let DoDaiMax = $('#DoDaiMax').val();
    let text = $('#NoiDung').val();
    let DoDaiBanDau = text.length;
    let MangCanLayMax = text.split("");
    let textMax="";
    let dem=DoDaiMax;

    for(let i=0; dem>0;i++){
        if(isCharacterInAscii(MangCanLayMax[i])){
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
    $('#TextMax').val(textMax);
    $('#TextMax').select();
    document.execCommand('copy');
};

export function DemByte(mang_ki_tu_kt){
    let dem=0;
    for(let j=0; j < mang_ki_tu_kt.length; j++){
        if(isCharacterInAscii(mang_ki_tu_kt[j])){
            dem+=1;
        }
        else{
            dem+=2;
        }
    }
    return dem;
};