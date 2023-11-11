function redirect(option) {
    switch (option) {
        case 1:
            window.location.href = "binary.html";
            break;
        case 2:
            window.location.href = "logical-or.html";
            break;
        
        case 3:
            window.location.href = "logical-and.html";
            break;
    
        default:
            window.location.href = "index.html";
            break;
    }
}