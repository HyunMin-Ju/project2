function setup(){
  //배경
  createCanvas(1050,685);
  background('skyblue');
  
  //도로
 fill('gray');
triangle(250,685,785,685,525,250);
  
  //도로 위의 선
  fill('yellow');
  quad(515, 685, 535,685, 532,520,518,520);          quad(519,500,531,500,528,390,522,390); triangle(523,370,527,370,525,270);
  
  //연두색 잔디
  fill(143,222,36);  triangle(230,685,250,685,525,250);  triangle(785,685,805,685,525,250);
  
  
  //초록색 
  fill(2,149,47);
  triangle(180,685,230,685,525,250);
  triangle(805,685,855,685,525,250);
  fill(143,222,36);  triangle(230,685,250,685,525,250);  triangle(785,685,805,685,525,250);
  
  //오른쪽, 왼쪽 첫번째 나무
  strokeWeight(50);
  stroke(203,87,14);
  line(170,685,170,250);
  line(860,685,860,250); 
  strokeJoin(ROUND);
  strokeWeight(25);
  
  //왼쪽 첫번째 나무 가지1
  beginShape();
  vertex(80,190);
  vertex(170,250);
  vertex(20,400);
  endShape();
  
  //왼쪽 첫번째 나무 가지2
  beginShape();
  vertex(300,200);
  vertex(170,250);
  vertex(270,50);
  endShape();
  
  //오른쪽 첫번째 나무 가지1
  beginShape();
  vertex(950,220);
  vertex(860,250);
  vertex(980,530);
  endShape();
  
  //오른쪽 첫번째 나무 가지2
  beginShape();
  vertex(700,200);
  vertex(860,250);
  vertex(730,40);
  endShape();
  
  //오른쪽, 왼쪽 두번째 나무
  strokeWeight(30);
  stroke(203,87,14);
  line(330,510,330,280);
  line(710,510,710,280);
  strokeJoin(ROUND);
  strokeWeight(15);
  
  //왼쪽 두번째 나무 가지1
  beginShape();
  vertex(290,250);
  vertex(330,280);
  vertex(240,300);
  endShape();
  
  //왼쪽 두번째 나무 가지2
  beginShape();
  vertex(360,230);
  vertex(330,280);
  vertex(380,380);
  endShape();
  
  //오른쪽 두번째 나무 가지1
  beginShape();
  vertex(760,290);
  vertex(710,280);
  vertex(760,400);
  endShape();
  
  //오른쪽 두번째 나무 가지2
  beginShape();
  vertex(680,260);
  vertex(710,280);
  vertex(660,370);
  endShape();
  
  
  //오른쪽, 왼쪽 세번째 나무
  strokeWeight(15);
  stroke(203,87,14);
  line(415,400,415,300);
  line(630,400,630,300);
  strokeJoin(ROUND);
  strokeWeight(5);
  
  //왼쪽 세번째 나무 가지1
  beginShape();
  vertex(390,320);
  vertex(415,300);
  vertex(380,250);
  endShape();
  
  //왼쪽 세번째 나무 가지2
  beginShape();
  vertex(440,270);
  vertex(415,300);
  vertex(430,320);
  endShape();
  
  //오른쪽 세번째 나무 가지1
  beginShape();
  vertex(600,280);
  vertex(630,300);
  vertex(600,330);
  endShape();
  
  //오른쪽 세번째 나무 가지2
  beginShape();
  vertex(640,250);
  vertex(630,300);
  vertex(650,310);
  endShape();
  
}

//마우스 누르면 벚꽃 그리기
function draw(){
  if(mouseIsPressed){
   let size = random(5,10);
   stroke(250,240,250); 
 fill(255,140,220);  
 strokeWeight(size*0.3);   ellipse(mouseX,mouseY,size,size);
    ellipse(mouseX-10,mouseY,size,size);
    ellipse(mouseX,mouseY-10,size,size);
  }
  
}

