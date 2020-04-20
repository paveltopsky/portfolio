// Programming cart on site

var cart = document.querySelector('.cart'),
    price = document.querySelector('.cart-price'),
    amoutCart = document.querySelector('.header__cart-value'),
    cancel = document.querySelector('.cancel'),
    item1 = document.querySelector('.item1'),
    item2 = document.querySelector('.item2'),
    item3 = document.querySelector('.item3'),
    item4 = document.querySelector('.item4'),
    item5 = document.querySelector('.item5'),
    item6 = document.querySelector('.item6'),
    item7 = document.querySelector('.item7'),
    item8 = document.querySelector('.item8'),
    item9 = document.querySelector('.item9'),
    item10 = document.querySelector('.item10'),
    item11 = document.querySelector('.item11'),
    item12 = document.querySelector('.item12'),
    item13 = document.querySelector('.item13'),
    item14 = document.querySelector('.item14'),
    item15 = document.querySelector('.item15'),
    item16 = document.querySelector('.item16'),
    item17 = document.querySelector('.item17'),
    item18 = document.querySelector('.item18'),
    item19 = document.querySelector('.item19'),
    item20 = document.querySelector('.item20'),
    item21 = document.querySelector('.item21'),
    item22 = document.querySelector('.item22'),
    item23 = document.querySelector('.item23'),
    item24 = document.querySelector('.item24'),
    item25 = document.querySelector('.item25'),
    item26 = document.querySelector('.item26'),
    item27 = document.querySelector('.item27'),
    item28 = document.querySelector('.item28'),
    item29 = document.querySelector('.item29'),
    item30 = document.querySelector('.item30'),
    item31 = document.querySelector('.item31'),
    item32 = document.querySelector('.item32'),
    item33 = document.querySelector('.item33'),
    item34 = document.querySelector('.item34'),
    item35 = document.querySelector('.item35'),
    item36 = document.querySelector('.item36'),
    item37 = document.querySelector('.item37'),
    item38 = document.querySelector('.item38'),
    item39 = document.querySelector('.item39'),
    item40 = document.querySelector('.item40'), // end ////////////////////////////////
    num1 = document.querySelector('.num1'),
    num2 = document.querySelector('.num2'),
    num3 = document.querySelector('.num3'),
    num4 = document.querySelector('.num4'),
    num5 = document.querySelector('.num5'),
    num6 = document.querySelector('.num6'),
    num7 = document.querySelector('.num7'),
    num8 = document.querySelector('.num8'),
    num9 = document.querySelector('.num9'),
    num10 = document.querySelector('.num10'),
    num11 = document.querySelector('.num11'),
    num12 = document.querySelector('.num12'),
    num13 = document.querySelector('.num13'),
    num14 = document.querySelector('.num14'),
    num15 = document.querySelector('.num15'),
    num16 = document.querySelector('.num16'),
    num17 = document.querySelector('.num17'),
    num18 = document.querySelector('.num18'),
    num19 = document.querySelector('.num19'),
    num20 = document.querySelector('.num20'),
    num21 = document.querySelector('.num21'),
    num22 = document.querySelector('.num22'),
    num23 = document.querySelector('.num23'),
    num24 = document.querySelector('.num24'),
    num25 = document.querySelector('.num25'),
    num26 = document.querySelector('.num26'),
    num27 = document.querySelector('.num27'),
    num28 = document.querySelector('.num28'),
    num29 = document.querySelector('.num29'),
    num30 = document.querySelector('.num30'),
    num31 = document.querySelector('.num31'),
    num32 = document.querySelector('.num32'),
    num33 = document.querySelector('.num33'),
    num34 = document.querySelector('.num34'),
    num35 = document.querySelector('.num35'),
    num36 = document.querySelector('.num36'),
    num37 = document.querySelector('.num37'),
    num38 = document.querySelector('.num38'),
    num39 = document.querySelector('.num39'),
    num40 = document.querySelector('.num40'), // end ////////////////////////////////
    add1 = document.querySelector('.add1'),
    add2 = document.querySelector('.add2'),
    add3 = document.querySelector('.add3'),
    add4 = document.querySelector('.add4'),
    add5 = document.querySelector('.add5'),
    add6 = document.querySelector('.add6'),
    add7 = document.querySelector('.add7'),
    add8 = document.querySelector('.add8'),
    add9 = document.querySelector('.add9'),
    add10 = document.querySelector('.add10'),
    add11 = document.querySelector('.add11'),
    add12 = document.querySelector('.add12'),
    add13 = document.querySelector('.add13'),
    add14 = document.querySelector('.add14'),
    add15 = document.querySelector('.add15'),
    add16 = document.querySelector('.add16'),
    add17 = document.querySelector('.add17'),
    add18 = document.querySelector('.add18'),
    add19 = document.querySelector('.add19'),
    add20 = document.querySelector('.add20'),
    add21 = document.querySelector('.add21'),
    add22 = document.querySelector('.add22'),
    add23 = document.querySelector('.add23'),
    add24 = document.querySelector('.add24'),
    add25 = document.querySelector('.add25'),
    add26 = document.querySelector('.add26'),
    add27 = document.querySelector('.add27'),
    add28 = document.querySelector('.add28'),
    add29 = document.querySelector('.add29'),
    add30 = document.querySelector('.add30'),
    add31 = document.querySelector('.add31'),
    add32 = document.querySelector('.add32'),
    add33 = document.querySelector('.add33'),
    add34 = document.querySelector('.add34'),
    add35 = document.querySelector('.add35'),
    add36 = document.querySelector('.add36'),
    add37 = document.querySelector('.add37'),
    add38 = document.querySelector('.add38'),
    add39 = document.querySelector('.add39'),
    add40 = document.querySelector('.add40'), // end ////////////////////////////////
    close1 = document.querySelector('.close1'),
    close2 = document.querySelector('.close2'),
    close3 = document.querySelector('.close3'),
    close4 = document.querySelector('.close4'),
    close5 = document.querySelector('.close5'),
    close6 = document.querySelector('.close6'),
    close7 = document.querySelector('.close7'),
    close8 = document.querySelector('.close8'),
    close9 = document.querySelector('.close9'),
    close10 = document.querySelector('.close10'),
    close11 = document.querySelector('.close11'),
    close12 = document.querySelector('.close12'),
    close13 = document.querySelector('.close13'),
    close14 = document.querySelector('.close14'),
    close15 = document.querySelector('.close15'),
    close16 = document.querySelector('.close16'),
    close17 = document.querySelector('.close17'),
    close18 = document.querySelector('.close18'),
    close19 = document.querySelector('.close19'),
    close20 = document.querySelector('.close20'),
    close21 = document.querySelector('.close21'),
    close22 = document.querySelector('.close22'),
    close23 = document.querySelector('.close23'),
    close24 = document.querySelector('.close24'),
    close25 = document.querySelector('.close25'),
    close26 = document.querySelector('.close26'),
    close27 = document.querySelector('.close27'),
    close28 = document.querySelector('.close28'),
    close29 = document.querySelector('.close29'),
    close30 = document.querySelector('.close30'),
    close31 = document.querySelector('.close31'),
    close32 = document.querySelector('.close32'),
    close33 = document.querySelector('.close33'),
    close34 = document.querySelector('.close34'),
    close35 = document.querySelector('.close35'),
    close36 = document.querySelector('.close36'),
    close37 = document.querySelector('.close37'),
    close38 = document.querySelector('.close38'),
    close39 = document.querySelector('.close39'),
    close40 = document.querySelector('.close40'); // end ////////////////////////////////

