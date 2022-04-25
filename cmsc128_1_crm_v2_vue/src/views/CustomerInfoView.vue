<template>
<div class="customer-info-view container-fluid py-2">
  <div class="customer-info-view-contents default-border container-fluid d-flex">
    <div class="col-lg-7 d-flex justify-content-around">
      <div class="col-lg-5 d-flex flex-column justify-content-around">
        <div class="customer-flag-info-div container-fluid position-relative d-flex justify-content-center">
          <img
            src="../assets/imgs/profile-placeholder.png"
            class="customer-img position-absolute mt-3" 
          />
          <!-- <input 
            type="text" 
            value="Customer Name"
            id="customerNameField"
            class="form-control position-absolute"
          > -->
          <img 
            src="../assets/imgs/customer-image-flag-white.svg"
            class="customer-img-flag"
          />
        </div>
        <div class="personal-info default-border d-flex flex-column align-items-center">
          <p class="text-center fs-5 fw-bold text-decoration-underline mt-2">Personal Info</p>
          <div class="float-container d-flex flex-column">
            <label for="birthdayField">Birthday</label>
            <input 
              type="text" 
              id="birthdayField"
              class="float-field align-self-center"
            >
          </div>
          <div class="float-container d-flex flex-column">
            <label for="genderField">Gender</label>
            <input 
              type="text" 
              id="genderField"
              class="float-field align-self-center"
            >
          </div>
          <div class="float-container d-flex flex-column">
            <label for="nationalityField">Nationality</label>
            <input 
              type="text" 
              id="nationalityField"
              class="float-field align-self-center"
            >
          </div>
          <div class="float-container d-flex flex-column">
            <label for="citizenshipField">Citizenship</label>
            <input 
              type="text" 
              id="citizenshipField"
              class="float-field align-self-center"
            >
          </div>
        </div>
        <div class="bottom-left-buttons d-flex justify-content-between">
          <button type="button" class="btn-lg btn-dark fw-bold">Update</button>
          <button type="button" class="btn-lg btn-dark fw-bold">Add</button>
        </div>
      </div>
      <div class="col-lg-7 d-flex flex-column justify-content-around p-3">
        <div class="addresses-div default-border d-flex flex-column align-items-center">
          <p class="text-center fs-5 fw-bold text-decoration-underline mt-2">Addresses</p>
          <div class="float-container d-flex flex-column">
            <label for="presentAddressField">Present Address</label>
            <input 
              type="text" 
              id="presentAddressField"
              class="float-field align-self-center"
            >
          </div>
          <div class="float-container d-flex flex-column">
            <label for="permanentField">Permanent Address</label>
            <input 
              type="text" 
              id="permanentField"
              class="float-field align-self-center"
            >
          </div>
          <div class="float-container d-flex flex-column">
            <label for="billingAddressField">Billing Address</label>
            <input 
              type="text" 
              id="billingAddressField"
              class="float-field align-self-center"
            >
          </div>
          <div class="float-container d-flex flex-column">
            <label for="shippingAddressField">Shipping Address</label>
            <input 
              type="text" 
              id="shippingAddressField"
              class="float-field align-self-center"
            >
          </div>
          <div class="float-container d-flex flex-column">
            <label for="officeAddressField">Office Address</label>
            <input 
              type="text" 
              id="officeAddressField"
              class="float-field align-self-center"
            >
          </div>
        </div>
        <div class="mobile-numbers default-border d-flex flex-column align-items-center">
          <p class="text-center fs-5 fw-bold text-decoration-underline mt-2">Mobile Numbers</p>
          <div class="split-fields-div d-flex justify-content-around">
            <div class="float-container float-container-split d-flex flex-column">
              <label for="personalMobileNumberField">Personal</label>
              <input 
                type="text" 
                id="personalMobileNumberField"
                class="float-field align-self-center"
              >
            </div>
            <div class="float-container float-container-split d-flex flex-column">
              <label for="officeMobileNumberField">Office</label>
              <input 
                type="text" 
                id="officeMobileNumberField"
                class="float-field align-self-center"
              >
            </div>
          </div>
        </div>
        <div class="landline-numbers default-border d-flex flex-column align-items-center">
          <p class="text-center fs-5 fw-bold text-decoration-underline mt-2">Landline Numbers</p>
          <div class="split-fields-div d-flex justify-content-around">
            <div class="float-container float-container-split d-flex flex-column">
              <label for="homeLandlineNumberField">Home</label>
              <input 
                type="text" 
                id="homeLandlineNumberField"
                class="float-field align-self-center"
              >
            </div>
            <div class="float-container float-container-split d-flex flex-column">
              <label for="officeLandlineNumberField">Office</label>
              <input 
                type="text" 
                id="officeLandlineNumberField"
                class="float-field align-self-center"
              >
            </div>
          </div>
        </div>
        <div class="emails default-border d-flex flex-column align-items-center">
          <p class="text-center fs-5 fw-bold text-decoration-underline mt-2">Emails</p>
          <div class="split-fields-div d-flex justify-content-around">
            <div class="float-container float-container-split d-flex flex-column">
              <label for="personalEmailField">Personal</label>
              <input 
                type="text" 
                id="personalEmailField"
                class="float-field align-self-center"
              >
            </div>
            <div class="float-container float-container-split d-flex flex-column">
              <label for="officeEmailField">Office</label>
              <input 
                type="text" 
                id="officeEmailField"
                class="float-field align-self-center"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5 d-flex position-relative">
      <div class="vertical-lines-div position-absolute d-flex">
        <div class="py-2">
          <div class="vertical-line-lg me-2"></div>
        </div>
        <div class="py-4">
          <div class="vertical-line-sm"></div>
        </div>
      </div>
      <div class="rightmost-div container-fluid d-flex flex-column align-items-center ms-4 ps-4 pt-3 pe-0">
        <div class="top-right-div container-fluid d-flex justify-content-between">
          <div class="company-brand col-lg-6 d-flex flex-column justify-content-between align-items-center px-3">
            <img 
              src="https://wallpaperaccess.com/full/1285952.jpg"
              class="company-logo"
              alt="Company Logo"
            />
            <div class="company-name-div mt-3 container-fluid">
              <p class="fs-5 text-center mt-3">Company Name</p>
            </div>
          </div>
          <div class="top-right-controls col-lg-6 d-flex flex-column justify-content-between align-items-center px-3">
            <button type="button" class="home-btn btn-lg btn-outline-secondary">Back to HOME</button>
            <button type="button" class="subscribe-btn btn-lg btn-dark">Subscribe</button>
            <div class="float-container d-flex flex-column">
            <label for="search">Search</label>
              <input 
                type="search" 
                id="search"
                class="float-field align-self-center"
                aria-label="search"
              >
            </div>
          </div>
        </div>
        <div class="bottom-right-div default-border container-fluid d-flex flex-column align-items-center mt-3 pb-3">
          <p class="text-center fs-5 fw-bold text-decoration-underline mt-2">Other Customers</p>
          <div class="other-customer-suggestion-div default-border d-flex mb-3 p-3">
            <img 
              src="../assets/imgs/profile-placeholder.png"
              class="customer-img-sm me-3"
            />
            <div class="other-customer-info-div d-flex flex-column justify-content-between">
              <p class="fs-6">Customer Name</p>
              <p class="fs-6">Customer Nationality</p>
            </div>
          </div>
          <div class="other-customer-suggestion-div default-border d-flex mb-3 p-3">
            <img 
              src="../assets/imgs/profile-placeholder.png"
              class="customer-img-sm me-3"
            />
            <div class="other-customer-info-div d-flex flex-column justify-content-between">
              <p class="fs-6">Customer Name</p>
              <p class="fs-6">Customer Nationality</p>
            </div>
          </div>
          <div class="other-customer-suggestion-div default-border d-flex mb-3 p-3">
            <img 
              src="../assets/imgs/profile-placeholder.png"
              class="customer-img-sm me-3"
            />
            <div class="other-customer-info-div d-flex flex-column justify-content-between">
              <p class="fs-6">Customer Name</p>
              <p class="fs-6">Customer Nationality</p>
            </div>
          </div>
          <div class="other-customer-suggestion-div default-border d-flex mb-3 p-3">
            <img 
              src="../assets/imgs/profile-placeholder.png"
              class="customer-img-sm me-3"
            />
            <div class="other-customer-info-div d-flex flex-column justify-content-between">
              <p class="fs-6">Customer Name</p>
              <p class="fs-6">Customer Nationality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'CustomerInfoView',
  mounted () {
    // code from and credits to
    // https://itnext.io/how-to-build-a-floating-label-input-field-f9b21669fe2f
    // https://codepen.io/steamforge/pen/NBqMYj

    const FloatLabel = (() => {
  
    // add active class and placeholder 
    const handleFocus = (e) => {
      const target = e.target;
      target.parentNode.classList.add('active');
      target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };

    // remove active class and placeholder
    const handleBlur = (e) => {
      const target = e.target;
      if(!target.value) {
        target.parentNode.classList.remove('active');
      }
      target.removeAttribute('placeholder');    
    };  

    // register events
    const bindEvents = (element) => {
      const floatField = element.querySelector('input');
      floatField.addEventListener('focus', handleFocus);
      floatField.addEventListener('blur', handleBlur);    
    };

    // get DOM elements
    const init = () => {
      const floatContainers = document.querySelectorAll('.float-container');

      floatContainers.forEach((element) => {
        if (element.querySelector('input').value) {
            element.classList.add('active');
        }      

        bindEvents(element);
      });
    };

    return {
      init: init
      };
    })();

    FloatLabel.init();
  }
}
</script>

