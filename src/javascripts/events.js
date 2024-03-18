function events() {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => {
        const upcoming_events = data.upcoming_events;
        upcoming_events.forEach((event) => {
          upcoming_event += `
          
          `;
  

        });
        
      });
  }
  
  events();