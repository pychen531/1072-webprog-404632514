function goPage(index) {
    let p = document.getElementById("display");
    switch (index) {
        case 1:
            p.innerHTML = '<iframe width="440px" height="270px" src="img/TKU1.png" frameborder="0"></iframe>'
            break;
        case 2:
            p.innerHTML = '<iframe width="440px" height="270px" src="img/TKU2.png" frameborder="0"></iframe>'
            break;
        case 3:
        p.innerHTML = '<iframe width="440px" height="270px" src="img/TKU3.png" frameborder="0"></iframe>'
            break;
        case 4:
        p.innerHTML = '<iframe width="440px" height="270px" src="img/TKU4.png" frameborder="0"></iframe>'
            break;
        case 5:
        p.innerHTML = '<iframe width="440px" height="270px" src="img/TKU5.png" frameborder="0"></iframe>'
            break;
    }
}