amoutCartJS = 0; // html цифра числа товаров в корзине, но хранящаяся на js
priceJS = 0;

var arrItem = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20, item21, item22, item23, item24, item25, item26, item27, item28, item29, item30, item31, item32, item33, item34, item35, item36, item37, item38, item39, item40];
var arrCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrPrice = [100, 90, 75, 80, 105, 55, 60, 80, 60, 110, 45, 40, 60, 55, 45, 40, 40, 60, 60, 50, 35, 40, 40, 55, 45, 35, 55, 50, 70, 65, 40, 40, 25, 25, 35, 40, 40, 40, 50, 60];

add1.addEventListener('click', newTab1);
add2.addEventListener('click', newTab2);
add3.addEventListener('click', newTab3);
add4.addEventListener('click', newTab4);
add5.addEventListener('click', newTab5);
add6.addEventListener('click', newTab6);
add7.addEventListener('click', newTab7);
add8.addEventListener('click', newTab8);
add9.addEventListener('click', newTab9);
add10.addEventListener('click', newTab10);
add11.addEventListener('click', newTab11);
add12.addEventListener('click', newTab12);
add13.addEventListener('click', newTab13);
add14.addEventListener('click', newTab14);
add15.addEventListener('click', newTab15);
add16.addEventListener('click', newTab16);
add17.addEventListener('click', newTab17);
add18.addEventListener('click', newTab18);
add19.addEventListener('click', newTab19);
add20.addEventListener('click', newTab20);
add21.addEventListener('click', newTab21);
add22.addEventListener('click', newTab22);
add23.addEventListener('click', newTab23);
add24.addEventListener('click', newTab24);
add25.addEventListener('click', newTab25);
add26.addEventListener('click', newTab26);
add27.addEventListener('click', newTab27);
add28.addEventListener('click', newTab28);
add29.addEventListener('click', newTab29);
add30.addEventListener('click', newTab30);
add31.addEventListener('click', newTab31);
add32.addEventListener('click', newTab32);
add33.addEventListener('click', newTab33);
add34.addEventListener('click', newTab34);
add35.addEventListener('click', newTab35);
add36.addEventListener('click', newTab36);
add37.addEventListener('click', newTab37);
add38.addEventListener('click', newTab38);
add39.addEventListener('click', newTab39);
add40.addEventListener('click', newTab40);

