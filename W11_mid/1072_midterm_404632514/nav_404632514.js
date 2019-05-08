function goPage(index) {
    let p = document.getElementById("article");
    switch (index) {
        case 1:
            p.innerHTML = '<iframe width="950px" height="650px" src="p1/div_404632514.html" frameborder="0"></iframe>'
            break;
        case 2:
            p.innerHTML = '<iframe width="600px" height="300px" src="p2/tku60_404632514.html" frameborder="0"></iframe>'
            break;
        case 3:
            p.innerHTML = '<iframe width="480px" height="450px" src="p3/myclass.html" frameborder="0"></iframe>'
            break;
    }
}