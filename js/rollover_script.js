//NEW SCRIPT with jQUERY!

$("document").ready(function () {
    setUpRollover();
});

function setUpRollover() {
    $("a").each(function () {
        $(this).hover(
            function () {
                var id = $(this).attr("id");
                $(this).children().attr("src", "slices/icons/" + id + ".png");
            },
            function () {
                var id = $(this).attr("id");
                $(this).children().attr("src", "slices/words/" + id + ".png");
            }
        );
    });
}


/* OLD SCRIPT
document.ready = images;

function images() {
	for (var i=0; i < document.images.length; i++){
		if (document.images[i].parentNode.tagName == "A"){
			if (i < 31){
				setupImage(document.images[i]);
			}
			else
				break;
		}
	}
}

function setupImage(image) {
	image.overImage = new Image();
	image.overImage.src = "slices/icons/" + image.id + ".png";
	image.onmouseover = toColor;
	
	image.outImage = new Image();
	image.outImage.src = image.src;
	image.onmouseout = toGray;
}

function toColor() {
	this.src = this.overImage.src;
}

function toGray() {
	this.src = this.outImage.src;
}

*/