var hotel_arr = []

class Hotel{
    hotelName;
    nrOfNights = Math.floor(Math.random()*11);
    nrOfAvailableNights = Math.floor(Math.random()*21);
    address;
    image;

    constructor(name,addr,img){
        this.hotelName = name;
        this.address = addr;
        this.image = img;
        hotel_arr.push(this);
    }

    showAvailability(){
        var result = ``;
        if (this.nrOfNights<=this.nrOfAvailableNights){
            result = `I'll reserve.`;
        }else{
            result = `Sorry, no available nights for ` + this.hotelName;
        }
        return `<div class="card mb-3" style="max-width: 50%;">
                <div class="row g-0 align-items-center">
                <div class="col-lg-4">
                <img src="${this.image}"
                class="img-fluid rounded-start" alt="${this.hotelName}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${this.hotelName}</h5>
                    <p class="card-text">${this.address}<br>${result}<hr></p>
            <p class="card-text"><small class="text-muted">You can book ${this.nrOfAvailableNights} nights</small></p>
            </div>
            </div>
        </div>
        </div> `;
    }
}

new Hotel("QWERTZ","Creative Street 106,<br> 1234 Pederobbe", "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789__340.jpg");
new Hotel("ABC","Another Street 14, <br> 10012 Timbuktu", "https://cdn.pixabay.com/photo/2016/12/11/18/10/apartment-1899964__340.jpg");
new Hotel("DEFG","Creative alley 22, <br> 21893 Wondercity", "https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785__340.jpg");
new Hotel("HIJ","Somewhere 321, <br> 324 ExampleCity", "https://cdn.pixabay.com/photo/2015/07/02/10/29/swimming-828795__340.jpg");
new Hotel("UIOP","Elsewhere Street 3, <br> 324 Example Region", "https://cdn.pixabay.com/photo/2017/12/22/11/09/schilthorn-3033448__340.jpg");


for(let val of hotel_arr){
    document.getElementById("hotel-list").innerHTML += val.showAvailability()
}

for(let val of hotel_arr){
    console.log(val.nrOfNights);
}
