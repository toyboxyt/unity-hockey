#pragma strict
var scalefieldx = 5.0f;
var scalefieldy = 9.0f;

var speed : float = 1.0;
function Update () {
	
	/*
	if(Input.GetButton("Mouse Y")){
		transform.Translate(Vector3(0, 0, speed) * Time.deltaTime);
	}
	
	if(Input.GetButton("Mouse Y")){
		transform.Translate(Vector3(0, 0, -speed) * Time.deltaTime);
	}
	*/
	
	//if(Input.GetAxis ("Mouse X"))
	
	
	
	
	{
	
	 	var mousepos = new Vector3(Input.mousePosition.x/(320/scalefieldx) - scalefieldx/2, 0.0f, Input.mousePosition.y/(480/scalefieldy) - scalefieldy);
		transform.position = mousepos;
		//Debug.Log("transform=" + mousepos +" " + mousepos);
	}
	/*
	{
		var translationX : float = Input.GetAxis ("Mouse X") * speed * Time.deltaTime;
		var translationZ : float = Input.GetAxis ("Mouse Y") * speed * Time.deltaTime;
		
		
		transform.Translate (translationX, 0, translationZ);
		Debug.Log("transform=" + translationX +" " + translationZ);

	}
	*/
	

	if(transform.position.x < -scalefieldx){
		transform.position.x = -scalefieldx;
	}else if(transform.position.x > scalefieldx){
		transform.position.x = scalefieldx;
	}
	if(transform.position.z > -1){
		transform.position.z = -1;
	}else if(transform.position.z < -scalefieldy){
		transform.position.z = -scalefieldy;
	}
	
	
	
	
	
	
}