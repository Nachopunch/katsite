$(document).ready(function(){

	var aChildren = $(".nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values
    console.log(aArray);
    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();
        var navHeight = $(".navbar").height(); 

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos + navHeight >= divPos && windowPos + navHeight < (divPos + divHeight)) {
                $("li[id='" + theID + "']").addClass("active");
            } else {
                $("li[id='" + theID + "']").removeClass("active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("#navbar li:last-child").hasClass("active")) {
                var navActiveCurrent = $(".active").attr("id");
                $("li[id='" + navActiveCurrent + "']").removeClass("active");
                $("#navbar li:last-child").addClass("active");
            }
        }
    });

});
