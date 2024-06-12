// const { json } = require("express");

var monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  function date() {
    var date = new Date();
  
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
  
    //AM or PM
    if (hrs > 12) {
      document.getElementById("period").innerHTML = "PM";
    } else {
      document.getElementById("period").innerHTML = "AM";
    }
  
    // Convert to 12-hour format
    if (hrs > 12) {
      hrs -= 12;
    }
  
    if (hrs < 10) {
      hrs = "0" + hrs;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec <= 10) {
      min = "0" + min;
    }
  
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
  
    var d = date.getDay();
    var m = date.getMonth();
    var y = date.getFullYear();
    var full_date =
      dayNames[d] +
      "," +
      " " +
      date.getDate() +
      " " +
      monthName[m] +
      "," +
      " " +
      y;
    document.getElementById("date").innerHTML = full_date;
  }
  
  setInterval(date, 1000);
  
  // Weather app
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", () => {
    const weatherValue = prompt("Enter name of District or City");
    // console.log(weatherValue);
  
    if (weatherValue) {
      getWeatherData(weatherValue.trim());
    } else {
      alert("Please enter a location");
    }
  });
  
  function getWeatherData(location) {
    fetch(`https://wttr.in/${location}?format=j1`)
      .then((response) => response.json())
      .then((data) => {
        updateWeatherData(data, location);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }
  
  function updateWeatherData(data, location) {
    const currentCondition = data.current_condition[0];
    document.getElementById(
      "temperature"
    ).innerHTML = `${currentCondition.temp_C}&deg; C`;
    document.getElementById("location-name").textContent = location;
    document.getElementById(
      "humidity"
    ).textContent = `${currentCondition.humidity}%`;
    document.getElementById(
      "pressure"
    ).textContent = `${currentCondition.pressure}mB`;
    document.getElementById(
      "wind-speed"
    ).textContent = `${currentCondition.windspeedKmph} km/h`;
  }
  
  // favourite To do List code
  
  let currentIndex = 1;
  const todoList = document.getElementById("todoListfavourite");
  const addButton = document.getElementById("add-site");
  
  addButton.addEventListener("click", () => {
    const promptValue = prompt("Enter New Title");
    if (promptValue === null || promptValue.trim().length === 0) {
      alert("Title is mandatory");
      return;
    }
  
    const promptUrl = prompt("Enter New Url");
    if (promptUrl === null || promptUrl.trim().length === 0) {
      alert("URL is mandatory");
      return;
    }
  
    const tr = document.createElement("tr");
    const indexTd = document.createElement("td");
    indexTd.textContent = currentIndex++;
    const titleTd = document.createElement("td");
    titleTd.textContent = promptValue;
    const urlTd = document.createElement("td");
    const urlLink = document.createElement("a");
    urlLink.href = promptUrl;
    urlLink.textContent = promptUrl;
    urlLink.target = "_blank";
    urlTd.appendChild(urlLink);
    const editTd = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.innerHTML =
      '<span class="material-symbols-outlined edit-icon">edit_square</span>';
    editButton.addEventListener("click", () => {
      const newTitle = prompt("Edit Title", promptValue);
      if (newTitle !== null && newTitle.trim().length > 0) {
        titleTd.textContent = newTitle;
      }
      const newUrl = prompt("Edit URL", promptUrl);
      if (newUrl !== null && newUrl.trim().length > 0) {
        urlLink.href = newUrl;
        urlLink.textContent = newUrl;
      }
    });
    editTd.appendChild(editButton);
    const deleteTd = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML =
      '<span class="material-symbols-outlined delete-icon">delete</span>';
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(tr);
      updateIndex();
    });
    deleteTd.appendChild(deleteButton);
  
    tr.appendChild(indexTd);
    tr.appendChild(titleTd);
    tr.appendChild(urlTd);
    tr.appendChild(editTd);
    tr.appendChild(deleteTd);
  
    todoList.appendChild(tr);
  });
  
  function updateIndex() {
    const rows = todoList.getElementsByTagName("tr");
    currentIndex = 1;
    for (const row of rows) {
      row.firstElementChild.textContent = currentIndex++;
    }
  }
  
  // // modalBox code
  
  function showModal() {
      document.getElementById("modal").style.display = "block";
  }
  
  function hideModal() {
      document.getElementById("modal").style.display = "none";
  }
  
  let currentIndex1 = 1;
  const records = document.getElementById("records");
  const todoTitle = document.getElementById("todo-title");
  const addButton1 = document.getElementById("add-button");
  
  addButton1.addEventListener("click", () => {
      const todoList = todoTitle.value;
      if (todoList === null || todoList.trim().length === 0) {
          alert("Title is mandatory");
          return;
      }
  
      const tr = document.createElement("tr");
      const indexTd = document.createElement("td");
      indexTd.textContent = currentIndex++;
      const titleTd = document.createElement("td");
      titleTd.textContent = todoList;
      
      const editTd = document.createElement("td");
      const editButton = document.createElement("button");
      editButton.innerHTML = '<span class="material-symbols-outlined edit-icon">edit_square</span>';
      editButton.addEventListener("click", () => {
          const newTitle = prompt("Edit Title", titleTd.textContent);
          if (newTitle !== null && newTitle.trim().length > 0) {
              titleTd.textContent = newTitle;
          }
      });
      editTd.appendChild(editButton);
  
      const deleteTd = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<span class="material-symbols-outlined delete-icon">delete</span>';
      deleteButton.addEventListener("click", () => {
          records.removeChild(tr);
          updateIndex();
      });
      deleteTd.appendChild(deleteButton);
  
      tr.appendChild(indexTd);
      tr.appendChild(titleTd);
      tr.appendChild(editTd);
      tr.appendChild(deleteTd);
  
      records.appendChild(tr);
      todoTitle.value = "";
      hideModal();
  });
  
  function updateIndex() {
      const rows = records.getElementsByTagName("tr");
      currentIndex = 1;
      for (const row of rows) {
          row.firstElementChild.textContent = currentIndex++;
      }
  }
  
  