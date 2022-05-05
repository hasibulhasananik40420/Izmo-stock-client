import React from 'react';
import 'flowbite';

const Header = () => {
    return (

      <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://img.freepik.com/free-photo/red-front-cars-running-road_37416-46.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580"
            className="block w-full"
            alt="Wild Landscape"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://static.nissandime.com/permalink/v1/1/21911/document/22Altima_Offer_PFA_D.jpg?token=ssAf4CaN1ZNeR7AOViFT39pNggwXtm4tGlDbItcXXX9lBaRz7yzQwChyztrgAh03"
            className="block w-full"
            alt="Camera"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/generic-hero/covid-banner/mss_1300x600.webp?rev=7ce75923789f493493a34191114568df&extension=webp"
            className="block w-full"
            alt="Exotic Fruits"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    );
};

export default Header;