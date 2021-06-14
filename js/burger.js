/////////////////////////////////////////////////////
/////////////////////  ICON 6  //////////////////////
/////////////////////////////////////////////////////

///Initiation Variables
var icon_6 = document.getElementById("b6");
var topLine_6 = document.getElementById("top-line-6");
var middleLine_6 = document.getElementById("middle-line-6");
var bottomLine_6 = document.getElementById("bottom-line-6");
var state_6 = "menu";  // can be "menu" or "arrow"
var topLineY_6;
var middleLineY_6;
var bottomLineY_6;
var topLeftX_6;
var topRightX_6;
var middleLeftX_6;
var middleRightX_6;
var bottomLeftX_6;
var bottomRightX_6;
var topLeftY_6;
var topRightY_6;
var middleLeftY_6;
var middleRightY_6;
var bottomLeftY_6;
var bottomRightY_6;

///Animation Variables
var segmentDuration_6 = 20;
var menuDisappearDurationInFrames_6 = segmentDuration_6;
var arrowAppearDurationInFrames_6 = segmentDuration_6;
var arrowDisappearDurationInFrames_6 = segmentDuration_6;
var menuAppearDurationInFrames_6 = segmentDuration_6;
var menuDisappearComplete_6 = false;
var arrowAppearComplete_6 = false;
var arrowDisappearComplete_6 = true;
var menuAppearComplete_6 = true;
var currentFrame_6 = 0;
var cPt_6 = { x: 50, y: 50 };  // center point
var tlPt_6 = { x: 30, y: 37 };  // top right point
var trPt_6 = { x: 70, y: 37 };  // top left point
var mlPt_6 = { x: 30, y: 50 };  // middle right point
var mrPt_6 = { x: 70, y: 50 };  // middle left point
var blPt_6 = { x: 30, y: 63 };  // bottom right point
var brPt_6 = { x: 70, y: 63 };  // bottom left point


///Position Rotation
function positionRotation( centerPoint, orbitPoint, angleInRads ) {
  var distance = Math.sqrt( Math.pow( orbitPoint.x-centerPoint.x, 2 ) + Math.pow( orbitPoint.y-centerPoint.y, 2 ) );
  orbitPoint.x = centerPoint.x + Math.cos( angleInRads ) * distance;
  orbitPoint.y = centerPoint.y + Math.sin( angleInRads ) * distance;
}

