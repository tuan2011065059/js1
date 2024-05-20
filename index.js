// bài 1

document.getElementById('btn').onclick = function(){
    let soNgayLam = +document.getElementById('input').value;
    let tongTien = 100000 * soNgayLam;
    document.getElementById('outPut').innerHTML = tongTien.toLocaleString();
}

// bài 2

document.getElementById('btn2').onclick = function(){
    let so1 = +document.getElementById('soThuNhat').value; 
    let so2 = +document.getElementById('soThuHai').value; 
    let so3 = +document.getElementById('soThuBa').value; 
    let so4 = +document.getElementById('soThuTu').value; 
    let so5 = +document.getElementById('soThuNam').value; 
    let trungBinh = (so1 + so2 + so3 + so4 + so5) / 5 ;
    document.getElementById('outPut2').innerHTML = trungBinh;
}

// bài 3 quy đổi tiền

document.getElementById('btn3').onclick = function(){
    let USD = +document.getElementById('USD').value;
    let tienViet = USD * 23500;
    document.getElementById('outPut3').innerHTML = `${USD} $ quy đổi ra tiền việt là ${tienViet.toLocaleString()} VND`;
}

// bài 4 chu vi hình chữ nhật

document.getElementById('btn4').onclick = function(){
    let witch = +document.getElementById('chieuDai').value;
    let height = +document.getElementById('chieuRong').value;
    let chuVi = (witch + height) * 2;
    document.getElementById('outPut4').innerHTML = `chu vi hình chữ nhật là ${chuVi}`;
}

// 5 tổng 2 ký số 

document.getElementById('btn5').onclick = function(){
    let kySo = +document.getElementById('so').value;
    let chuc = Math.floor(kySo / 10);
    let donVi = kySo % 10 ;
    let tongSo = chuc + donVi;
    document.getElementById('outPut5').innerHTML = ` tổng 2 ký số là ${tongSo}`;
}