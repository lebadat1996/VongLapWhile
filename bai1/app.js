let num;
let total = 0;
let resule;
let locResule = document.getElementById("resule");
do{
    num = parseFloat(prompt( "hay nhap mot so: "));
    if(num === -1){
        locResule.innerHTML = "Ban vua nhap vao -1, chuong trinh se thoat";
        break;
    }
    resule += num + ", ";
    total += num;
}while ((num !== -1) && (num !== null));
    locResule.innerHTML = "cac so vua nhap vao la: " + resule + " sum = " + total;
