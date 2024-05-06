var post=document.getElementById('post');



fetch('https://api.weatherapi.com/v1/current.json?key=041667d0c69843d8a73100727240105&q=alexandria')
    .then( (resp) =>  resp.json()  )
    .then( (json)  => {
        var preview =``;

        var lo =json["location"];
        var cu = json["current"]
        var co = json["current"]["condition"];
        
            preview= ` 
          <div class="col-md-5 left">
            <h2>${lo.name}, ${lo.country}</h2>
            <sp>${lo.region}</sp>
            <div class="d-flex align-items-center alltodayTemperature">
              <span class="todayTemperature">${cu.temp_c}<sup>o</sup>C</span>
              <img src="${co.icon}" alt="">
            </div>
            <span class="weatherType">${co.text}</span>
            <br>
            <br>
         <h6>${lo.localtime}  </h6>
            <div class="allIcons flex-wrap d-flex">
            </div>
      </div>
            </div>
        </div>`
        // fillAllProducts.insertAdjacentHTML('afterbegin',preview)
        post.innerHTML = preview;
        
      })

      // ------------------------------------------------------------------------------


      function search(search) {
        async function resultweather (search) {
          const response = await fetch(
            "https://api.weatherapi.com/v1/current.json?key=041667d0c69843d8a73100727240105&q=" +
              search
          );
      
      
          news = await response.json();
          // console.log(news.location.name);
      
          post.innerHTML = `
          <div class="col-md-5 left">
          <h2>${news.location.name}, ${news.location.country}</h2>
          <h4>${news.location.region}</h4>
          <div class="d-flex align-items-center alltodayTemperature">
            <span class="todayTemperature">${news.current.temp_c}<sup>o</sup>C</span>
            <img src="${news.current.condition.icon}" alt="">
          </div>
          <span class="weatherType">${news.current.condition.text}</span>
          <br>
         <span>${news.location.localtime}  <span>
          <div class="allIcons flex-wrap d-flex">
          </div>
    </div>  
          </div>
      </div>

         `;
        }
        resultweather(search);
      }
// ---------------------------------------------------------------------

  

var hour =document.getElementById('hour');
fetch('https://api.weatherapi.com/v1//forecast.json?key=041667d0c69843d8a73100727240105&q=search&days=1')
    .then( (resp) =>  resp.json()  )
    .then( (json)  => {

        console.log(json["forecast"].forecastday[0].hour);
        
        var fo = json["forecast"].forecastday[0].hour;
        var time=``;
for (const item of fo) {
  console.log(item.time)
  time += ` <div class="col-md-5 left">
  <h2>${item.time}
  <div class="d-flex align-items-center alltodayTemperature">
    <span class="todayTemperature">${item.pressure_mb}<sup>o</sup>C</span>
    <img src="${item.condition.icon}" alt="">
  </div>
  <span class="weatherType">${item.time_epoch}</span>
  <br>
  <br>
<h6>${item.cloud}  </h6>
  <div class="allIcons flex-wrap d-flex">
  </div>
</div>
  </div>
</div>
`
hour.innerHTML = time;
}
    })












