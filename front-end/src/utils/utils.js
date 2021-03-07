export function conver(limit) {  
    var size = "";  
    var limitToByte = limit * 1024
    if ( limitToByte < 1024 ) {
        size = limitToByte.toFixed(2) + " B";    
    } else if ( limitToByte < 1024 * 1024 ) {
        size = (limitToByte / 1024).toFixed(2) + " KB";              
    } else if ( limitToByte < 1024 * 1024 * 1024 ) {
        size = (limitToByte / (1024 * 1024)).toFixed(2) + " MB";  
    } else {
        size = (limitToByte / (1024 * 1024 * 1024)).toFixed(2) + " GB";  
    }  
      
    var sizestr = size + "";   
    var len = sizestr.indexOf("\.");  
    var dec = sizestr.substr(len + 1, 2);  
    if(dec === "00") { 
        return sizestr.substring(0, len) + sizestr.substr(len + 3,2);  
    }  
    return sizestr;  
} 