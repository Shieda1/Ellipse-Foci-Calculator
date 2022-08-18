// https://calculator.swiftutors.com/ellipse-foci-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ellipseFociRadio = document.getElementById('ellipseFociRadio');
const radiusofMajorAxisRadio = document.getElementById('radiusofMajorAxisRadio');
const radiusofMinorAxisRadio = document.getElementById('radiusofMinorAxisRadio');

let ellipseFoci;
let radiusofMajorAxis = v1;
let radiusofMinorAxis = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

ellipseFociRadio.addEventListener('click', function() {
  variable1.textContent = '(j) Radius of Major Axis';
  variable2.textContent = '(n) Radius of Minor Axis';
  radiusofMajorAxis = v1;
  radiusofMinorAxis = v2;
  result.textContent = '';
});

radiusofMajorAxisRadio.addEventListener('click', function() {
  variable1.textContent = 'Ellipse Foci';
  variable2.textContent = '(n) Radius of Minor Axis';
  ellipseFoci = v1;
  radiusofMinorAxis = v2;
  result.textContent = '';
});

radiusofMinorAxisRadio.addEventListener('click', function() {
  variable1.textContent = 'Ellipse Foci';
  variable2.textContent = '(j) Radius of Major Axis';
  ellipseFoci = v1;
  radiusofMajorAxis = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ellipseFociRadio.checked)
    result.textContent = `Ellipse Foci = ${computeEllipseFoci().toFixed(2)}`;

  else if(radiusofMajorAxisRadio.checked)
    result.textContent = `Radius of Major Axis = ${computeRadiusofMajorAxis().toFixed(2)}`;

  else if(radiusofMinorAxisRadio.checked)
    result.textContent = `Radius of Minor Axis = ${computeRadiusofMinorAxis().toFixed(2)}`;
})

// calculation

function computeEllipseFoci() {
  return Math.sqrt(Math.pow(Number(radiusofMajorAxis.value), 2) - Math.pow(Number(radiusofMinorAxis.value), 2));
}

function computeRadiusofMajorAxis() {
  return Math.sqrt(Math.pow(Number(ellipseFoci.value), 2) + Math.pow(Number(radiusofMinorAxis.value), 2));
}

function computeRadiusofMinorAxis() {
  return Math.sqrt(Math.pow(Number(radiusofMajorAxis.value), 2) - Math.pow(Number(ellipseFoci.value), 2));
}