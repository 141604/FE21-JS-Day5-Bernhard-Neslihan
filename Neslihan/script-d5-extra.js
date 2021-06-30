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
                <div class="row g-0">
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
new Hotel("ABC","Creative Street 106, 1234 Pederobbe", "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789__340.jpg");
new Hotel("DEFG","Creative Street 106, 1234 Pederobbe", "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789__340.jpg");
new Hotel("HIJ","Creative Street 106, 1234 Pederobbe", "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789__340.jpg");


for(let val of hotel_arr){
    document.getElementById("hotel-list").innerHTML += val.showAvailability()
}