close1.addEventListener('click', deleteTab1);
close2.addEventListener('click', deleteTab2);
close3.addEventListener('click', deleteTab3);
close4.addEventListener('click', deleteTab4);
close5.addEventListener('click', deleteTab5);
close6.addEventListener('click', deleteTab6);
close7.addEventListener('click', deleteTab7);
close8.addEventListener('click', deleteTab8);
close9.addEventListener('click', deleteTab9);
close10.addEventListener('click', deleteTab10);
close11.addEventListener('click', deleteTab11);
close12.addEventListener('click', deleteTab12);
close13.addEventListener('click', deleteTab13);
close14.addEventListener('click', deleteTab14);
close15.addEventListener('click', deleteTab15);
close16.addEventListener('click', deleteTab16);
close17.addEventListener('click', deleteTab17);
close18.addEventListener('click', deleteTab18);
close19.addEventListener('click', deleteTab19);
close20.addEventListener('click', deleteTab20);
close21.addEventListener('click', deleteTab21);
close22.addEventListener('click', deleteTab22);
close23.addEventListener('click', deleteTab23);
close24.addEventListener('click', deleteTab24);
close25.addEventListener('click', deleteTab25);
close26.addEventListener('click', deleteTab26);
close27.addEventListener('click', deleteTab27);
close28.addEventListener('click', deleteTab28);
close29.addEventListener('click', deleteTab29);
close30.addEventListener('click', deleteTab30);
close31.addEventListener('click', deleteTab31);
close32.addEventListener('click', deleteTab32);
close33.addEventListener('click', deleteTab33);
close34.addEventListener('click', deleteTab34);
close35.addEventListener('click', deleteTab35);
close36.addEventListener('click', deleteTab36);
close37.addEventListener('click', deleteTab37);
close38.addEventListener('click', deleteTab38);
close39.addEventListener('click', deleteTab39);
close40.addEventListener('click', deleteTab40);

cancel.addEventListener('click', cleanTab);

function cleanTab() {
    for (var i = 0; i < arrCount.length; i++) {
        arrCount[i] = 0;
    }
    drawTab();
}

// ADD NEW TAB /////////////

