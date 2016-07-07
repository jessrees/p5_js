function setup(){
  createCanvas(800, 1200, WEBGL);
}

function draw() {

  background(0);

  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;

  ambientLight(150);
  directionalLight(200, 240, 0, 0.25, 0.25, 0.25);
  pointLight(0, 0, 200, locX, locY, 0);
  pointLight(200, 200, 0, -locX, -locY, 0);

  // rotateZ(frameCount * 0.02);
  // rotateZ(locY * 20);
  // rotateY(locX * 20);
  // rotateX((locX +  locY) * 20);
  
  orbitControl();
  	push();
  translate(0, 0, 0);
  box(10);
  	pop();

	push();
  translate(1000, 1000, 1000);
  sphere(1);
  	pop();




		push();
		translate(-210.07,-569.77,-48.56);
		sphere(-5.28);
		pop();

		push();
		translate(-64.35,-678.82,-167.36);
		sphere(-5.05);
		pop();

		push();
		translate(-19.63,-255.13,-91.36);
		sphere(-2.75);
		pop();

		push();
		translate(-184.70,-355.89,-13.92);
		sphere(-3.16);
		pop();

		push();
		translate(-16.20,-61.90,-13.30);
		sphere(0.778);
		pop();

		push();
		translate(-27.48,-445.39,-124.98);
		sphere(-3.38);
		pop();

		push();
		translate(-238.89,-472.71,9.30);
		sphere(-3.5);
		pop();

		push();
		translate(-52.42,-499.78,-125.39);
		sphere(-3.31);
		pop();

		push();
		translate(-135.73,-404.61,-45.78);
		sphere(-2.78);
		pop();

		push();
		translate(-207.78,-406.75,-43.80);
		sphere(-2.85);
		pop();

		push();
		translate(-276.56,-677.65,-51.69);
		sphere(-3.86);
		pop();

		push();
		translate(-74.10,-1712.74,-514.87);
		sphere(-5.71);
		pop();

		push();
		translate(-189.29,-768.06,-218.26);
		sphere(-4.01);
		pop();

		push();
		translate(-10.80,-66.24,-24.67);
		sphere(1.61);
		pop();

		push();
		translate(-31.28,-138.09,-50.54);
		sphere(0.299);
		pop();

		push();
		translate(-182.56,-360.58,-61.13);
		sphere(-1.62);
		pop();

		push();
		translate(-187.66,-379.19,1.62);
		sphere(-1.64);
		pop();

		push();
		translate(-186.69,-393.94,12.42);
		sphere(-1.63);
		pop();

		push();
		translate(-37.56,-68.63,12.71);
		sphere(2.91);
		pop();


push();
translate(-66.91,38.90,0.63);
sphere(-0.519);
pop();

push();
translate(-106.98,62.73,19.23);
sphere(-0.918);
pop();

push();
translate(-34.93,5.15,7.68);
sphere(1.92);
pop();

push();
translate(-52.90,17.89,14.27);
sphere(1.32);
pop();

push();
translate(-191.01,156.31,42.26);
sphere(-1.46);
pop();

push();
translate(-167.64,49.90,29.82);
sphere(-0.351);
pop();

push();
translate(-214.24,136.14,53.34);
sphere(-1.08);
pop();

push();
translate(-1797.34,1127.25,180.65);
sphere(-5.6);
pop();

push();
translate(-109.38,78.75,-8.85);
sphere(0.432);
pop();

push();
translate(-101.48,80.92,28.42);
sphere(0.828);
pop();

push();
translate(-76.67,16.90,8.40);
sphere(2.08);
pop();

push();
translate(-246.99,223.38,46.15);
sphere(-0.748);
pop();

push();
translate(-149.03,147.50,38.59);
sphere(0.391);
pop();



}

