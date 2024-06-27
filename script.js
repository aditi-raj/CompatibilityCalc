function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById('name2').value.trim();

  if (name1 == '' || name2 == '') {
    alert('Please enter both names.')
  }
  else {
    const per = Math.floor(Math.random() * 101);
    const res = document.getElementById('result');

    res.innerHTML = `${name1} and ${name2} are ${per}% compatible.`
    if (per < 40) {
      res.innerHTML += 'You are not compatible at all.';
    }
    else if (40 <= per && per < 80) {
      res.innerHTML += 'Give it a try.';
    } else {
      res.innerHTML += 'You are made for each other. Great Match';
    }
  }
  const showButton = document.getElementById('showButton');
  const myDiv = document.getElementById('result');
  showButton.addEventListener('click', function() {
    myDiv.style.display = 'block';
  });
}