function newTab1() {
    arrCount[0] = arrCount[0] + 1; // js
    num1.innerHTML = arrCount[0]; // вёрстка
    drawTab();
}
function newTab2() {
    localStorage.setCount1 = localStorage.setCount1 + 1;
    arrCount[1] = arrCount[1] + 1; // js
    num2.innerHTML = arrCount[1]; // вёрстка
    drawTab();
}
function newTab3() {
    arrCount[2] = arrCount[2] + 1; // js
    num3.innerHTML = arrCount[2]; // вёрстка
    drawTab();
}
function newTab4() {
    arrCount[3] = arrCount[3] + 1; // js
    num4.innerHTML = arrCount[3]; // вёрстка
    drawTab();
}
function newTab5() {
    arrCount[4] = arrCount[4] + 1; // js
    num5.innerHTML = arrCount[4]; // вёрстка
    drawTab();
}
function newTab6() {
    arrCount[5] = arrCount[5] + 1; // js
    num6.innerHTML = arrCount[5]; // вёрстка
    drawTab();
}
function newTab7() {
    arrCount[6] = arrCount[6] + 1; // js
    num7.innerHTML = arrCount[6]; // вёрстка
    drawTab();
}
function newTab8() {
    arrCount[7] = arrCount[7] + 1; // js
    num8.innerHTML = arrCount[7]; // вёрстка
    drawTab();
}
function newTab9() {
    arrCount[8] = arrCount[8] + 1; // js
    num9.innerHTML = arrCount[8]; // вёрстка
    drawTab();
}
function newTab10() {
    arrCount[9] = arrCount[9] + 1; // js
    num10.innerHTML = arrCount[9]; // вёрстка
    drawTab();
}
function newTab11() {
    arrCount[10] = arrCount[10] + 1; // js
    num11.innerHTML = arrCount[10]; // вёрстка
    drawTab();
}
function newTab12() {
    arrCount[11] = arrCount[11] + 1; // js
    num12.innerHTML = arrCount[11]; // вёрстка
    drawTab();
}
function newTab13() {
    arrCount[12] = arrCount[12] + 1; // js
    num13.innerHTML = arrCount[12]; // вёрстка
    drawTab();
}
function newTab14() {
    arrCount[13] = arrCount[13] + 1; // js
    num14.innerHTML = arrCount[13]; // вёрстка
    drawTab();
}
function newTab15() {
    arrCount[14] = arrCount[14] + 1; // js
    num15.innerHTML = arrCount[14]; // вёрстка
    drawTab();
}
function newTab16() {
    arrCount[15] = arrCount[15] + 1; // js
    num16.innerHTML = arrCount[15]; // вёрстка
    drawTab();
}
function newTab17() {
    arrCount[16] = arrCount[16] + 1; // js
    num17.innerHTML = arrCount[16]; // вёрстка
    drawTab();
}
function newTab18() {
    arrCount[17] = arrCount[17] + 1; // js
    num18.innerHTML = arrCount[17]; // вёрстка
    drawTab();
}
function newTab19() {
    arrCount[18] = arrCount[18] + 1; // js
    num19.innerHTML = arrCount[18]; // вёрстка
    drawTab();
}
function newTab20() {
    arrCount[19] = arrCount[19] + 1; // js
    num20.innerHTML = arrCount[19]; // вёрстка
    drawTab();
}
function newTab21() {
    arrCount[20] = arrCount[20] + 1; // js
    num21.innerHTML = arrCount[20]; // вёрстка
    drawTab();
}
function newTab22() {
    arrCount[21] = arrCount[21] + 1; // js
    num22.innerHTML = arrCount[21]; // вёрстка
    drawTab();
}
function newTab23() {
    arrCount[22] = arrCount[22] + 1; // js
    num23.innerHTML = arrCount[22]; // вёрстка
    drawTab();
}
function newTab24() {
    arrCount[23] = arrCount[23] + 1; // js
    num24.innerHTML = arrCount[23]; // вёрстка
    drawTab();
}
function newTab25() {
    arrCount[24] = arrCount[24] + 1; // js
    num25.innerHTML = arrCount[24]; // вёрстка
    drawTab();
}
function newTab26() {
    arrCount[25] = arrCount[25] + 1; // js
    num26.innerHTML = arrCount[25]; // вёрстка
    drawTab();
}
function newTab27() {
    arrCount[26] = arrCount[26] + 1; // js
    num27.innerHTML = arrCount[26]; // вёрстка
    drawTab();
}
function newTab28() {
    arrCount[27] = arrCount[27] + 1; // js
    num28.innerHTML = arrCount[27]; // вёрстка
    drawTab();
}
function newTab29() {
    arrCount[28] = arrCount[28] + 1; // js
    num29.innerHTML = arrCount[28]; // вёрстка
    drawTab();
}
function newTab30() {
    arrCount[29] = arrCount[29] + 1; // js
    num30.innerHTML = arrCount[29]; // вёрстка
    drawTab();
}
function newTab31() {
    arrCount[30] = arrCount[30] + 1; // js
    num31.innerHTML = arrCount[30]; // вёрстка
    drawTab();
}
function newTab32() {
    arrCount[31] = arrCount[31] + 1; // js
    num32.innerHTML = arrCount[31]; // вёрстка
    drawTab();
}
function newTab33() {
    arrCount[32] = arrCount[32] + 1; // js
    num33.innerHTML = arrCount[32]; // вёрстка
    drawTab();
}
function newTab34() {
    arrCount[33] = arrCount[33] + 1; // js
    num34.innerHTML = arrCount[33]; // вёрстка
    drawTab();
}
function newTab35() {
    arrCount[34] = arrCount[34] + 1; // js
    num35.innerHTML = arrCount[34]; // вёрстка
    drawTab();
}
function newTab36() {
    arrCount[35] = arrCount[35] + 1; // js
    num36.innerHTML = arrCount[35]; // вёрстка
    drawTab();
}
function newTab37() {
    arrCount[36] = arrCount[36] + 1; // js
    num37.innerHTML = arrCount[36]; // вёрстка
    drawTab();
}
function newTab38() {
    arrCount[37] = arrCount[37] + 1; // js
    num38.innerHTML = arrCount[37]; // вёрстка
    drawTab();
}
function newTab39() {
    arrCount[38] = arrCount[38] + 1; // js
    num39.innerHTML = arrCount[38]; // вёрстка
    drawTab();
}
function newTab40() {
    arrCount[39] = arrCount[39] + 1; // js
    num40.innerHTML = arrCount[39]; // вёрстка
    drawTab();
}

