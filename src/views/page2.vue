<template>
  <div>
    <div>
      <navbar />
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="secondpart">
      <ol class="progtrckr" data-progtrckr-steps="5">
        <li class="progtrckr-done">SELECT CAR</li>
        <!--
 -->
        <li class="progtrckr-done">MODEL & CONDITION</li>
        <!--
 -->
        <li class="progtrckr-done">BOOK AN APPOINTMENT</li>
        <!--
 -->
      </ol>
    </div>
    <br />
    <div class="row">
      <div style="font-size: 26px; font-weight: bold" class="col-12">
        Please enter the following information to see your car valuation.
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-6 ">

            <div ><img src="../assets/images/1.png"></div>
     
      </div>
      <div   class="col-6">
        <div style="padding:30px 20px 30px 0px" class="doingsomeform">
          <div   class="row">
            <div style="font-weight:bold;" class="col-3">Body Type</div>
             <div class="col-9">
                <select style="border-radius: 0px"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>select body type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select></div>
          </div>
          <div style="padding-top:20px" class="row">
            <div style="font-weight:bold;" class="col-3">Mileage</div>
             <div class="col-9">
                <select style="border-radius: 0px"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>select Mileage</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select></div>
          </div>
          <div style="padding-top:20px" class="row">
            <div style="font-weight:bold;padding-top:10px" class="col-3">Option</div>
             <div class="col-9">
               <div id="drink-holder">
                  <select class="aj" size="4">
                  <option selected>basic</option>
                <option>mid option</option>
                   <option>full option</option>
                  <option>i dont know </option>
    
                </select>
                       </div></div>
          </div>
          <div style="padding-top:20px" class="row">
            <div style="font-weight:bold;padding-top:10px" class="col-3">Paint</div>
             <div class="col-9">
               <div id="drink-holder">
                  <select class="aj" size="3">
                  <option selected> Original paint </option>
                <option> Partial repaint </option>
                   <option> Total repaint </option>
    
                </select>
                       </div></div>
          </div>
          <div style="padding-top:20px" class="row">
            <div style="font-weight:bold;padding-top:10px" class="col-3">GCC Specs?</div>
             <div class="col-9">
               <div id="drink-holder">
                  <select class="aj" size="3">
                  <option selected>  GCC Specs </option>
                <option>  Non GCC Specs </option>
                   <option>  I don't know  </option>
    
                </select>
               </div></div>
          </div>
          <div style="padding-top:20px" class="row">
            <div style="font-weight:bold;padding-top:10px" class="col-3">Email</div>
             <div class="col-9">
                   <input type="text" style="border-reduis:0px" class="form-control" placeholder="Please Enter Your Account" >
             </div>
          </div>
          <div style="padding-top:20px;padding-left:20px" class="row">
            <div class="col-12">
              <button style="background-color:#17263c;color:white;font-weight:bold;font-size:30px;width:100%;padding">Continue </button>
            </div>
          </div>
          <div style="padding-top:20px;font-size:10px" class="row">
            <div class="col-12">
              By continuing you agree to the  Terms and Conditions and Privacy Policy
            </div>
            <div class="col-12">
This site is protected by reCAPTCHA and the Google Privacy Policy and Terms and Conditions apply.            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
export default {
  name: "page2",
  components: {
    navbar,
  },
};
</script>
<style>
.aj {
  appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  border: 0;
   overflow-y: auto;
   height: 51px;
}

#drink-holder select option {
  display:inline-block;
     border: 1px solid black;
     padding: 15px;
     background-color: white;
}

#drink-holder {
  display:inline-block;
  vertical-align:top;
  overflow:hidden;
}
.options:focus {
    background:red
}

.options  
{
 
  height: 40px;
  border: 1px solid black;
  padding-top: 5px;
  background: #fff;
   font-weight: bold;
  
}
.select-box {
  cursor: pointer;
  position: relative;
  max-width: 25em;
  width: 100%;
}

.select,
.label {
  color: #414141;
  display: block;
  font: 400 17px/2em "Source Sans Pro", sans-serif;
}

.select {
  width: 100%;
  position: absolute;
  top: 0px;
  padding: 10px 0;
  height: 40px;
  opacity: 0;
  background: none transparent;
  border: 0 none;
}
.select-box1 {
  background: #ececec;
}

.label {
  position: relative;
  padding: 5px 10px;
  cursor: pointer;
}
.open .label::after {
  content: "▲";
}
.label::after {
  content: "▼";
  font-size: 12px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px 15px;
  border-left: 5px solid #fff;
}
ol.progtrckr li.progtrckr-todo:before {
  content: "\039F";
  color: silver;
  background-color: white;
  font-size: 2.2em;
  bottom: -1.2em;
}
ol.progtrckr li.progtrckr-done:before {
  content: "\2713";
  color: white;
  background-color: #17263c;
  height: 2.2em;
  width: 2.2em;
  line-height: 2.2em;
  border: none;
  border-radius: 2.2em;
}
ol.progtrckr li:after {
  content: "\00a0\00a0";
}
ol.progtrckr li:before {
  position: relative;
  bottom: -2.5em;
  float: left;
  left: 50%;
  line-height: 1em;
}

ol.progtrckr[data-progtrckr-steps="2"] li {
  width: 0%;
}
ol.progtrckr[data-progtrckr-steps="3"] li {
  width: 33%;
}
ol.progtrckr[data-progtrckr-steps="4"] li {
  width: 24%;
}
ol.progtrckr[data-progtrckr-steps="5"] li {
  width: 19%;
}
ol.progtrckr[data-progtrckr-steps="6"] li {
  width: 16%;
}
ol.progtrckr[data-progtrckr-steps="7"] li {
  width: 14%;
}
ol.progtrckr[data-progtrckr-steps="8"] li {
  width: 12%;
}
ol.progtrckr[data-progtrckr-steps="9"] li {
  width: 11%;
}

ol.progtrckr li.progtrckr-done {
  color: black;
  border-bottom: 4px solid #17263c;
}
ol.progtrckr li.progtrckr-todo {
  color: silver;
  border-bottom: 4px solid silver;
}
ol.progtrckr {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ol.progtrckr li {
  display: inline-block;
  text-align: center;
  line-height: 3.5em;
}
.doingsomeform {
  width: 650px;
  height: 600px;
  background-color: #ffd618 !important;
  color: black;
}

</style>
