const slider = document.getElementById("rangeSlider");
// const moneyAmount = document.getElementById("returns");

slider.addEventListener("change", (event) => 
{ const sliderValue = event.target.value;
    const pageViewsElement = document.getElementById("pageviews");
    
    let pageviews;

    if (sliderValue === "1") {
         pageviews = "10k";
    }
    else if (sliderValue === "2") {
         pageviews = "50k";
    }
    else if (sliderValue === "3") {
         pageviews = "100k";
    }
    else if (sliderValue === "4") {
         pageviews = "500k";
    }
    else if (sliderValue === "5") {
     pageviews = "1M";
    } 
    
    pageViewsElement.innerText = pageviews;

        const moneyAmountElement = document.getElementById("returns")
    
        let returns;
    
        if (pageviews === "10k") {
            returns = "£8";
        } else if (pageviews === "50k") {
            returns = "£12";
        } else if (pageviews === "100k") {
            returns = "£16";
        } else if (pageviews === "500k") {
            returns = "£24" ;
        } else if (pageviews === "1M") {
            returns = "£36";
        }
    
        moneyAmountElement.innerText = returns;

    
});

// const toggleElement = document.getElementById("toggle");

// toggleElement.addEventListener("change", () {
//     if (this.checked) {
//         returns ="£6";
//         returns ="£9";
//         returns ="£12";
//         returns ="£18";
//         returns ="£27";

//         toggleElement.innerText = returns;
// });