   // List of every location along with data about each
   let alltheplaces = [
    ["Glazer Children's Museum", "The Glazer Children's Museum is a non-profit children's museum located in downtown Tampa, Florida, next to the Tampa Museum of Art and Curtis Hixon Park, alongside the Tampa Riverwalk.", 1, 4.5, 27.94960, -82.46152, 16, 'Family Friendly', 'Museum', 'Shopping'], 
    ["Tampa Bay History Center", "Tampa Bay History Center is a history museum in Tampa, Florida. Exhibits include coverage of the Tampa Bay area's first native inhabitants, Spanish conquistadors, and historical figures who shaped the area's history.", 1, 4.6, 27.94225, -82.44990, 37, 'Historical', 'Guided Tour', 'Museum'],
    ["Tampa Riverwalk", "The Tampa Riverwalk is a 2.6-mile-long open space and pedestrian trail along the Hillsborough River in Tampa, Florida.", 0, 4.5, 27.94983, -82.46399, 41, 'Recreation', 'Shopping', 'Food'],
    ["Busch Gardens", "Busch Gardens Tampa Bay is a 335-acre African-centered animal theme park located in Tampa, Florida.", 3, 4.5, 28.03708, -82.42126, 9, 'Recreation', 'Theme Park', 'Alcohol', 'Food'],
    ["Straz Center", "The Straz Center for the Performing Arts provides world-class entertainment, ranging from lavish Broadway shows to classical music and rock concerts.", 2, 3.7, 27.95075, -82.46442, 33, 'Recreation', 'Live Performance', 'Family Friendly'],
    ["Manatee Viewing Center", "Protected marine reserve with a 50-ft. observation tower, trails, a boardwalk & butterfly gardens.", 0, 4.7, 27.79278, -82.40102, 25, 'Wildlife', 'Recreation'],
    ["Adventure Island", "Adventure Island is a water park located northeast of Tampa, Florida, across the street from Busch Gardens Tampa Bay.", 3, 4.3, 28.04197, -82.41352, 2, 'Wild Life', 'Theme Park', 'Food', 'Family Friendly'],
    ["Tampa Museum of Art", "Waterfront space with translucent ceilings & polished stone floors housing modern & classical art.", 1, 4.2, 27.94947, -82.46236, 40, 'Museum', 'Historical'],
    ["Amalie Arena", "Huge, snazzy indoor venue hosting pro hockey & arena-football games, plus concerts & more.", 3, 4.7, 27.9427, -82.45189, 3, 'Sports', 'Family Friendly', 'Alcohol'],
    ["Florida Museum of Photographic Arts", "Gallery features workshops & diverse photographic displays in permanent & rotating exhibits.", 1, 4.1, 27.94739, -82.4602, 14, 'Historical', 'Museum', 'Guided Tour'],
    ["Imagine Museum", "Contemporary gallery showcasing works by American emerging & established studio glass artists.", 1, 4.9, 27.77129, -82.65953, 19, 'Museum', 'Family Friendly'],
    ["J.C. Newman Cigar Company", "Handcrafted premium cigars & a small museum draw smoking aficionados to this longtime factory.", 1, 4.8, 27.96693, -82.44159, 21, 'Historical', 'Shopping'],
    ["Henry B. Plant Museum", "Landmark building hosting exhibits on Florida's early tourism industry plus Asian & European art.", 1, 4.6, 27.94621, -82.46418, 17, 'Museum', 'Historical', 'Guided Tour'],
    ["ZooTampa", "Celebrated zoo offering giraffe feeding, educational programs & a water play area.", 3, 4.6, 28.01501, -82.46993, 50, 'Wildlife', 'Theme Park'],
    ["Wat Mongkolrata Temple", "Wat Mongkolratanaram is a Buddhist Thai temple on the bank of the Palm River in Tampa, Florida.", 1, 4.8, 27.94402, -82.39496, 46, 'Historical', 'Guided Tour'],
    ["Tampa Firefighters Museum", "Former fire station with exhibits on local service history plus firefighting memorabilia & vehicles.", 1, 4.7, 27.95123, -82.45533, 39, 'Museum', 'Historical'],
    ["Dali Museum", "Extensive collection of surrealist art by Salvador Dalí housed in a building with 900 glass panels.", 2, 4.7, 27.76598, -82.63146, 11, 'Museum', 'Historical', 'Family Friendly'],
    ["Museum of Science and Industry", "Interactive exhibits on hurricanes & the human body plus an IMAX theater & butterfly garden.", 1, 3.9, 28.05363, -82.40478, 27, 'Museum', 'Family Friendly', 'Food'],
    ["Seminole Hard Rock Hotel & Casino", "In 2 buildings, 1 with a sleek glass facade, this upscale casino hotel is a mile from Interstate 4 and 9 miles from Busch Gardens Tampa Bay theme park.", 2, 4.4, 27.99297, -82.37213, 31, 'Alcohol', 'Food', 'Sports'],
    ["Legoland", "Vibrant rooms at a colorful Lego-themed property offering a pool, dining & free breakfast.", 3, 4.5, 27.98929, -81.68486, 23, 'Theme Park', 'Family Friendly', 'Food'],
    ["Florida State Fairgrounds", "The Florida State Fairgrounds are located in East Lake-Orient Park, Florida. In addition to holding the annual Florida State Fair, the fairgrounds also host a wide variety of other events throughout the year.", 2, 4.4, 27.98838, -82.366056, 15, 'Family Friendly', 'Food', 'Alcohol'],
    ["Epperson Lagoon", "Slides, water sports & an inflatable course at a family leisure park with cabanas & food outlets.", 2, 4.2, 28.27243, -82.29068, 12, 'Wildlife', 'Recreation'],
    ["Clearwater Marine Aquarium", "Home of the inspiration for Dolphin Tale, this aquarium exhibits marine mammals & sea turtles.", 2, 4.2, 27.976882, -82.81929, 10, 'Wildlife', 'Family Friendly', 'Food'],
    ["American Victory Ship Museum", "Fully restored warship from WWII & the Vietnam War now housing exhibits on maritime history.", 2, 4.7, 27.94373, -82.44409, 5, 'Historical', 'Museum'],
    ["Florida Aquarium", "Aquarium with sharks, penguins, stingray touch tanks, a wild dolphin cruise & a water playground.", 2, 4.5, 27.94401, -82.44485, 13, 'Wildlife', 'Family Friendly', 'Shopping'],
    ["Bok Tower Gardens", "Serene gardens known for their singing tower, whose carillon bells are played several times a day.", 2, 4.8, 27.90967, -81.56647, 8, 'Wildlife', 'Recreation'],
    ["Oxford Exchange", "European-inspired space featuring a restaurant, bookstore, coffeehouse & shop with decor & gifts.", 3, 4.6, 27.94495, -82.4646, 28, 'Food'],
    ["Morean Arts Center", "Contemporary art gallery showcasing local & international work & offering classes & workshops.", 2, 4.5, 27.77145, -82.6442, 26, 'Museum', 'Family Friendly', 'Shopping'],
    ["Ybor City Museum", "Exhibits on Ybor City's cultural history, including a restored home, & Mediterranean gardens.", 1, 4.6, 27.96191, -82.43834, 47, 'Museum', 'Historical', 'Guided Tour'],
    ["USF Contemporary Art Museum", "University-run gallery of 5,000+ modern works in various media by local & international artists.", 1, 4.6, 28.06355, -82.41561, 45, 'Museum', 'Family Friendly'],
    ["American Social", "Vibrant gastropub with updated American comfort food, craft brews, flat-screen TVs & a patio.", 2, 4.2, 27.93939, -82.4544, 4, 'Alcohol', 'Food', 'Sports'],
    ["Anchor and Brine", "Polished waterfront restaurant featuring seafood specialties, cocktail pairings & a terrace.", 2, 4.2, 27.94339, -82.45046, 6, 'Food', 'Alcohol'],
    ["Kitchen & Bar", "Contemporary hotel spot for all-day American fare & cocktails, with a lounge area & display windows.", 2, 4.3, 27.96608, -82.55077, 22, 'Food', 'Alcohol'],
    ["211 Restaurant", "Contemporary eatery in the Hilton Tampa Downtown, featuring American cuisine & a full bar.", 2, 4.3, 27.9464, -82.45807, 1, 'Food', 'Alcohol'],
    ["The Rez Grill", "Hotel restaurant-bar offering traditional American dining & Sunday brunch, plus a social hour.", 2, 4.3, 27.99297, -82.37213, 44, 'Food', 'Alcohol'],
    ["Sunshine Skyway", "Panoramic drives & views over Lower Tampa Bay, with an adjoining beach & popular spots for angling.", 0, 4.7, 27.69797, -82.6784, 34, 'Historical'],
    ["Big Cat Rescue", "Campaigning sanctuary for abused & abandoned big cats offering a range of guided educational tours.", 2, 4.6, 28.06033, -82.57151, 7, 'Wildlife', 'Guided Tour', 'Family Friendly'],  
    ["Tampa Theatre", "Built in 1926, this ornate movie palace features a Wurlitzer organ plus films, shows & other events.", 2, 4.8, 27.95038, -82.4588, 42, 'Live Performance', 'Family Friendly', 'Food'],
    ["Yuengling Brewery", "D. G. Yuengling & Son is the oldest operating brewing company in America, established in 1829.", 1, 4.5, 28.04767, -82.42608, 49, 'Alcohol', 'Historical'],
    ["Raymond James Stadium", "Football stadium for the Tampa Bay Buccaneers, featuring a pirate ship with working cannons.", 3, 4.5, 27.97789, -82.50531, 29, 'Sports', 'Family Friendly'],
    ["International Plaza & Bay Street", "Indoor mall with name-brand stores & high-end designers, plus a mix of casual & upscale restaurants.", 2, 4.6, 27.96544, -82.5206, 20, 'Food', 'Shopping', 'Mall'],
    ["Lettuce Lake Park", "Park features boardwalk, birdwatching, canoeing, fishing dock, picnic tables & barbecue grills.", 1, 4.7, 28.06936, -82.37358, 24, 'Family Friendly', 'Recreation', 'Historical', 'Wildlife'],
    ["TECO Line Streetcar System", "The TECO Line Streetcar is a heritage streetcar transit line in Tampa, Florida, run by the Hillsborough Area Regional Transportation Authority, owned by the city of Tampa, and managed by Tampa Historic Streetcar, Inc.", 1, 4.5, 27.96019, -82.44607, 35, 'Historical', 'Guided Tours'],
    ["Hyde Park", "Upscale Hyde Park is renowned for its dining and nightlife scene along South Howard Avenue, or SoHo, with relaxed global restaurants, local institution Bern's Steak House, and cocktail bars that attract a young nighttime crowd. ", 1, 4.4, 27.93734, -82.46751, 18, 'Food', 'Shopping', 'Mall'],
    ["Sparkman Wharf", "Modern waterfront area featuring hip restaurants & shops, a beer garden & street-food stands.", 2, 4.5, 27.9432, -82.44701, 32, 'Food', 'Shopping', 'Recreation'],
    ["Tampa Convention Center", "The Tampa Convention Center is a mid-sized convention center located in downtown Tampa, Florida at the mouth of the Hillsborough River.", 2, 4.5, 27.94196, -82.45661, 38, 'Food', 'Shopping', 'Live Performance', 'Family Friendly'],
    ["Tampa Union Station", "Tampa Union Station is a historic train station in Tampa, Florida. ", 1, 4.1, 27.95282, -82.45068, 43, 'Historical'],
    ["Sacred Heart Catholic Church", "A Roman Catholic Church in the Diocese of St. Petersburg, serving the community of St. Joseph and surrounding areas since 1888.", 1, 4.8, 27.9489, -82.45739, 30, 'Historical', 'Guided Tour'],
    ["Ybor City Saturday Market", "The Ybor Saturday market is a weekly vendor market in the heart of ybor.", 2, 4.1, 27.96109, -82.43789, 48, 'Food', 'Shopping'],
    ["Taco Bus", "Taco Bus proudly delivers a healthy, fresh, authentic Mexican taste experience to our Florida fans.", 1, 3.7, 27.94869, -82.45822, 36, 'Food']
  ];
  
  // Variable initialization
  let output = "";
  let temp = alltheplaces;
  
  var distanceOutput = ""
  var change = 1;
  var current = 0;
  var inHelpMenu = false;
  var selected = 0;
  
  // Displays
  function displayMarkers() {
    for (let i = 0; i < temp.length; i++) {
        const marker = new google.maps.Marker({
          position: { lat: temp[i][4], lng: temp[i][5] },
          label: (i+1).toString(),
          map: map,
        });
      }
  }
  
  
  // Sorts the locations based on the key provided
  function sortthestuff(key) {
    temp.sort((a, b) => {
      if (change == 1){
        return a[key]-b[key];
      }
      else {
        return b[key]-a[key];
      }
    });
  
    current = key;
    
    reset()
    update()
    
    initMap()
    displayMarkers()
  }
  
  
  //uses the haversine formula to calculate the distance between two markers
  function haversine(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)
  
    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
  }
  
  
  // Gets and displays the distance between the user's location and the selected location
  function getdistance() {
  
    // Reprints the map
    initMap();
   
    // Either clears the message or returns an error if no location is inputted
    if (document.getElementById("text1").value.length == 0) {
      if (distanceOutput.length == 0) {
        window.alert("ERROR: please input a starting point"); // Returns an error
      return;
      }
      else {
        distanceOutput = ""; // Clears the current distance message
        update();
        ;
        return;
      }
    }
  
    // Sets first location (user location)
    var requestloc = {address: document.getElementById("text1").value};
    console.log("User location set");
  
    // Sets second location (selected location)
    let lat2 = temp[selected][4];
    let lng2 = temp[selected][5];
    console.log("Coordinates of selected location set");
  
  
    // Runs the geocoder function from Google Maps API
    geocoder
      .geocode(requestloc)
      .then((result) => {
        const { results } = result;
        
        
        // Redraws the map
        map.setCenter(results[0].geometry.location);
        userlocation.setPosition(results[0].geometry.location);
        userlocation.setMap(map);
  
        // Sets the latitude and longitude of the selected location
        var lat1 = results[0].geometry.location.lat();
        var lng1 = results[0].geometry.location.lng();
        
      const loc1 = {lat: lat1, lng: lng1};
      const loc2 = {lat: lat2, lng: lng2};
  
      // Creates markers for the two locations
      var mk1 = new google.maps.Marker({position: loc1});
      var mk2 = new google.maps.Marker({position: loc2});
      mk1.setVisible(false);
      mk2.setVisible(false);
      
      // Calculate and display the distance between markers
      var distance = haversine(mk1, mk2);
      console.log("Distance between markers: " + distance.toFixed(2) + " mi.");
  
      // Initializes Google Maps direction API
      let directionsService = new google.maps.DirectionsService();
      let directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const route = {
        origin: loc1,
        destination: loc2,
        travelMode: 'DRIVING'
      }
  
      // Draws the directions on the map
      directionsService.route(route,
      function(response, status) {
        if (status !== 'OK') {
          window.alert('Directions request failed due to ' + status);
          return;
        } 
        else {
          directionsRenderer.setDirections(response);
          var directionsData = response.routes[0].legs[0];
          if (!directionsData) {
            window.alert('Directions request failed');
            return;
          }
          else {
            console.log("Driving distance is " + directionsData.distance.text + " (" + directionsData.duration.text + ").");
          }
        }
  
      });
  
        // Outputs the distance between the two locations
        loc1Name = results[0].formatted_address;
        loc2Name = (temp[document.getElementById("number").value-1][0].replace(/&nbsp/g,''));
        distanceOutput = loc1Name + " is " + directionsData.distance.text + " (" + directionsData.duration.text + ") away from " +loc2Name + ".";
        update();
        ;
      
        return results;
      })
      .catch((e) => {});
  }
  
  
  // Switches the order that the locations are displayed and changes the button text
  function ascending() {
    change *= -1;
    sortthestuff(current);
    if (change > 0) {
      document.getElementById("funnybutton").innerHTML = "Ascending";
    }
    else {
      document.getElementById("funnybutton").innerHTML = "Descending";
    }
    reset()
    update()
    initMap()
    displayMarkers()
  }
  
  
  // Filters the locations by pushing all locations with the filter into a new array
  function filter(key) {
    temp = []
    for (let i = 0; i < alltheplaces.length; i++) {
      for (let j = 0; j < alltheplaces[i].length-7; j++) {
        if (alltheplaces[i][j+7] == key) {
          temp.push(alltheplaces[i])
        }
      }  
    }
    reset()
    update()
    initMap()
    displayMarkers()
  }
  
  // Clears the current filters
  function resetFilters() {
    temp = alltheplaces
    reset()
    update()
    initMap()
  }
  
  
  
  
  // Map stuff :(
  var map;
  let geocoder;
  let userlocation;
  let marker;
  
  
  // Creates the map using Google Maps API
  function initMap() {    
  
    userlocation = new google.maps.Marker({map})
          
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      // Recenters the map at the selected location
      center: { lat: temp[selected][4], lng: temp[selected][5] },
    });
      // Draws a marker at the current location
    marker = new google.maps.Marker({
      position: {lat: temp[selected][4], lng: temp[selected][5] }}).setMap(map);
                
    geocoder = new google.maps.Geocoder();
  
    function initialize() {
      var input = document.getElementById('searchTextField');
      new google.maps.places.Autocomplete(input);
    }
  
    google.maps.event.addDomListener(window, 'load', initialize);
  }
  
  
  
  var num = 0;
  function update() {
  
    // Header element
    document.getElementById("column2").innerHTML = "";
    const elem = document.createElement('div');
    elem.id = "heading";
    elem.classList.add("heading");
    document.getElementById("column2").appendChild(elem);
    document.getElementById("heading").innerHTML = "Top 50 attractions in Tampa Bay";
  
    // Location elements
    for (let i = 0; i < 10; i++) {
      if (temp.length > i+num) {
        const elem = document.createElement('div');
        elem.classList.add("location");
        elem.id = "div"+i;
        document.getElementById("column2").appendChild(elem);
  
        // Button functionality
        elem.onclick = function(){
          update()
          selected = Number((elem.id).substring(3, 4))+num;
          initMap()
          openInfo(i)
          const more = document.createElement('p');
          more.classList.add("more");
          more.id = "more"+i;
          document.getElementById("div"+i).appendChild(more);
          if (temp[i+num][2] == 0) {
            document.getElementById("more"+i).innerHTML = "Free" + "<br>" + "★".repeat(temp[i+num][3]) + " <br><br>Tags: ";
          }
          document.getElementById("more"+i).innerHTML = "$".repeat(temp[i+num][2]) + "<br>" + "★".repeat(temp[i+num][3]) + " <br><br>Tags: ";
          
          console.log(temp[i+num][0]);
          
          for (let j = 0; j+7 < temp[i+num].length; j++) {  
            document.getElementById("more"+i).innerHTML += " " + temp[i+num][j+7] + ",";
          }
          document.getElementById("more"+i).innerText = (document.getElementById("more"+i).innerText).slice(0, -1);
        }
  
        // Title of location
        const title = document.createElement('p');
        title.classList.add("title");
        title.id = "title"+i;
        document.getElementById("div"+i).appendChild(title);
  
        // Description of location
        const desc = document.createElement('p');
        desc.classList.add("desc");
        desc.id = "desc"+i;
        document.getElementById("div"+i).appendChild(desc);
      }
    }
  
    for (let i = 0; i < 10; i++) {
      document.getElementById("title"+i).innerHTML = (i+1+num) + ". " + temp[i+num][0];
      document.getElementById("desc"+i).innerHTML = temp[i+num][1];
    }
  }
  
  
  // Toggles between displaying and closing the help menu
  function helpMenu() {
  
    update()
  
      document.getElementById("column2").innerHTML = "";
      const elem = document.createElement('div');
      elem.id = "heading";
      elem.classList.add("heading");
      document.getElementById("column2").appendChild(elem);
      document.getElementById("heading").innerHTML = "Top 50 attractions in Tampa Bay";
  
    const helpAdd = document.createElement('div');
    document.getElementById("column2").appendChild(helpAdd);
    helpAdd.id = "helpText";
    elem.classList.add("helpText");
    document.getElementById("helpText").innerHTML = "Welcome to Explore Tampa Bay!<br><br>In this program, you can browse a list of 50 attractions around the Tampa Bay Area. On the top of the screen you will see the map, where locations are dynamically updated depending on what you filter or sort by. Under the map you will see a list of the 50 locations.<br><br>Each attraction displays a dollar sign symbol and a star rating. The dollar signs listed next to each location correspond to its price. An attraction with no dollar sign costs nothing, 1 dollar sign costs $10 or less, 2 dollar signs costs $10-$25, and 3 dollar signs costs $25 or more. The Star count is based on the average rating based on reviews of the location on Google Maps.<br><br>The Current Location text box you see allows you to enter a number (1-50), which corresponds to the location listed below. The View Location button allows you to view the chosen location.<br><br>The Sort and Filter dropdown menus allow you to change which locations are displayed. Choosing an option in the Sort dropdown menu sorts the entire list of attractions based on the selected attribute. Choosing an option in the filter menu allows you to only view locations with that selected attribute. To restore the full list of 50 locations, select the 'None' option under the Filter dropdown.The ascending/descending button switches the order of the display to the order that the button reads.<br><br>The Starting Point text box and Directions button allow you to find directions to a selected attraction. Simply type in your current location into the Starting Point text box, and press the Directions button to view directions to the currently selected location. Additionally, the Directions button will display how long it would take to drive to the location.<br><br>Press Help to exit this menu, and press it again at any time to return. Thank you for using Explore Tampa Bay!";
    
  
      
  
  }
  
  
  
  
  function next() {
    if (num+10 < temp.length) {
      num = num + 10;
      update()
    }
  }
  
  function back() {
    if (num > 0) {
      num = num - 10;
      update()
    }
  }
  
  
  function reset() {
    num = 0;
    update()
  }
  
  
  function openInfo(j) {
    document.getElementById("div"+j).style.height = "200px";
    document.getElementById("div"+j).style.backgroundColor = "#ebebeb";
    document.getElementById("div"+j).style.transition = "all 0.3s";
    document.getElementById("div"+j).style.border =  "1px solid #bfc5ce";
  }
  
  