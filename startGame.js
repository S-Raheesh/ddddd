canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
console.log(ctx);
nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpg", "nasa_image_3.jpg","nas.jpg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;
hive_width = 100;
hive_height = 90;
background_image = nasa_mars_images_array[random_number];

rover_image = "images.jpg";
rover_x = 10;
rover_y = 10;
hive_image = "beehive.jpg";
hive_x = 100;
hive_y = 100;
function ttt() {
    console.log("inside ttt");
    console.log(ctx);
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;   

	rover_imgTag = new Image(); 
	rover_imgTag.onload = uploadrover; 
	rover_imgTag.src = rover_image; 
    
    hive_imgTag = new Image(); 
	hive_imgTag.onload = uploadhive; 
	hive_imgTag.src = hive_image;
}
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadhive() {
	ctx.drawImage(hive_imgTag, hive_x, hive_y, hive_width, hive_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}