// DELETE TAB /////////////

function deleteTab1() {
    arrCount[0] = arrCount[0] - 1; // js
    num1.innerHTML = arrCount[0]; // вёрстка
    drawTab();
}
function deleteTab2() {
    arrCount[1] = arrCount[1] - 1; // js
    num2.innerHTML = arrCount[1]; // вёрстка
    drawTab();
}
function deleteTab3() {
    arrCount[2] = arrCount[2] - 1; // js
    num3.innerHTML = arrCount[2]; // вёрстка
    drawTab();
}
function deleteTab4() {
    arrCount[3] = arrCount[3] - 1; // js
    num4.innerHTML = arrCount[3]; // вёрстка
    drawTab();
}
function deleteTab5() {
    arrCount[4] = arrCount[4] - 1; // js
    num5.innerHTML = arrCount[4]; // вёрстка
    drawTab();
}
function deleteTab6() {
    arrCount[5] = arrCount[5] - 1; // js
    num6.innerHTML = arrCount[5]; // вёрстка
    drawTab();
}
function deleteTab7() {
    arrCount[6] = arrCount[6] - 1; // js
    num7.innerHTML = arrCount[6]; // вёрстка
    drawTab();
}
function deleteTab8() {
    arrCount[7] = arrCount[7] - 1; // js
    num8.innerHTML = arrCount[7]; // вёрстка
    drawTab();
}
function deleteTab9() {
    arrCount[8] = arrCount[8] - 1; // js
    num9.innerHTML = arrCount[8]; // вёрстка
    drawTab();
}
function deleteTab10() {
    arrCount[9] = arrCount[9] - 1; // js
    num10.innerHTML = arrCount[9]; // вёрстка
    drawTab();
}
function deleteTab11() {
    arrCount[10] = arrCount[10] - 1; // js
    num11.innerHTML = arrCount[10]; // вёрстка
    drawTab();
}
function deleteTab12() {
    arrCount[11] = arrCount[11] - 1; // js
    num12.innerHTML = arrCount[11]; // вёрстка
    drawTab();
}
function deleteTab13() {
    arrCount[12] = arrCount[12] - 1; // js
    num13.innerHTML = arrCount[12]; // вёрстка
    drawTab();
}
function deleteTab14() {
    arrCount[13] = arrCount[13] - 1; // js
    num14.innerHTML = arrCount[13]; // вёрстка
    drawTab();
}
function deleteTab15() {
    arrCount[14] = arrCount[14] - 1; // js
    num15.innerHTML = arrCount[14]; // вёрстка
    drawTab();
}
function deleteTab16() {
    arrCount[15] = arrCount[15] - 1; // js
    num16.innerHTML = arrCount[15]; // вёрстка
    drawTab();
}
function deleteTab17() {
    arrCount[16] = arrCount[16] - 1; // js
    num17.innerHTML = arrCount[16]; // вёрстка
    drawTab();
}
function deleteTab18() {
    arrCount[17] = arrCount[17] - 1; // js
    num18.innerHTML = arrCount[17]; // вёрстка
    drawTab();
}
function deleteTab19() {
    arrCount[18] = arrCount[18] - 1; // js
    num19.innerHTML = arrCount[18]; // вёрстка
    drawTab();
}
function deleteTab20() {
    arrCount[19] = arrCount[19] - 1; // js
    num20.innerHTML = arrCount[19]; // вёрстка
    drawTab();
}
function deleteTab21() {
    arrCount[20] = arrCount[20] - 1; // js
    num21.innerHTML = arrCount[20]; // вёрстка
    drawTab();
}
function deleteTab22() {
    arrCount[21] = arrCount[21] - 1; // js
    num22.innerHTML = arrCount[21]; // вёрстка
    drawTab();
}
function deleteTab23() {
    arrCount[22] = arrCount[22] - 1; // js
    num23.innerHTML = arrCount[22]; // вёрстка
    drawTab();
}
function deleteTab24() {
    arrCount[23] = arrCount[23] - 1; // js
    num24.innerHTML = arrCount[23]; // вёрстка
    drawTab();
}
function deleteTab25() {
    arrCount[24] = arrCount[24] - 1; // js
    num25.innerHTML = arrCount[24]; // вёрстка
    drawTab();
}
function deleteTab26() {
    arrCount[25] = arrCount[25] - 1; // js
    num26.innerHTML = arrCount[25]; // вёрстка
    drawTab();
}
function deleteTab27() {
    arrCount[26] = arrCount[26] - 1; // js
    num27.innerHTML = arrCount[26]; // вёрстка
    drawTab();
}
function deleteTab28() {
    arrCount[27] = arrCount[27] - 1; // js
    num28.innerHTML = arrCount[27]; // вёрстка
    drawTab();
}
function deleteTab29() {
    arrCount[28] = arrCount[28] - 1; // js
    num29.innerHTML = arrCount[28]; // вёрстка
    drawTab();
}
function deleteTab30() {
    arrCount[29] = arrCount[29] - 1; // js
    num30.innerHTML = arrCount[29]; // вёрстка
    drawTab();
}
function deleteTab31() {
    arrCount[30] = arrCount[30] - 1; // js
    num31.innerHTML = arrCount[30]; // вёрстка
    drawTab();
}
function deleteTab32() {
    arrCount[31] = arrCount[31] - 1; // js
    num32.innerHTML = arrCount[31]; // вёрстка
    drawTab();
}
function deleteTab33() {
    arrCount[32] = arrCount[32] - 1; // js
    num33.innerHTML = arrCount[32]; // вёрстка
    drawTab();
}
function deleteTab34() {
    arrCount[33] = arrCount[33] - 1; // js
    num34.innerHTML = arrCount[33]; // вёрстка
    drawTab();
}
function deleteTab35() {
    arrCount[34] = arrCount[34] - 1; // js
    num35.innerHTML = arrCount[34]; // вёрстка
    drawTab();
}
function deleteTab36() {
    arrCount[35] = arrCount[35] - 1; // js
    num36.innerHTML = arrCount[35]; // вёрстка
    drawTab();
}
function deleteTab37() {
    arrCount[36] = arrCount[36] - 1; // js
    num37.innerHTML = arrCount[36]; // вёрстка
    drawTab();
}
function deleteTab38() {
    arrCount[37] = arrCount[37] - 1; // js
    num38.innerHTML = arrCount[37]; // вёрстка
    drawTab();
}
function deleteTab39() {
    arrCount[38] = arrCount[38] - 1; // js
    num39.innerHTML = arrCount[38]; // вёрстка
    drawTab();
}
function deleteTab40() {
    arrCount[39] = arrCount[39] - 1; // js
    num40.innerHTML = arrCount[39]; // вёрстка
    drawTab();
}

// DRAW ALL TAB ////////////////

function drawTab() {
    // Отрисовка количества товара в корзине
    amoutCartJS = 0;
    for (var i = 0; i < arrCount.length; i++) {
        amoutCartJS = amoutCartJS + arrCount[i];
    }
    amoutCart.innerHTML = amoutCartJS;

    // Отрисовка айтемов в корзине
    cart.innerHTML = '';
    for (var i = 0; i < arrItem.length; i++) {
        if (arrCount[i] != 0) {
            cart.appendChild(arrItem[i]);
        }
    }

    // Отрисовка цены в корзине
    priceJS = 0;
    for (var i = 0; i < arrCount.length; i++) {
        priceJS = priceJS + arrCount[i] * arrPrice[i];
    }
    price.innerHTML = priceJS;
}