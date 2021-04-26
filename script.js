window.onload = function(){


	//ф-ия запрос для каталога
	let getJSON = function(url, callback){
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'json';
		xhr.onload = function (){
			let status = xhr.status;
			if (status === 200) {
				callback(null, xhr.response)
			}
			else {
				callback(status, xhr.response);
			}
		};
	xhr.send();
	}


            getJSON('http://api.openweathermap.org/data/2.5/weather?q=Astana&lang=ru&units=metric&appid=175cda6869afde1d118a6677dda8ecf2',function(err, data){
        if (err !== null) {
            alert ('Ошибка: '+err);
        }
        else {
            console.log(data);

            document.querySelector('.card-body').innerHTML = show_weather(data);
        }
        })


    document.querySelector('#city').addEventListener('change', function() {
        let value = this.value;
        if(value != ''){
        getJSON('http://api.openweathermap.org/data/2.5/weather?q='+value+'&lang=ru&units=metric&appid=175cda6869afde1d118a6677dda8ecf2',function(err, data){
        if (err !== null) {
            alert ('Ошибка: '+err);
        }
        else {
            console.log(data);

            document.querySelector('.card-body').innerHTML = show_weather(data);
        }
        })
        }
    });
    
    function show_weather(data){
    console.log(data.weather[0].description);

    let out = ''
    out +=      `<div class="grid">`
    out +=           `<div class="col-6"> <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""> <h2>+${data.main.temp}</h2>  </div>`
    out +=           `<div class="col-3">${data.weather[0].description}  </div>`
    out +=           `<div class="col-3"></div>`
    out +=           `<div class="col-3">Ясное небо</div>`
    out +=          `<div class="col-3">Ясное небо</div>`
    out +=         `</div>`
        
    return out;
    }
    
}



