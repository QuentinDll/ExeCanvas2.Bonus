var logo = document.getElementById('logo');
var logo = logo.getContext('2d');

// box
logo.beginPath();
logo.moveTo(0, 0);
logo.lineTo(1000, 0);
logo.lineTo(1000, 500);
logo.lineTo(0, 500);
logo.strokeStyle = '#000';
logo.stroke();

// E
logo.beginPath();
logo.moveTo(100,50);
logo.lineTo(100,350);
logo.lineWidth = '6';
logo.strokeStyle = '#000';
logo.stroke();

logo.beginPath();
logo.moveTo(100,50);
logo.lineTo(250,50);
logo.lineWidth = '6';
logo.strokeStyle = '#000';
logo.stroke();

logo.beginPath();
logo.moveTo(100,200);
logo.lineTo(250,200);
logo.lineWidth = '6';
logo.strokeStyle = '#000';
logo.stroke();

logo.beginPath();
logo.moveTo(100,350);
logo.lineTo(250,350);
logo.lineWidth = '6';
logo.strokeStyle = '#000';
logo.stroke();


// 2
logo.beginPath();
logo.lineWidth = '15';
logo.strokeStyle = '#EA4E1D';
logo.moveTo(255, 50);
logo.bezierCurveTo(600, -50, 600, 25, 250, 450)
logo.stroke();

logo.beginPath();
logo.lineWidth = '15';
logo.moveTo(250, 450);
logo.lineTo(450, 400);
logo.strokeStyle = '#EA4E1D';
logo.stroke();

// N
logo.beginPath();
logo.moveTo(525,50);
logo.lineTo(525,350);
logo.lineWidth = '6';
logo.strokeStyle = '#000';
logo.stroke();

logo.beginPath();
logo.moveTo(525,50);
logo.lineTo(725,350);
logo.lineWidth = '6';
logo.strokeStyle = '#000';
logo.stroke();

logo.beginPath();
logo.moveTo(725,50);
logo.lineTo(725,350);
logo.lineWidth = '6';
logo.strokeStyle = '#000';
logo.stroke();

// text
logo.beginPath();
logo.moveTo(525, 400);
logo.font = '30pt Calibri,Geneva,Arial';
logo.fillStyle = 'grey';
logo.fillText('Ecole du Numérique', 525, 400);
logo.fill();
logo.fillStyle = 'grey';
logo.fillText('du Noyonnais', 525, 440);
