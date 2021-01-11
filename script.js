
var d1 = true;
  	var d2 = true;
  	var d3 = true;
  	var d4 = true;
  	var d5 = true;
  	var d6 = true;

	function showDiv1() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
		document.getElementById('rDisp').style.display = "block";
		d1 = false;
		unhoverDiv1()
		}
	}
	function showDiv2() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
		document.getElementById('zDisp').style.display = "block";
		d2 = false;
		unhoverDiv2()
	}
	}	
	function showDiv3() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
		document.getElementById('dDisp').style.display = "block";
		d3 = false;
		unhoverDiv3()
	}
	}	
	function showDiv4() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
		document.getElementById('jDisp').style.display = "block";
		d4 = false;
		unhoverDiv4()
	}
	}	
	function showDiv5() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
		document.getElementById('cDisp').style.display = "block";
		d5 = false;
		unhoverDiv5()
	}
	}	
	function showDiv6() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
		document.getElementById('sDisp').style.display = "block";
		d6 = false;
		unhoverDiv6()
	}
	}	

	function hoverDiv1() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
			document.getElementById('rImage').style.opacity = "0.3";
			document.getElementById('rImage').style.cursor = "pointer";
		}
	}
	function hoverDiv2() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
			document.getElementById('zImage').style.opacity = "0.3";
			document.getElementById('zImage').style.cursor = "pointer";
		}
	}
	function hoverDiv3() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
			document.getElementById('dImage').style.opacity = "0.3";
			document.getElementById('dImage').style.cursor = "pointer";
		}
	}
	function hoverDiv4() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
			document.getElementById('jImage').style.opacity = "0.3";
			document.getElementById('jImage').style.cursor = "pointer";
		}
	}
	function hoverDiv5() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
			document.getElementById('cImage').style.opacity = "0.3";
			document.getElementById('cImage').style.cursor = "pointer";
		}
	}
	function hoverDiv6() {
		if (d1 == true && d2 == true  && d3 == true  && d4 == true  && d5 == true  && d6 == true) {
			document.getElementById('sImage').style.opacity = "0.3";
			document.getElementById('sImage').style.cursor = "pointer";
		}
	}

	function unhoverDiv1() {
		document.getElementById('rImage').style.opacity = "1";
		document.getElementById('rImage').style.cursor = "default";
	}
	function unhoverDiv2() {
		document.getElementById('zImage').style.opacity = "1";
		document.getElementById('zImage').style.cursor = "default";
	}
	function unhoverDiv3() {
		document.getElementById('dImage').style.opacity = "1";
		document.getElementById('dImage').style.cursor = "default";
	}

	function unhoverDiv4() {
		document.getElementById('jImage').style.opacity = "1";
		document.getElementById('jImage').style.cursor = "default";
	}
	function unhoverDiv5() {
		document.getElementById('cImage').style.opacity = "1";
		document.getElementById('cImage').style.cursor = "default";
	}
	function unhoverDiv6() {
		document.getElementById('sImage').style.opacity = "1";
		document.getElementById('sImage').style.cursor = "default";
	}

	function hideDiv1() {
		document.getElementById('rDisp').style.display = "none";
		d1 = true;
	}
	function hideDiv2() {
		document.getElementById('zDisp').style.display = "none";
		d2 = true;
	}
	function hideDiv3() {
		document.getElementById('dDisp').style.display = "none";
		d3 = true;
	}

	function hideDiv4() {
		document.getElementById('jDisp').style.display = "none";
		d4 = true;
	}
	function hideDiv5() {
		document.getElementById('cDisp').style.display = "none";
		d5 = true;
	}
	function hideDiv6() {
		document.getElementById('sDisp').style.display = "none";
		d6 = true;
	}