<style lang="scss" scoped>
.default-border {
  border: 3px solid black;
  border-radius: 8px;
}

input {
  border: 2px solid black;
}

.customer-info-view {
  height: 100vh;
}

.customer-info-view-contents {
  background-color: white;
  height: 100%;
}

.customer-flag-info-div {
  height: 50%;
}

.customer-img-flag {
  height: 100%;
}

.customer-img {
  width: 66%;
  height: 50%;
}

#customerNameField {
  border: 0px;
  top: 55%;
  width: 60%;
}

/*
  code adapted from and credits to
  https://itnext.io/how-to-build-a-floating-label-input-field-f9b21669fe2f
  https://codepen.io/steamforge/pen/NBqMYj
*/
/** float container */
.float-container {
  box-sizing: border-box;
  margin-bottom: 8px;
  position: relative;
  width: 100%;
  
  input {
    font-size: 16px;
    outline: 0;
    padding: 16px 6px 10px;    
    width: 96%;
  }

  label {
    font-size: 16px;
    font-weight: 700;
    position: absolute;
    transform-origin: top left;
    transform: translate(12px, 16px) scale(1); 
    transition: all .1s ease-in-out;  //speed
  }
  
  /** active label */
  &.active {
    label {
      //move the x coordinate and reduce size
      transform: translate(12px, 4px) scale(.75);
    }
  }
}
/* 
  end copied code
*/

.float-container-split {
  width: 49%;
}

.bottom-left-buttons button {
  border-radius: 0px;
  width: 45%;
}

.vertical-lines-div {
  left: 12px;
  height: 100%;
}

.vertical-line-lg {
  border: 6px solid black;
  height: 100%;
}

.vertical-line-sm {
  border: 4px solid black;
  height: 100%;
}

.company-logo {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.company-name-div {
  background: rgb(0,0,0,0.3);
}

.top-right-controls button {
  border-radius: 0px;
  width: 100%;

  &.home-btn {
    width: 90%;
  }
}

.customer-img-sm {
  width: 20%;
}
</style>
