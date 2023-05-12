/**
 * Khối 1: Input
 * Băng giá cước, loaiXe, soKM, tgCho
 * 
 * Khối 2:
 * Phân tích các function cho chương trình
 *   + kiemTraLoaiXe
 *   + tinhTienTheoKM
 *   + tinhTienPhat
 *   + TÍnh tổng tiền
 * 
 * 
 * KHôi 3: output
 * Tính thành tiền (thanhTien)
 * 
 */



// //? tính thành tiền và hiển thị lên UI

// function main(){
//     //?hàm chính: gọi tới các hàm tính năng nhỏ hơn

//     //Lấy giá trị từ form


//     console.log(radioCar,radioSUV,radioBlack);
//     var km = document.getElementById("inputKM").value;
//     var time = document.getElementById("inputTime").value;

//     console.log(km,time)

//     //tính năng kiemTraLoaiXe

//     //tính năng tinhTienTheoKM

//     //tinhTienPhat

//     // TÍnh tổng tiền
    
// }
const KM_DAU_CAR = 8000;
const KM_1_19_CAR = 7500;
const KM_TREN19_CAR = 7000;
const TG_CAR = 2000;

const KM_DAU_SUV = 9000;
const KM_1_19_SUV = 8500;
const KM_TREN19_SUV = 8000;
const TG_SUV = 3000;

const KM_DAU_BLACK = 10000;
const KM_1_19_BLACK = 9500;
const KM_TREN19_BLACK = 9000;
const TG_BLACK = 3500;
function main() {
    //     //Lấy giá trị từ form
    var radioCar = document.getElementById('grabCar');
    var radioSuv = document.getElementById('grabSUV');
    var radioBlack = document.getElementById('grabBlack');
    var typeCar = '';
    typeCar = chooseCar(radioCar,radioSuv,radioBlack);
    var KM = document.getElementById('inputKM').value;
    var time = document.getElementById('inputTime').value;
    var price = 0;
    switch (typeCar) {
        case 'Car':
            price = calcKm(KM,KM_DAU_CAR,KM_1_19_CAR,KM_TREN19_CAR) + deplay(time,TG_CAR);
            break;
        case 'Sub':
            price = calcKm(KM,KM_DAU_SUV,KM_1_19_SUV,KM_TREN19_SUV)+ deplay(time,TG_SUV);;
            break;
        case 'black':
            price = calcKm(KM,KM_DAU_BLACK,KM_1_19_BLACK,KM_TREN19_BLACK)+ deplay(time,TG_BLACK);;
            break;
        default:
            alert('chon xe ban muon di');
            break;
    }
    document.getElementById('xuatTien').innerHTML = price.toLocaleString();
    document.getElementById('divThanhTien').style.display = 'block';
}
function chooseCar(Car, Suv, Black ) {
    if (Car.checked) {
        return 'Car';
    }else if (Suv.checked){
        return 'Sub';
    }else if (Black.checked){
        return 'Black';
    }else {
        alert('chon xe ban muon di');
        return '';
    }
}
function calcKm(KM,KM_DAU,KM_1_19,KM_TREN19) {
    if (0<KM && KM <= 19){
        return KM_DAU + (KM-1)*KM_1_19;
    }else if (KM>19) {
        return KM_DAU + 19* KM_1_19+ (KM - 19) * KM_TREN19;
    } else {
        alert('may bi ngu ak');
        return 0;``
    }
}
function deplay(time, deplayTime) {
    if(time>=3){
        var soLan = Math.floor(time/3);
        var total = soLan * deplayTime;
        return total;
    }   return 0;
}