class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    //this.trajectory = [[120,20],[200,30],[300,20]]
    //this.trajectory[0][0]=>120
    ////this.trajectory[0][1]=>20
    //this.trajectory[1][0]=>200
    ////this.trajectory[1][1]=>30
    //this.trajectory[2][0]=>300
    ////this.trajectory[2][1]=>20
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
