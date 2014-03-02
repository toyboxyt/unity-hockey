#pragma strict

var vectordir = new Vector3();
var initpos = new Vector3();
static var balllife = 10; // グローバル変数
function Start () {
}

function Update () {

	if(balllife <= 0){
		return;
	}

	this.transform.position += vectordir;
	
	
	if(this.transform.position.z < -15 || this.transform.position.z > 15){
		this.transform.position = initpos;
		balllife--;

	}
}

function OnCollisionEnter(collision : Collision) {
	
	if(collision.gameObject.tag == "wall_lr"){
		vectordir.x *= -1;
	}
	
	if(collision.gameObject.tag == "wall_tb"){
		vectordir.z *= -1;
	}
	
	if(collision.gameObject.tag == "player"){
		if(collision.gameObject.transform.position.x < this.transform.position.x ){
			vectordir.x = Mathf.Abs(vectordir.x);
		}else if(collision.gameObject.transform.position.x > this.transform.position.x ){
			vectordir.x = -Mathf.Abs(vectordir.x);
		}else{
			vectordir.x *= -1;	
		}
		if(collision.gameObject.transform.position.z < this.transform.position.z ){
			vectordir.z = Mathf.Abs(vectordir.z);
		}else if(collision.gameObject.transform.position.z < this.transform.position.z ){
			vectordir.z = -Mathf.Abs(vectordir.z);
		}else{
			vectordir.z *= -1;
		}
		
		
	}
	
}