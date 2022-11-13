package com.example.BookingService.proxy;

import com.example.BookingService.model.Reservation;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name ="hotel-service")
public interface RoomProxy
{

    @PostMapping("hotel/makereservation/{hotelName}/{roomid}")
    public ResponseEntity<?> saveReservation(@RequestBody Reservation reservation, @PathVariable String hotelName,@PathVariable int roomid);

}
