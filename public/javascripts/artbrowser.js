$(window).load(function(){
	$(document).ready(function() {

		var $grid = $('.grid');

		$grid.masonry({
			itemSelector: '.grid-item',
			columnWidth: 200,
			isFitWidth: true
		});

		$grid.css('opacity', '1');
	});
});




// // load collage plus plugin
// $(window).load(function(){
// 	$(document).ready(function() {
// 		console.log("collage plus");
// 		collage();
// 	});
// });

// function collage() {
//     $('.Collage').collagePlus(
//         {
//             'fadeSpeed' : 2000,
//             'allowPartialLastRow' : true,
// 			'targetHeight' : 250,
// 			'effect' : 'effect-1'
//         }
//     );
// };

// var resizeTimer = null;
// $(window).bind('resize', function() {
//     // hide all the images until we resize them
//     // set the element you are scaling i.e. the first child nodes of ```.Collage``` to opacity 0
//     $('.Collage .Image_Wrapper').css("opacity", 0);
//     // set a timer to re-apply the plugin
//     if (resizeTimer) clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(collage, 200);
// });
