import React, { useState, useEffect, useRef } from "react";
import { FormControl, TextField, Button, Grid, Typography, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function DestinationBox() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState(null);
  const [carQuantity, setCarQuantity] = useState(1);
  const [carDetails, setCarDetails] = useState({
    year: '',
    make: '',
    model: ''
  });

  

  const pickupRef = useRef(null);
  const destinationRef = useRef(null);

  const apiKey = 'AIzaSyBtMp-wqCBAjy3x7QXUdBGj86yIfgDGXCA';

  useEffect(() => {
    if (window.google) {
      const pickupAutocomplete = new window.google.maps.places.Autocomplete(pickupRef.current);
      const destinationAutocomplete = new window.google.maps.places.Autocomplete(destinationRef.current);

      pickupAutocomplete.addListener("place_changed", () => {
        const place = pickupAutocomplete.getPlace();
        setPickupLocation(place.formatted_address);
      });

      destinationAutocomplete.addListener("place_changed", () => {
        const place = destinationAutocomplete.getPlace();
        setDestinationLocation(place.formatted_address);
      });
    }
  }, []);

  const calculateDistance = async () => {
    if (!pickupLocation || !destinationLocation) {
      setError("Please enter both pickup and destination locations.");
      return;
    }

    setError(null);

    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${encodeURIComponent(pickupLocation)}&destinations=${encodeURIComponent(destinationLocation)}&key=${apiKey}`);
      const data = await response.json();

      if (data.rows[0].elements[0].status === "OK") {
        const distanceInMiles = data.rows[0].elements[0].distance.value * 0.000621371; // Convert meters to miles
        setDistance(distanceInMiles.toFixed(2)); // Set distance in miles, rounded to two decimal places
      } else {
        setError("Unable to calculate distance. Please check the addresses.");
      }
    } catch (err) {
      setError("Error fetching distance. Please try again later.");
      console.error(err);
    }
  };


  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="50vh" p={2} mt={12} >
      <Grid container spacing={4} justifyContent="center" alignItems="center" maxWidth="lg">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Shipping Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  inputRef={pickupRef}
                  id="pickup"
                  label="Pickup Location"
                  variant="outlined"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Enter pickup address"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  inputRef={destinationRef}
                  id="destination"
                  label="Destination Location"
                  variant="outlined"
                  value={destinationLocation}
                  onChange={(e) => setDestinationLocation(e.target.value)}
                  placeholder="Enter destination address"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Pick Date"
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={1} md={2}>
          <Typography variant="h5" gutterBottom>
            Car Details
          </Typography>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Car Quantity"
                  variant="outlined"
                  type="number"
                  value={carQuantity}
                  onChange={(e) => setCarQuantity(e.target.value)}
                  inputProps={{ min: 1 }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Car Year"
                  variant="outlined"
                  value={carDetails.year}
                  name="year"
                  onChange={(e) => setCarDetails({ ...carDetails, year: e.target.value })}
                  placeholder="Enter car year"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Car Make"
                  variant="outlined"
                  value={carDetails.make}
                  name="make"
                  onChange={(e) => setCarDetails({ ...carDetails, make: e.target.value })}
                  placeholder="Enter car make"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Car Model"
                  variant="outlined"
                  value={carDetails.model}
                  name="model"
                  onChange={(e) => setCarDetails({ ...carDetails, model: e.target.value })}
                  placeholder="Enter car model"
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={calculateDistance}
            sx={{ mt: 2 }}
          >
            Get Quote
          </Button>
        </Grid>

        {error && (
          <Grid item xs={12}>
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          </Grid>
        )}

        {distance && (
          <Grid item xs={12}>
            <Typography variant="h6">
              Distance: {distance} miles
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}