///Menu Disappear
function menuDisappearAnimation_6() {
	currentFrame_6++;
	if ( currentFrame_6 <= menuDisappearDurationInFrames_6 ) {
		window.requestAnimationFrame( ()=> { 
      var rotation = Math.PI*0.5;  // menu disappear rotation
			//top line
      var tlAng = AJS.easeInBack( 3.7179, 3.7179+rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
      var trAng = AJS.easeInBack( 5.7068, 5.7068+rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
      positionRotation( cPt_6, tlPt_6, tlAng );
      positionRotation( cPt_6, trPt_6, trAng );
      topLine_6.setAttribute( "d", "M"+tlPt_6.x+","+tlPt_6.y+" L"+trPt_6.x+","+trPt_6.y+" Z" );
      //middle line
      var mlAng = AJS.easeInBack( Math.PI, Math.PI+rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
      var mrAng = AJS.easeInBack( 0, rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
      positionRotation( cPt_6, mlPt_6, mlAng );
      positionRotation( cPt_6, mrPt_6, mrAng );
      middleLine_6.setAttribute( "d", "M"+mlPt_6.x+","+mlPt_6.y+" L"+mrPt_6.x+","+mrPt_6.y+" Z" );
      //bottom line
      var blAng = AJS.easeInBack( 2.5652, 2.5652+rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
      var brAng = AJS.easeInBack( 0.5763, 0.5763+rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
      positionRotation( cPt_6, blPt_6, blAng );
      positionRotation( cPt_6, brPt_6, brAng );
      bottomLine_6.setAttribute( "d", "M"+blPt_6.x+","+blPt_6.y+" L"+brPt_6.x+","+brPt_6.y+" Z" );
			//recursion
			menuDisappearAnimation_6();
		});
	} else {
		currentFrame_6 = 0;
		menuDisappearComplete_6 = true;
		openMenuAnimation_6();
	}
}

///Arrow Appear
function arrowAppearAnimation_6() {
	currentFrame_6++;
	if ( currentFrame_6 <= arrowAppearDurationInFrames_6 ) {
    tlPt_6 = { x: 60, y: 30 };
    trPt_6 = { x: 40, y: 50 };
    mlPt_6 = { x: 40, y: 50 };
    mrPt_6 = { x: 60, y: 70 };
		window.requestAnimationFrame( ()=> { 
      var rotation = Math.PI*0.5;  // arrow appear rotation
			//top line
      var tlAng = AJS.easeOutBack( 5.1759, 5.1759+rotation, arrowAppearDurationInFrames_6, currentFrame_6 );
      var trAng = AJS.easeOutBack( Math.PI, Math.PI+rotation, arrowAppearDurationInFrames_6, currentFrame_6 );
      positionRotation( cPt_6, tlPt_6, tlAng );
      positionRotation( cPt_6, trPt_6, trAng );
      topLine_6.setAttribute( "d", "M"+tlPt_6.x+","+tlPt_6.y+" L"+trPt_6.x+","+trPt_6.y+" Z" );
			//center line
      var mlAng = AJS.easeOutBack( Math.PI, Math.PI+rotation, arrowAppearDurationInFrames_6, currentFrame_6 );
      var mrAng = AJS.easeOutBack( 1.1072, 1.1072+rotation, arrowAppearDurationInFrames_6, currentFrame_6 );
      positionRotation( cPt_6, mlPt_6, mlAng );
      positionRotation( cPt_6, mrPt_6, mrAng );
      middleLine_6.setAttribute( "d", "M"+mlPt_6.x+","+mlPt_6.y+" L"+mrPt_6.x+","+mrPt_6.y+" Z" );
      //bottom line
      bottomLine_6.style.opacity = 0;
			//recursion
			arrowAppearAnimation_6();
		});
	} else {
		currentFrame_6 = 0;
		arrowAppearComplete_6 = true;
		openMenuAnimation_6();
	}
}

///Combined Open Menu Animation
function openMenuAnimation_6() {
	if ( !menuDisappearComplete_6 ) { 
		menuDisappearAnimation_6();
	} else if ( !arrowAppearComplete_6) {
		arrowAppearAnimation_6();
	}
}

///Arrow Disappear
function arrowDisappearAnimation_6() {
	currentFrame_6++;
	if ( currentFrame_6 <= arrowDisappearDurationInFrames_6 ) {
		window.requestAnimationFrame( ()=> { 
      var rotation = Math.PI*0.5;  // arrow disapear rotation
			//top line
      var tlAng = AJS.easeInBack( 0.4635, 0.4635+rotation, arrowDisappearDurationInFrames_6, currentFrame_6 );
      var trAng = AJS.easeInBack( Math.PI*1.5, Math.PI*1.5+rotation, arrowDisappearDurationInFrames_6, currentFrame_6 );
      positionRotation( cPt_6, tlPt_6, tlAng );
      positionRotation( cPt_6, trPt_6, trAng );
      topLine_6.setAttribute( "d", "M"+tlPt_6.x+","+tlPt_6.y+" L"+trPt_6.x+","+trPt_6.y+" Z" );
			//center line
      var mlAng = AJS.easeInBack( Math.PI*1.5, Math.PI*1.5+rotation, arrowDisappearDurationInFrames_6, currentFrame_6 );
      var mrAng = AJS.easeInBack( 2.6779, 2.6779+rotation, arrowDisappearDurationInFrames_6, currentFrame_6 );
      positionRotation( cPt_6, mlPt_6, mlAng );
      positionRotation( cPt_6, mrPt_6, mrAng );
      middleLine_6.setAttribute( "d", "M"+mlPt_6.x+","+mlPt_6.y+" L"+mrPt_6.x+","+mrPt_6.y+" Z" );
      //bottom line
      bottomLine_6.style.opacity = 0;
			//recursion
			arrowDisappearAnimation_6();
		});
	} else {
		middleLine_6.style.opacity = "1";
		currentFrame_6 = 0;
		arrowDisappearComplete_6 = true;
		closeMenuAnimation_6();
	}
}

///Menu Appear
function menuAppearAnimation_6() {
	currentFrame_6++;
	if ( currentFrame_6 <= menuAppearDurationInFrames_6 ) {
    tlPt_6 = { x: 37, y: 70 };
    trPt_6 = { x: 37, y: 30 };
    mlPt_6 = { x: 50, y: 70 };
    mrPt_6 = { x: 50, y: 30 };
    bottomLine_6.style.opacity = 1;
		window.requestAnimationFrame( ()=> {  
      var rotation = Math.PI*0.5;  // menu appear rotation
			//top line
			var tlAng = AJS.easeOutBack( 2.1471, 2.1471+rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
			var trAng = AJS.easeOutBack( 4.1360, 4.1360+rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
			positionRotation( cPt_6, tlPt_6, tlAng );
			positionRotation( cPt_6, trPt_6, trAng );
			topLine_6.setAttribute( "d", "M"+tlPt_6.x+","+tlPt_6.y+" L"+trPt_6.x+","+trPt_6.y+" Z" );
      //middle line
      var mlAng = AJS.easeOutBack( Math.PI*0.5, Math.PI*0.5+rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
      var mrAng = AJS.easeOutBack( Math.PI*1.5, Math.PI*1.5+rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
      positionRotation( cPt_6, mlPt_6, mlAng );
      positionRotation( cPt_6, mrPt_6, mrAng );
      middleLine_6.setAttribute( "d", "M"+mlPt_6.x+","+mlPt_6.y+" L"+mrPt_6.x+","+mrPt_6.y+" Z" );
      //bottom line
      var blAng = AJS.easeOutBack( 0.9944, 0.9944+rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
      var brAng = AJS.easeOutBack( 5.2887, 5.2887+rotation, menuDisappearDurationInFrames_6, currentFrame_6 );
      positionRotation( cPt_6, blPt_6, blAng );
      positionRotation( cPt_6, brPt_6, brAng );
      bottomLine_6.setAttribute( "d", "M"+blPt_6.x+","+blPt_6.y+" L"+brPt_6.x+","+brPt_6.y+" Z" );
			//recursion
			menuAppearAnimation_6();
		});
	} else {
		currentFrame_6 = 0;
		menuAppearComplete_6 = true;
	}
}

///Close Menu Animation
function closeMenuAnimation_6() {
	if ( !arrowDisappearComplete_6 ) {
		arrowDisappearAnimation_6();
	} else if ( !menuAppearComplete_6 ) {
		menuAppearAnimation_6();
	}
}

///Events
icon_6.addEventListener( "click", ()=> { 
  if ( state_6 === "menu" ) {
  	openMenuAnimation_6();
  	state_6 = "arrow";
  	arrowDisappearComplete_6 = false;
		menuAppearComplete_6 = false;
  } else if ( state_6 === "arrow" ) {
  	closeMenuAnimation_6();
  	state_6 = "menu";
  	menuDisappearComplete_6 = false;
		arrowAppearComplete_6 = false;
  }
});