const slider = document.getElementById("rangeSlider");

slider.addEventListener("change", (event) => 
{ const sliderValue = event.target.value;
    const pageViewsElement = document.getElementById("pageviews");
    
    let pageviews;

    if (sliderValue === 1) {
         pageviews = "10k";
    }
    else if (sliderValue === 2) {
         pageviews = "50k";
    }
    else if (sliderValue === 3) {
         pageviews = "100k";
    }
    else if (sliderValue === 4) {
         pageviews = "500k";
    }
    else if (sliderValue === 5) {
     pageviews = "1M";
    }
    console.log(pageviews)
    pageViewsElement.innerText = pageviews;

    
});

