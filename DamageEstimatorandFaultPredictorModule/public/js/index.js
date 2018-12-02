/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-env browser */

/**
 * Add detected object info as a row in the table.
 * @param {Object} table
 * @param {string} cellType
 * @param {[]} values
 */
 
var prices = [
  {
    "Model_Type": "Honda",
    "Front_Bumper_high": 2000,
    "Front_Bumper_low": 1000,
    "Front_Bumper_medium": 1500,
    "Rear_Bumper_high": 1500,
    "Rear_Bumper_low": 1000,
    "Rear_Bumper_medium": 2000,
    "WIndShield_low": 500,
    "Windshield_medium": 1000
  },
  {
    "Model_Type": "Bmw",
    "Front_Bumper_high": 4000,
    "Front_Bumper_low": 6000,
    "Front_Bumper_medium": 5000,
    "Rear_Bumper_high": 6000,
    "Rear_Bumper_low": 7000,
    "Rear_Bumper_medium": 9000,
    "WIndShield_low": 700,
    "Windshield_medium": 2000
  }
]

console.log(prices[0])

function addRow(table, cellType, values) {
  const row = document.createElement('tr');
  for (let i = 0; i < values.length; i++) {
    const val = values[i];
    const cell = document.createElement(cellType);
    const text = document.createTextNode(val);
    cell.appendChild(text);
    row.appendChild(cell);
  }
  table.appendChild(row);
}

/**
 * Create and populate a table to show the result details.
 * @param {[]} detectedObjects
 * @param {Object} parent
 */
function detectedObjectsTable(detectedObjects, parent) {
  if (detectedObjects.length > 0) {
    const table = document.createElement('table');
	var maxval = 0;
	var index = 0;
   // addRow(table, 'th', ['Class', 'Confidence Score']);

    for (let i = 0; i < detectedObjects.length; i++) {
				const obj = detectedObjects[i];
                const label = obj['class'];
                const conf = obj['score'].toFixed(3);
				//console.log(conf);
               if(conf > maxval){
				   maxval = conf;
				   index = i;
			   }
			   //console.log(maxval);
  //    addRow(table, 'td', [label, conf]);
	}
    parent.appendChild(table);
	const valans = document.createElement('h4');
	 var  classval = detectedObjects[index]['class'];
	// console.log(classval);
	 var ans = classval.split("_");
	// console.log(ans);
	 var  scoreval =  detectedObjects[index]['score'].toFixed(3);
	 console.log(scoreval);
	 console.log(prices[1]);
	 var finalval = prices[1].Rear_Bumper_high * scoreval;
	 console.log(finalval);
	  valans.textContent="The car is " + ans[0] + " Bumped and the severity is " + ans[1] + " .The total car damage is " + finalval + " $ ";
	  parent.appendChild(valans);
  }
}



window.addEventListener('load', function() {
  const article = document.querySelector('article');

  /**
   * Populate the article with formatted results.
   * @param {Object} jsonResult
   */
  function populateArticle(jsonResult) {
    // Remove previous results
    article.innerHTML = '';

    if (jsonResult.hasOwnProperty('data')) {

      let classified = jsonResult.data.classes;
      const myCount = document.createElement('h3');
      myCount.textContent = "Damage Estimates";
      article.appendChild(myCount);
      detectedObjectsTable(classified, article);
    } else {
      const myDiv = document.createElement('div');
      myDiv.className = 'error';
      myDiv.id = 'error-div';
      const myTitle = document.createElement('h3');
      myTitle.textContent = 'ERROR';
      myDiv.appendChild(myTitle);
      // Dump keys/values to show error info
      for (const key in jsonResult) {
        if (jsonResult.hasOwnProperty(key)) {
          const myP = document.createElement('p');
          myP.textContent = key + ':  ' + jsonResult[key];
          myDiv.appendChild(myP);
        }
      }
      article.appendChild(myDiv);
    }
  }

  // When upload results are loaded (hidden), use them build the results.
  const raw = top.frames['mytarget'];
  const myTarget = document.getElementById('mytarget');
  if (myTarget) { // optional for tests
    myTarget.addEventListener('load', function() {
      let rawContent = raw.document.body.innerText;
      console.log(rawContent);
      let rawJson = JSON.parse(rawContent);
      console.log(rawJson);
      populateArticle(rawJson);
    });
  }

  // image preview
  document.getElementById("foo").addEventListener("change", imagePreview);
  function imagePreview() {
    let input = document.querySelector('input[type=file]');
    if (input.files && input.files[0]) {
      let fileReader = new FileReader();
      fileReader.onload = function () {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = fileReader.result;
        imagePreview.style = "display: block;";
      };

      fileReader.readAsDataURL(input.files[0]);
    }
  }
});
