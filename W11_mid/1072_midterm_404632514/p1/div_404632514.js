function goPage(index) {
    let p = document.getElementById("section");
    switch (index) {
        case 1:
            p.innerHTML = '<h1>訪客</h1>'
            break;
        case 2:
            p.innerHTML = '<h1>教職員</h1>'
            break;
        case 3:
            p.innerHTML = '<h1>校友</h1>'
            break;
        case 4:
            p.innerHTML = '<h1>家長</h1>'
            break;
        case 5:
            p.innerHTML = '<h1>國際生</h1>'
            break;
        case 6:
            p.innerHTML = '<h1>學生</h1>'
            break;
        case 7:
            p.innerHTML = '<h1>未來學生</h1>'
            break;
    }
}