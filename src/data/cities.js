export const cities = [
  // India
  { id: 'bengaluru', name: 'Bengaluru', country: 'India', region: 'APAC' },
  { id: 'chennai', name: 'Chennai', country: 'India', region: 'APAC' },
  { id: 'pune', name: 'Pune', country: 'India', region: 'APAC' },
  { id: 'mumbai', name: 'Mumbai', country: 'India', region: 'APAC' },
  { id: 'delhi', name: 'Delhi', country: 'India', region: 'APAC' },
  { id: 'hyderabad', name: 'Hyderabad', country: 'India', region: 'APAC' },

  // Europe
  { id: 'london', name: 'London', country: 'United Kingdom', region: 'EMEA' },
  { id: 'berlin', name: 'Berlin', country: 'Germany', region: 'EMEA' },
  { id: 'paris', name: 'Paris', country: 'France', region: 'EMEA' },
  { id: 'frankfurt', name: 'Frankfurt', country: 'Germany', region: 'EMEA' },
  { id: 'amsterdam', name: 'Amsterdam', country: 'Netherlands', region: 'EMEA' },

  // USA
  { id: 'new-york', name: 'New York', country: 'USA', region: 'North America' },
  { id: 'san-francisco', name: 'San Francisco', country: 'USA', region: 'North America' },
  { id: 'chicago', name: 'Chicago', country: 'USA', region: 'North America' },
  { id: 'houston', name: 'Houston', country: 'USA', region: 'North America' },
  { id: 'boston', name: 'Boston', country: 'USA', region: 'North America' },

  // Middle East
  { id: 'dubai', name: 'Dubai', country: 'UAE', region: 'EMEA' },
  { id: 'abu-dhabi', name: 'Abu Dhabi', country: 'UAE', region: 'EMEA' },

  // Australia
  { id: 'sydney', name: 'Sydney', country: 'Australia', region: 'APAC' },
  { id: 'melbourne', name: 'Melbourne', country: 'Australia', region: 'APAC' },
  { id: 'brisbane', name: 'Brisbane', country: 'Australia', region: 'APAC' },
];

export const getCityById = (id) => cities.find(city => city.id === id);
