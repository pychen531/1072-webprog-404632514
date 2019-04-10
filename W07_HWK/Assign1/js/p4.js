function goPage(index){
    let p = document.getElementById('content');
    switch(index){
        case 1:
            p.innerHTML = '<iframe width="850" height="600" src="p1/div.html" frameborder="0"></iframe>';
            break;
        case 2:
            p.innerHTML = '<iframe width="850" height="610" src="p2/tku60.html" frameborder="0"></iframe>';
            break;
        case 3:
            p.innerHTML = '<iframe width="850" height="480" src="p3/mytravel.html" frameborder="0"></iframe>';
            break;
    }
}