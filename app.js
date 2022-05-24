let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let percent = document.getElementById('percent').value;

    if (percent <= '25%') {
        let colorOfPoint = document.querySelector('.colorOfPoint');
        colorOfPoint.classList.add('round-1');

        let result = document.getElementById('result');
        result.innerHTML = percent + ' [ Green Zone ]';
    } 
    else if (percent <= '45%') {
        let colorOfPoint = document.querySelector('.colorOfPoint');
        colorOfPoint.classList.add('round-2');

        let result = document.getElementById('result');
        result.innerHTML = percent + ' [ Yellow Zone ]';
    }
    else if (percent <= '65%') {
        let colorOfPoint = document.querySelector('.colorOfPoint');
        colorOfPoint.classList.add('round-3');

        let result = document.getElementById('result');
        result.innerHTML = percent + ' [ Red Zone ]';
    }
    else {
        let result = document.getElementById('result');
        result.innerHTML = percent + ' [ Lockdown situation ]';
    }
})